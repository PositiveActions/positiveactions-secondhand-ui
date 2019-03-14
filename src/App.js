import React, { Component } from 'react';
import Header from './component/header';
import Main from './component/main'
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
