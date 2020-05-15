import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'mobx-react-router';
import React from 'react';
import { Provider } from 'mobx-react';
import Stores from './store/stores';
import Routes from './Routes';
import Header from './containers/Header';

const stores = new Stores();

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routingStore);

class Store extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Header />
                <Routes history={history} />
            </Provider>
        );
    }
}

export default Store;
