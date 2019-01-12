import React, {Component} from 'react';

import Header from '../header/index.jsx'
import Banner from "../banner/index.jsx"
import Classfily from "../classfily/index.jsx"
import Miplay from '../miplay/index.jsx'
import Conference from '../conference/index.jsx'
import SelectGoods from '..//selectgoods/index.jsx'
import TabBar from '../tabbar/index'
import ShopBuy from '../shopbuy/index'
import ShopCart from '../shopcart/index'
class Index extends Component {
    render() {
        return (
            <div className={"App"}>
                <Header/>
                <Banner/>
                <Classfily/>
                <Miplay/>
                <Conference />
                <SelectGoods />

                <TabBar/>
                {/*<ShopBuy />*/}
                {/*<ShopCart />*/}
            </div>
        );
    }
}

export default Index;