import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Home from './components/home/index.jsx'
import ShopCart from './components/shopcart/index.jsx'
import My from "./components/my/index.jsx";
class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}></Route>
                <Route path={'/shopcart'} component={ShopCart}></Route>
                <Route path={'/my'} component={My}></Route>

            </Switch>
        </Router>

        // {/*<Router>*/}
        //   {/*<Layout>*/}
        //       {/*<Route path={'/'} component={Home}></Route>*/}
        //   {/*</Layout>*/}
        // {/*</Router>*/}
    );
  }
}

export default App;
