module.exports = {
  resolver: {
    Query: {
      restaurants: {
        description: "Return a list of restaurants", // Add a description to the query.
      },
    },
    Mutation: {
      createRestaurant: {
        description: "Create a new restaurant",
      },
    },
  },
};
