import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Store from './Store';

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Store />
    </ApolloProvider>,
    document.getElementById('root')
);
