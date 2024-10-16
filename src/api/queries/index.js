import GetRegisterByRole from "./GetRegisterByRole.graphql";
// import CreateCommitment from "./CreateCommitment.graphql";
// import queryB from './queryB.graphql';

const queries = {
  GetRegisterByRole,
  //   CreateCommitment,
  //   queryB,
};

export default (type) => queries[type];
