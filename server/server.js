const { ApolloServer } = require('apollo-server');
const connection = require('./config/connection');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const { PORT } = require('./utils/config');

connection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
