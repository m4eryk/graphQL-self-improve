import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Store from './Store';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Store />
    </ApolloProvider>,
    document.getElementById('root')
);