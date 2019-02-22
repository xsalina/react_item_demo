import React, {Component} from 'react';
import Tabbar from "../tabbar";
import "./index.scss";
import {addCart,delCart,getGoodsNum} from "../../actions/cart";
import {connect} from "react-redux";

@connect(
    state=>({shop:state}),
    {addCart,delCart,getGoodsNum}
)

class Index extends Component {
    state = {
        address:'上海松江九亭',
        goods:[],
        prices:0,
        count:0
    }
    getData = () => {
        const {cartCount} = this.props.shop   //{11:1,12:3,18:5}
        let {goods} = this.state
        let shopid = Object.keys(cartCount)//[11,12,18]
        shopid.forEach((item, index) => {
            fetch('http://47.100.98.54:9020/api/buygoods/'+item)
                .then((r) => r.json())
                //挂载此商品对应的数量
                .then((res) => {
                    //console.log(res);
                    res['num'] = cartCount[item]
                    goods.push(res)
                    this.setState({goods});
                })
        })
        this.getResult()
    }

    getResult = () => {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            this.totallyPrice()
        },400)
    }

    //总价格.数量
    totallyPrice = () => {
        let goods = this.state.goods;
        const {getGoodsNum} = this.props
        let count = 0;
        let prices = 0;
        for(let key of goods){
            prices += key.num * key.price
            count += key.num

        }
        this.setState({count,prices});
        getGoodsNum({data:count})
    }


    componentDidMount() {
        this.getData()

    }
    //删除
    delGoods = (index) => {
        let goods = this.state.goods;
        let {delCart} = this.props;
        delCart(goods[index].shopid)
        goods.splice(index,1)
        this.setState({goods});
        this.totallyPrice()
    }

    //减少
    reduceGoods = (index) => {
        let goods = this.state.goods;
        let id = goods[index].shopid
        let {addCart} = this.props;
        if(goods[index].num){
            goods[index].num--
            this.setState({goods});
            //let num = goods[index].num
            addCart({
                id,
                num:-1
            })
        }
        this.totallyPrice()

    }
    //增加
    addGoods = (index) => {
        let goods = this.state.goods;
        let id = goods[index].shopid
        let {addCart} = this.props;
        goods[index].num ++
        this.setState({goods});
        //let num = goods[index].num
        addCart({
            id,
            num:1
        })
        this.totallyPrice()
    }

    render() {
        const {address,goods,prices,count} = this.state
        return (
            <div className={'shopcart'}>
                <div className="shopArea mb">
                    <p className="location clearFix">
                        <span className="fl">送到地点: {address}</span>
                        <span className="fr">编辑地址</span>
                    </p>
                    {
                        goods.length > 0 && (
                            goods.map((item, index) => {
                                return (
                                    <div key={index} className="shop ">
                                        <div className="shopShow">
                                            <div className="pic ">
                                                <img src={item.picurl}  alt={item.title}/>
                                                <img src={item.picurl}  alt={item.title}/>
                                                <img src={item.picurl}  alt={item.title}/>
                                            </div>

                                        </div>
                                        <div className="title ">{item.title}</div>
                                        <div className="des ">{item.des}</div>
                                        <div className="buyNum ">
                                            <p className=" buyfont">{item.symbol} {item.price}</p>
                                            <p className="addNum ">
                                                <a
                                                    href="javascript:;"
                                                    className="reduce"
                                                    onClick={() => {this.reduceGoods(index)}}

                                                >-</a>
                                                <a href="javascript:;" className="num">{item.num}</a>
                                                <a
                                                    href="javascript:;"
                                                    className="add"
                                                    onClick={() => {this.addGoods(index)}}
                                                >+</a>
                                            </p>
                                            <a
                                                href="javascript:;"
                                                className="del"
                                                onClick={() => {this.delGoods(index)}}
                                            >删除</a>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    <div className="totalPrice">

                        <div className="total">
                            <p className="totalMoney">
                                <span className="font">总计:</span> <span>￥ {prices}</span>
                            </p>
                            <p className="preferential">
                                总金额￥{prices} 优惠￥0.00
                            </p>
                        </div>
                        <div className="goPayment">
                            <span className="font">去结算</span><span className="num">({count}件)</span>
                        </div>
                    </div>
                </div>

                <Tabbar/>
            </div>
        );
    }
}

export default Index;