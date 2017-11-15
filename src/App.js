import React, { Component } from 'react';
import { Router,Route,Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Billboard from './components/Billboard/billboard';
import Category from './components/Category/category';
import My from './components/My/my';
import Search from './components/Search/search';
import Login from './components/Login/login';
import Profile from './components/Profile/profile';
import Error from './components/404/error';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history = {history}>
          <div>
            <div className="container" ref="body"> 
              <Switch>
              <Route exact path="/" component = { Home }/>
              <Route path="/category" component = { Category }/>
              <Route path="/billboard" component = { Billboard }/>
              <Route path="/my" component = { My }/>
              <Route path="/search" component = { Search }/>
              <Route path="/login" component = { Login }/>
              <Route path="/profile" component = { Profile }/>
              <Route component={ Error }/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

