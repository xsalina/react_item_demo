import React, {Component} from 'react';
import "./index.scss";
import Tabbar from "../tabbar";

class Index extends Component {
    render() {
        return (
            <div className={'shopcart'}>
                <div className="shopArea mb">
                    <p className="location clearFix">
                        <span className="fl">送到地点: </span>
                        <span className="fr">编辑地址</span>
                    </p>
                    <div className="shop ">
                        <div className="shopShow">
                            <div className="pic ">
                                <img src={require('./1.jpg')} width="100%" height="100%" alt=""/>
                            </div>
                            <div className="des "></div>
                        </div>

                        <div className="buyNum ">
                            <p className=" buyfont">￥ 998</p>
                            <p className="addNum ">
                                <a href="javascript:;" className="reduce">-</a>
                                <a href="javascript:;" className="num">0</a>
                                <a href="javascript:;" className="add">+</a>
                            </p>
                            <a href="javascript:;" className="del">删除</a>
                        </div>
                    </div>
                    <div className="totalPrice">

                        <div className="total">
                            <p className="totalMoney">
                                <span className="font">总计:</span> <span>￥ {9.9}</span>
                            </p>
                            <p className="preferential">
                                总金额￥{123} 优惠￥0.00
                            </p>
                        </div>
                        <div className="goPayment">
                            <span className="font">去结算</span><span className="num">({10}件)</span>
                        </div>
                    </div>
                </div>

                <Tabbar/>
            </div>
        );
    }
}

export default Index;