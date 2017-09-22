import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/test.scss';
import './config/config.js';

import { Router,Route } from 'react-router-dom';

import Home from './components/Home/home';
import Billboard from './components/Billboard/billboard';
import Category from './components/Category/category';
import Find from './components/Find/find';
import My from './components/My/my';

import Footer from './components/Footer/footer';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history = {history}>
          <div> 
              <Route to="/" component = { Home }/>
              <Route to="/category" component = { Category }/>
              <Route to="/billboard" component = { Billboard }/>
              <Route to="/discover" component = { Find }/>
              <Route to="/my" component = { My }/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
