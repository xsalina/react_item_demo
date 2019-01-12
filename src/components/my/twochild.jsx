import React, {Component} from 'react';

class Twochild extends Component {
    render() {
        return (
            <div>
                <ul className={"twoChild"}>
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/1.png")} alt=""/></div>
                            <div className={"flex border"}>
                                <p>会员中心</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/2.png")} alt=""/></div>
                            <div className={"flex"}>
                                <p>我的优惠</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Twochild;