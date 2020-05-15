import React from 'react';
import { inject } from 'mobx-react';
import storesName from './constant/storesName';
import ROUTES from './constant/routes';
import './App.css';

@inject(storesName.ROUTER)
class App extends React.Component {
  redirectToLibrary = () => {
    this.props.routerStore.push(ROUTES.LIBRARY);
  };

  render() {
    return (
      <div className="App">
        hello
        <div onClick={this.redirectToLibrary}>Go To Library</div>
      </div>
    );
  }
}

export default App;
