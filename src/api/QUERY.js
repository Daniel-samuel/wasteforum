import queries from "./queries/index";
// import { API, AUTH_CONTEXT } from "./api";
import { API, AUTH_CONTEXT } from "./api";

export default (endpoint, payload, service) => {
  let context = {};

  context.headers = {
    authorization: AUTH_CONTEXT(),
  };

  const PAYLOAD = {
    query: queries(endpoint),
    variables: payload,
    context,
  };

  if (service == "AUTH") {
    return API.AUTH_API.query(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "EMP") {
    return API.EMP_API.query(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "PAYROLL") {
    return API.PAYROLL_API.query(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "PERFORMANCE") {
    return API.PERFORMANCE_API.query(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "SETTINGS") {
    return API.SETTINGS_API.query(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "BOOKKEEPING") {
    return API.BOOKKEEPING_API.query(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  } else if (service == "LOAN") {
    return API.LOAN_API.query(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "API") {
    return API.DEV_API.query(PAYLOAD).then((result) => result.data[endpoint]);
  } else if (service == "GENERAL") {
    return API.GENERAL_API.query(PAYLOAD).then(
      (result) => result.data[endpoint]
    );
  }
};
