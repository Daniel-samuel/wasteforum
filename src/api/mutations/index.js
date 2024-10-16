import CreateRegister from "./CreateRegister.graphql";
import CreateCommitment from "./CreateCommitment.graphql";
import Login from "./Login.graphql";
// import queryB from './queryB.graphql';

const queries = {
  CreateRegister,
  CreateCommitment,
  Login,
  //   queryB,
};

export default (type) => queries[type];
