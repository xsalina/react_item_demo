import React, {Component} from 'react';
import './index.scss'
class Index extends Component {
    render() {
        return (
            <div className={"header"}>
                <div className={"logo"}>
                    <img src={require("./img/logo.png")} width={"100%"} height={"100%"} alt="logo"/>
                </div>
                <div className="header_search">
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>搜索商品名称</span>
                </div>
                <div className={"user"}>
                    <i className={"iconfont icon-yonghutouxiang"}></i>
                </div>

            </div>
        );
    }
}

export default Index;