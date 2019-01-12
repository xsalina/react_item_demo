import React, {Component} from 'react';

class Twochild2 extends Component {
    render() {
        return (
            <div>
                <ul className={"twoChild"}>
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/3.png")} alt=""/></div>
                            <div className={"flex border"}>
                                <p>服务中心</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/4.png")} alt=""/></div>
                            <div className={"flex"}>
                                <p>小米之家</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Twochild2;