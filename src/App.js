import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Layout from './components/layout/index.jsx'
import Home from './components/home/index.jsx'
class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
              <Route path={'/'} component={Home}></Route>
          </Layout>
        </Router>
    );
  }
}

export default App;
