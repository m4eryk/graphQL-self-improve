import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from './utils/syncHistoryWithStore';
import storesName from './constant/storesName';
import Stores from './store/stores';
import App from './App';

const browserHistory = createBrowserHistory();
const stores = new Stores();

const history = syncHistoryWithStore(browserHistory, stores[storesName.ROUTER]);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);