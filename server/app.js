const express = require('express');
const graphqlHTTP = require('express-graphql');
const movieSchema = require('./schemas/movie/movieSchema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

mongoose.connect('mongodb://amayorov:dana0801@ds061196.mlab.com:61196/amayorov',  { useNewUrlParser: true } )
        .then(() => console.log(`Connection to db`))
        .catch(err => console.log(`Connection failed with error: ${err}`));

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});