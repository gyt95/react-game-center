import React, { Component } from 'react';
import { Router,Route,Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Billboard from './components/Billboard/billboard';
import Category from './components/Category/category';
import My from './components/My/my';
import Search from './components/Search/search';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Profile from './components/Profile/profile';
import Editor from './components/Editor/editor';
import Details from './components/Details/details';
import Error from './components/404/error';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history = {history}>
          <div className="container" ref="body"> 
            {/*
              关于Switch
              1.<Switch> 下的子节点只能是 <Route> 或 <Redirect> 元素
              2.每次只匹配一个路由，只有与当前访问地址匹配的第一个子节点才会被渲染
            */}
            <Switch>
              <Route exact path="/" component = { Home }/>
              <Route path="/category" component = { Category }/>
              <Route path="/billboard" component = { Billboard }/>
              <Route path="/my" component = { My }/>
              <Route path="/search" component = { Search }/>
              <Route path="/login" component = { Login }/>
              <Route path="/register" component = { Register }/>
              <Route path="/profile" component = { Profile }/>
              <Route path="/editor/:name" component = { Editor }/>              
              <Route path="/details/:game_name" component = { Details }/>
              <Route component={ Error }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

