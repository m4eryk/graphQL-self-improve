import React from 'react';
import { SynchronizedHistory } from 'mobx-react-router';
import { Redirect, Route, Router, Switch } from 'react-router';
import { inject, observer } from 'mobx-react';
import storesName from './constant/storesName';
import ROUTES from './constant/routes';
import HeaderContainer from './container/header/HeaderContainer';
import App from './App';


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
                <HeaderContainer/>
                <Switch>
                    <Route path={ROUTES.HOME} component={App}/>
                    <Redirect to={ROUTES.HOME} from="*"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
