import React, {Component} from 'react';

class Onechild2 extends Component {
    render() {
        return (
            <div>
                <ul className="oneChild">
                    <li>
                        <a href="">
                            <div className={"pic"}><img src={require("./img/6.png")} alt=""/></div>
                            <div className={"flex"}>
                                <p>设置</p>
                                <i className={"iconfont icon-jiantou"}></i>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Onechild2;