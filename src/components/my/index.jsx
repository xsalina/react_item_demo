import React, {Component} from 'react';

import "./index.scss";
import Login from "./login.jsx";
import Order from "./order.jsx";
import OrderDetail from "./orderdetail.jsx";
import PersonalCenter from './personalcenter.jsx'

import TabBar from '../tabbar/index.jsx'
class Index extends Component {
    render() {
        return (
            <div className={"my"}>
                <Login />
                <Order/>
                <OrderDetail />
                <PersonalCenter />
                <TabBar />
            </div>
        );
    }
}

export default Index;