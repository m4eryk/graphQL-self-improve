import React from 'react';
import { Provider } from 'mobx-react';
import Stores from './store/stores';
import Routes from './Routes';
import Header from './containers/Header';

const stores = new Stores();

class Store extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Header />
                <Routes />
            </Provider>
        );
    }
}

export default Store;
