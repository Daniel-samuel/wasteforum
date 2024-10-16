import { createApp } from "vue";
import App from "../App.vue";
import router from "@/router";

import { createPinia } from "pinia";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { useDataStore } from "@/stores/data";
// import { HttpLink } from "@apollo/client";
import { HttpLink, fromPromise } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
// import { fromPromise } from "@apollo/client/link/http";
import { useToast } from "vue-toastification";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const toast = useToast();

export const AUTH_CONTEXT = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};
let refreshed = {
  value: false,
};
let operation = {
  type: "",
  name: "",
  variables: {},
  link: "",
};
let queriesArr = [];

const removeFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("companyDetails");
  localStorage.removeItem("role");
  localStorage.removeItem("companyId");
  localStorage.removeItem("accountType");
};
export const logout = async (action) => {
  const store = useDataStore();
  const { mutate } = store;
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (action === "refresh" && token && refreshToken) {
    try {
      refreshed.value = true;
      let res = await mutate({
        endpoint: "RefreshToken",
        data: {
          input: {
            refreshTokenId: refreshToken,
            tokenId: token,
          },
        },
        service: "AUTH",
        // queries: [{ query: "ListEmployees" }],
      });
      if (res.success) {
        refreshed.value = true;
        localStorage.setItem("token", res.token);
        localStorage.setItem("refreshToken", res.refreshToken);

        const accessToken = res.token;
        return accessToken;
      } else {
        console.log("Refresh token did not work, so...");

        // toast.error(`Logging User Out`);

        removeFromLocalStorage();

        store.$patch({
          isLoggedIn: false,
          fromApp: false,
        });

        store.$reset();

        router.push("/");
      }
    } catch (e) {
      // toast.error(`Logging User Out`);

      removeFromLocalStorage();

      store.$patch({
        isLoggedIn: false,
      });

      store.$reset();

      router.push("/");
    }
  } else {
    // toast.error(`Logging User Out`);

    removeFromLocalStorage();

    store.$patch({
      isLoggedIn: false,
    });

    store.$reset();

    router.push("/");
  }

  // localStorage.removeItem("token");
  // localStorage.removeItem("companyDetails");
  // localStorage.removeItem("privilege");
  // localStorage.removeItem("accountType");
  // localStorage.removeItem("companyId");
  // store.$patch({
  //   isLoggedIn: false,
  // });

  // store.$reset();
  // store.commit("set", {
  //   type: "isLoggedIn",
  //   data: false,
  // });
  // store.commit("set", {
  //   type: "applicant",
  //   data: "",
  // });
  // store.commit("set", {
  //   type: "UpdateNewLevel",
  //   data: {},
  // });

  // window.localStorage.clear("vuex");

  // router.push("/");
};
let errorShown = false;

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError, operation, forward } = errors;
  console.log(errors);

  if (graphQLErrors && graphQLErrors.length > 0) {
    let e = graphQLErrors[0];
    //check for bad user input

    // if (e.message.includes("Bad user input")) {
    //   toast.error("Please check your input");
    // } else if (errorShown === false) {
    //   errorShown = true;
    //   toast.error(e.message);
    // }

    if (e.message.includes("Bad user input")) {
      toast.error("Please check your input");
    } else if (
      e.extensions.code != "INVALID_TOKEN" &&
      !e.message.toLowerCase().includes("token")
    ) {
      toast.error(e.message);
    }

    // if (e.extensions["code"] === "INTERNAL_SERVER_ERROR") {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case "INVALID_TOKEN":
          return fromPromise(
            logout("refresh").catch((error) => {
              logout("logout");
              // Handle token refresh errors e.g clear stored tokens, redirect to login
              return error;
            })
          )
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              if (accessToken) {
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${accessToken}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              }
            });
      }
    }
    // if (e.extensions["code"] === "INVALID_TOKEN") {
    //   // toast.error(`Logging User Out`);
    //   // window.location.reload();
    //   // if (
    //   //   e.message.toLowerCase() !== "token is not invalid" &&
    //   //   e.message.toLowerCase() !== "invalid token"
    //   // ) {
    //   //   toast.error(e.message);
    //   // }
    //   // queriesArr.push(e.operation.operationName);
    //   operation.type = errors.operation.query.definitions[0].operation;
    //   operation.name = errors.operation.operationName;
    //   operation.variables = errors.operation.variables;
    //   console.log(operation, "OP object", operation.type);
    //   if (refreshed.value === false) {
    //     logout("refresh");
    //   }
    // }
  }

  if (networkError) {
    toast.error(networkError.message);
  }
});

function getService(link) {
  const API = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
  operation.link = link;

  return API;
}
function fetchWithTimeout(uri, options = {}, time) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Request timed out."));
    }, time);
    fetch(uri, options).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

const httplink_payroll = new HttpLink({
  uri: "https://payrollservice-d5ffb79ba43a9141.onporter.run/graphql",
  fetch: (uri, options) => {
    // const timeoutFromHeader = options?.headers?.['x-timeout'];
    const timeout = 300000;
    return fetchWithTimeout(uri, options, timeout);
  },
});
const payrollHttpLink = errorLink.concat(httplink_payroll);

var httplink = new HttpLink({
  // uri: `http://localhost:4000/graphql`,
  uri: `https://authenticationservice-d436bb35114a6196.onporter.run/graphql`,
  // uri: `https://eazipay-authentication-v3-vety3kdfea-uc.a.run.app/graphql`,
  // uri: `https://eazipay-authentication-vety3kdfea-uc.a.run.app/graphql`, //Old Auth Link
});
const authHttpLink = errorLink.concat(httplink);

const httplink_emp = new HttpLink({
  uri: "https://employeemgtservice-5a2d98243525f6bf.onporter.run/graphql",
  fetch: (uri, options) => {
    // const timeoutFromHeader = options?.headers?.['x-timeout'];
    const timeout = 500000;
    return fetchWithTimeout(uri, options, timeout);
  },
});
const empHttpLink = errorLink.concat(httplink_emp);

// const httplink_emp = new HttpLink({
//   // uri: `http://localhost:4001/graphql`,
//   uri: `https://employeemgtservice-5a2d98243525f6bf.onporter.run/graphql`,
//   // uri: `https://eazipay-employee-v3-vety3kdfea-uc.a.run.app/graphql`,
//   // uri: `https://eazihires-emp.herokuapp.com/graphql`,
// });
// const empHttpLink = errorLink.concat(httplink_emp);

// const httplink_payroll = new HttpLink({
//   // uri: `http://localhost:4002/graphql`,
//   uri: `https://payroll-staging-c3e1f00ec9dc23c5.onporter.run/graphql`,
//   // uri: `https://payrollservice-d5ffb79ba43a9141.onporter.run/graphql`,
//   // uri: `https://payroll-staging-c3e1f00ec9dc23c5.onporter.run/graphql`,
// });

const httplink_performance = new HttpLink({
  uri: `https://eazipay-performance-vety3kdfea-uc.a.run.app/graphql`,
  // uri: `https://eazihires-performance.herokuapp.com/graphql`,
});
const performanceHttpLink = errorLink.concat(httplink_performance);

const httpLink_settings = new HttpLink({
  // uri: `http://localhost:4004/graphql`,
  uri: `https://settingsservice-9513d436f9a6e2cc.onporter.run/graphql`,
  // uri: `https://eazipay-settings-v3-vety3kdfea-ew.a.run.app/graphql`,
});
const settingsHttpLink = errorLink.concat(httpLink_settings);

const httpLink_bookKeeping = new HttpLink({
  uri: `https://bookkeeping-2519-700bdaf1-oc004pwe.onporter.run/graphql`,
});
const bookKeepingHttpLink = errorLink.concat(httpLink_bookKeeping);

const httpLink_loan = new HttpLink({
  // uri: `https://loan-staging-3327-700bdaf1-vxu03ils.onporter.run/graphql`, //staging
  uri: `https://loanservice-52fea4868a944819.onporter.run/graphql`, //live
  // uri: `https://eazipay-loan-v3-vety3kdfea-uc.a.run.app/graphql`,
});
const loanHttpLink = errorLink.concat(httpLink_loan);
const httpLink_api = new HttpLink({
  uri: `https://apiservice-5e326608aa9c922e.onporter.run/graphql`,
});
const apiHttpLink = errorLink.concat(httpLink_api);

const httpLink_general = new HttpLink({
  // uri: `http://localhost:3000/graphql`,
  uri: `https://wasteforumserver.onrender.com/graphql`,
});
const generalHttpLink = errorLink.concat(httpLink_general);

const AUTH_API = getService(authHttpLink);
const EMP_API = getService(empHttpLink);
const PAYROLL_API = getService(payrollHttpLink);
const PERFORMANCE_API = getService(performanceHttpLink);
const SETTINGS_API = getService(settingsHttpLink);
const BOOKKEEPING_API = getService(bookKeepingHttpLink);
const LOAN_API = getService(loanHttpLink);
const DEV_API = getService(apiHttpLink);
const GENERAL_API = getService(generalHttpLink);

export const API = {
  AUTH_API,
  EMP_API,
  PAYROLL_API,
  PERFORMANCE_API,
  SETTINGS_API,
  BOOKKEEPING_API,
  LOAN_API,
  DEV_API,
  GENERAL_API,
};

export const upgradeTier = async () => {
  try {
    const res = await mutate({
      endpoint: "UpgradeTiers",
      data: { tier: "1" },
      service: "SETTINGS",
    });
    if (res && res.success) {
      toast.success("Tier upgraded successfully");
      // emit("saved");
    } else if (res && !res.success) {
      toast.error(res.message);
    }
  } catch (e) {
    console.log(e);
  }
};
