import React, {Component} from 'react';

import Header from '../header/index.jsx'
import Banner from "../banner/index.jsx"
import Classfily from "../classfily/index.jsx"
import Miplay from '../miplay/index.jsx'
import Conference from '../conference/index.jsx'
import SelectGoods from '..//selectgoods/index.jsx'
import TabBar from '../tabbar/index'
import lazyload from "react-lazyload";
class Index extends Component {
    render() {
        return (
            <div className={"App"}>
                <Header/>
                <Banner/>
                <Classfily/>
                <Miplay/>
                <Conference />
                <lazyload height={200}><SelectGoods /></lazyload>


                <TabBar/>
                {/*<ShopBuy />*/}
                {/*<ShopCart />*/}
            </div>
        );
    }
}

export default Index;