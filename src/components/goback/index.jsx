import React, {Component} from 'react';
import "./index.scss"
class Index extends Component {

    goback= e =>{
        window.history.go(-1)
    }
    render() {
        return (
            <div className={'goback'}>
                <i onClick={this.goback} className={'iconfont icon-fanhui back'}></i>
                <i className={'iconfont icon-fenxiang1 share'}></i>
            </div>
        );
    }
}

export default Index;