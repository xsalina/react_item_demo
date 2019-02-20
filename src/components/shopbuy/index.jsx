import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss"
import GoBack from '../goback/index.jsx'
import {connect} from 'react-redux'
import {addCart} from "../../actions/cart";

@connect(
    state=>({shop:state}),
    {addCart}
)
class Index extends Component {
    state = {
        data: {},
        num:0,
        id:0
    }

    componentDidMount() {
        const shopid = this.props.match.params.shopid;
        fetch('http://47.100.98.54:9020/api/buygoods/' + shopid)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res,
                    id:shopid
                })
            })
        //console.log(this.props)
    }

    submitRedux = () => {
        let {num,id} = this.state;
        let {addCart} = this.props
        num && (
            addCart({
                id,
                num
            })
        )
    }
    //减少
    reduceGoods = () => {
        let num = this.state.num;
        num = num?--num:num
        this.setState({num});
    }
    //增加
    addGoods = () => {
        let num = this.state.num;
        num ++
        this.setState({num});
    }
    render() {

        let {num,data} = this.state;
        return (
            <div>

                <div className="shopdedatils">
                    <GoBack />
                    <img src={data.picurl} width="100%" alt={data.title}/>
                    <h3 className={'title'}>{data.title}</h3>
                    <h3 className={'des'}>{data.des}</h3>
                    <p className="money">
                        <span className="symbol">{data.symbol}</span>
                        <span className="price">{data.price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr"></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                        <p className="addNum fr">
                            <a
                                href="javascript:;"
                                className="reduce"
                                onClick={this.reduceGoods}
                            >-</a>
                            <a href="javascript:;" className="num">{num}</a>
                            <a
                                href="javascript:;"
                                className="add"
                                onClick={this.addGoods}
                            >+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a
                            href="javascript:;"
                            className="addCart"
                            onClick={this.submitRedux}
                        >加入购物车</a>
                        <Link to='/shopcart' className="nowBuy">立即购买</Link>
                    </div>
                </div>
                {/*<TabBar/>*/}
            </div>
        );
    }
}

export default Index;