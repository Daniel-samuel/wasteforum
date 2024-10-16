import mutations from "./mutations";
// import { API, AUTH_CONTEXT } from "./api";
import { API, AUTH_CONTEXT } from "./api";
import axios from "axios";

const ip_endpoints = ["EmployeeLogin", "CompanyAdminLogin", "ResetPassword"];
async function getIp() {
  try {
    const locationResponse = await axios.get(
      `https://api.ipify.org?format=json`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return locationResponse.data.ip;
  } catch (e) {
    console.log(e);
  }
}
export default async (endpoint, data, service) => {
  let token = localStorage.getItem("token");
  let context = {};
  if (token !== "" && token !== null && token !== undefined) {
    context.headers = {
      authorization: AUTH_CONTEXT(),
    };
  }
  if (ip_endpoints.includes(endpoint)) {
    context.headers = { ip: await getIp() };
  }
  const PAYLOAD = {
    mutation: mutations(endpoint),
    variables: data,
    // refetchQueries: [{ query: "ListEmployees" }],
    context,
  };

  if (service == "AUTH") {
    return API.AUTH_API.mutate(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "EMP") {
    return API.EMP_API.mutate(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "PAYROLL") {
    return API.PAYROLL_API.mutate(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "PERFORMANCE") {
    return API.PERFORMANCE_API.mutate(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "SETTINGS") {
    return API.SETTINGS_API.mutate(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "BOOKKEEPING") {
    return API.BOOKKEEPING_API.mutate(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "LOAN") {
    return API.LOAN_API.mutate(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "API") {
    return API.DEV_API.mutate(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "GENERAL") {
    return API.GENERAL_API.mutate(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  }
};
