import React, {Component} from 'react';
import "./index.scss"
import GoBack from '../goback/index.jsx'

class Index extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        const shopid = this.props.match.params.shopid;
        fetch('http://47.100.98.54:9020/api/buygoods/' + shopid)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res
                })
            })
    }

    render() {
        const {shopid, picurl, title, price, des, symbol, font, id} = this.state.data;

        return (
            <div>

                <div className="shopdedatils">
                    <GoBack />
                    <img src={picurl} width="100%" alt={title}/>
                    <h3 className={'title'}>{title}</h3>
                    <h3 className={'des'}>{des}</h3>
                    <p className="money">
                        <span className="symbol">{symbol}</span>
                        <span className="price">{price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr"></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                        <p className="addNum fr">
                            <a href="javascript:;" className="reduce">-</a>
                            <a href="javascript:;" className="num">0</a>
                            <a href="javascript:;" className="add">+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a href="javascript:;" className="addCart">加入购物车</a>
                        <a href="/" className="nowBuy">立即购买</a>
                    </div>
                </div>
                {/*<TabBar/>*/}
            </div>
        );
    }
}

export default Index;