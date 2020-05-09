const express = require('express');
const graphQL = require('express-graphql');
const PORT = 3000;

const app = express();

app.use('/graphql', graphQL({}));

app.listen(PORT, err => err ? console.error(err) : console.log('server started'));
