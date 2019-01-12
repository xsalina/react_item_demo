import React, {Component} from 'react';

class Onechild extends Component {
    render() {
        return (
            <div>
                <ul className="oneChild">
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/5.png")} alt=""/></div>
                            <div className={"flex"}>
                                <p>F码通道</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Onechild;