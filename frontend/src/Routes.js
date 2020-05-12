import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { syncHistoryWithStore } from './utils/syncHistoryWithStore';
import { inject, observer } from 'mobx-react';
import ROUTES from './constant/routes';
import storesName from './constant/storesName';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderContainer from './container/header/HeaderContainer';
import App from './App';

@inject(storesName.ROUTER)
@observer
class Routes extends React.Component {
    browserHistory = createBrowserHistory();
    history = syncHistoryWithStore(this.browserHistory, this.props[storesName.ROUTER]);

    render() {
        return (
            <Router history={this.history}>
                <HeaderContainer />
                <Switch>
                    <Route path={ROUTES.HOME} component={App} />
                    <Redirect to={ROUTES.HOME} from="*"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
