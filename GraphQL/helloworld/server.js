import graphql from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app
  .use('/graphql', graphqlHTTP({
    schema, pretty: true
  }));
const PORT = 3000;
const server = app.listen(PORT, function() {
  console.log('GraphQL listening at http://localhost:%s', PORT);
})