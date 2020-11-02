module.exports = {
  definition: `
    type Person {
      id: Int!
      firstname: String!
      lastname: String!
      age: Int
      children: [Person]
    }
  `,
  query: `
    person(id: Int!): Person
  `,
  type: {
    Person: {
      _description: "The Person type description", // Set the description for the type itself.
      firstname: "The firstname of the person",
      lastname: "The lastname of the person",
      age: {
        description: "The age of the person",
        deprecated:
          "We are not using the age anymore, we can find it thanks to our powerful AI",
      },
      children: "The children of the person",
    },
  },
  resolver: {
    Query: {
      person: {
        _description: "Return a single person",
        // resolver: "application::person.person.findOne", // It will use the action `findOne` located in the `Person.js` controller.
      },
    },
  },
};
