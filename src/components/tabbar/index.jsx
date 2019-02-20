import React, {Component} from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {getGoodsNum} from "../../actions/cart";

@connect(
    state=>({shop:state}),
    {}
)
class Index extends Component {
    render() {
        let num = this.props.shop.cartCount.data || false
        return (
            <div className={"tabbar"} >
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <i className={"iconfont icon-shouye"}></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/classify">
                            <i className={"iconfont icon-fenlei"}></i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <strong>{num}</strong>
                        <NavLink  to="/shopcart">
                            <i className={"iconfont icon-gouwuche"}></i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/my">
                            <i className={"iconfont icon-ren"}></i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Index;