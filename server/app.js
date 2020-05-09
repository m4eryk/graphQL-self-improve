const express = require('express');
const graphqlHTTP = require('express-graphql');
const movieSchema = require('./schemas/movieSchema');

const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});