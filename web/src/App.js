import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Internal components
import Login from "./components/Login.js";
import Main from "./components/Main.js";

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/main" component={Main} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
