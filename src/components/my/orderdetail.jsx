import React, {Component} from 'react';
import Spacing from './spacing'
class Orderdetail extends Component {
    render() {
        return (
            <div className={"orderdetail"}>
                <ul>
                    <li>
                        <a href="">
                            <img src={require("./img/nav_01.png")} alt=""/>
                            <p>待付款</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("./img/nav_02.png")} alt=""/>
                            <p>待收货</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("./img/nav_03.png")} alt=""/>
                            <p>退换修</p>
                        </a>
                    </li>
                </ul>
                <Spacing />
            </div>
        );
    }
}

export default Orderdetail;