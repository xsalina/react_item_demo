import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/home/index.jsx'
import ShopCart from './components/shopcart/index.jsx'
import ShopBuy from './components/shopbuy/index'
import My from "./components/my/index.jsx";
import classify from './components/selectgoods'
import NotFound from "./components/notfound/index.jsx"
class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}></Route>
                <Route path={'/shopcart'} component={ShopCart}></Route>
                <Route path={'/shopbuy/:shopid'} component={ShopBuy}></Route>
                <Route path={'/classify'} component={classify}></Route>
                <Route path={'/my'} component={My}></Route>
                <Route component={NotFound}></Route>
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
