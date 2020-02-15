const devinan = {
  name: "Devinan",
  age: 19,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => devinan
  }
};

export default resolvers;
