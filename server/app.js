const express = require('express');
const graphqlHTTP = require('express-graphql');
const movieSchema = require('./schemas/movie/movieSchema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://amayorov:dana0801@ds061196.mlab.com:61196/amayorov',  { useNewUrlParser: true } );

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection failed with error: ${err}`));
dbConnection.once('open', () => console.log(`Connection to db`));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});