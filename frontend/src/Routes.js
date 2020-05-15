import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { inject, observer } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from './utils/syncHistoryWithStore';
import ROUTES from './constant/routes';
import storesName from './constant/storesName';
import Library from './containers/Library';
import App from './App';

@inject(storesName.ROUTER)
@observer
class Routes extends React.Component {
    browserHistory = createBrowserHistory();
    history = syncHistoryWithStore(this.browserHistory, this.props[storesName.ROUTER]);

    render() {
        return (
            <Router history={this.history}>
                <Switch>
                    <Route exact path={ROUTES.LIBRARY} component={Library} />
                    <Route path={ROUTES.HOME} component={App} />
                    <Redirect to={ROUTES.HOME} from="*"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
