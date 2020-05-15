import React from 'react';
import { SynchronizedHistory } from 'mst-react-router';
import { Redirect, Route, Router, Switch } from 'react-router';
import { inject, observer } from 'mobx-react';
import storesName from './constant/storesName';
import ROUTES from './constant/routes';
import Library from './containers/LibraryContainer';


interface Props {
    history: SynchronizedHistory,
}

@inject(storesName.ROUTER)
@observer
class Routes extends React.Component<Props> {

    render() {
        const { history } = this.props;

        return (
            <Router history={history}>
                <Switch>
                    <Route exact path={ROUTES.LIBRARY} component={Library} />
                    <Redirect to={ROUTES.LIBRARY} from="*"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
