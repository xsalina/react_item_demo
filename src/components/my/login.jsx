import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className={"login"}>
                <a href="">
                    <img src={require("./img/avatar.png")} alt=""/>
                    <div>登录/注册</div>
                </a>
            </div>
        );
    }
}

export default Login;