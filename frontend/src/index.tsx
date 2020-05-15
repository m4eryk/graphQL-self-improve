import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
