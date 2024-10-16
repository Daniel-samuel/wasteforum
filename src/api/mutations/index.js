const picker = (name) => require(`./${name}.graphql`);
export default (type) => picker(type);
