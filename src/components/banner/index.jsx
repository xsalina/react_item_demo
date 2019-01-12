import React, {Component} from 'react';
import './index.scss'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"
class Index extends Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        return (
            <div className={"banner swiper-container"}>
                <ul className={"swiper-wrapper"}>
                    <li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt=""/></a></li>
                    <li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt="" /></a></li>
                    <li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt=""/></a></li>
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Index;