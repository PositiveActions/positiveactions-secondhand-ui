import React, { Component } from 'react';
import Header from './containers/header';
import Main from './containers/main'
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
