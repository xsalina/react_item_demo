import React, {Component} from 'react';
import "./index.scss"
class Index extends Component {
    render() {
        return (
            <div>

                <div className="shopdedatils">
                    <img src={require('./1.jpg')} width="80%" />
                    <h3>[为你推荐]欢乐颂 加厚珐琅搪瓷  煤气电磁炉烧水壶 自鸣 鸣叫壶 凉水壶包邮</h3>
                    <p className="money">
                        <span className="symbol">¥</span>
                        <span className="price">85</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr" ></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                        <p className="addNum fr">
                            <a href="javascript:;" className="reduce">-</a>
                            <a href="javascript:;" className="num">0</a>
                            <a href="javascript:;" className="add">+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a href="javascript:;" className="addCart" >加入购物车</a>
                        <a href="/" className="nowBuy">立即购买</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;