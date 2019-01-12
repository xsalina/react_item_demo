import React, {Component} from 'react';

class Order extends Component {
    render() {
        return (
            <div className={"order"}>
                <div className={"myorder"}>
                    <div className={"title"}>我的订单</div>
                    <div className={"totalorder"}>
                        <a href="">
                            <p>全部订单</p>
                            <i className={"iconfont icon-jiantou"}></i>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Order;