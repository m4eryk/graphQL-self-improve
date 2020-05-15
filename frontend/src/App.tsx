import React from 'react';
import { Provider } from 'mobx-react';
import { store} from './store/store';
import { history } from './store/routerStore';
import Routes from './Routes';
import HeaderContainer from './containers/HeaderContainer';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Provider {...store}>
                    <HeaderContainer />
                    <Routes history={history} />
                </Provider>
            </div>
        );
    }
}

export default App;
