import React, {Component} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"
class Index extends Component {
    state = {
        data:[]
    }
    play (){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true
        })
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/banner')
            .then(res=>res.json())
            .then((data)=>{
                if(data.status === 200){
                    this.setState({
                        data: data.data
                    })
                    this.play()
                }
                //console.log(data)
            })

    }

    render() {
        const data =this.state.data;
        return (
            <div className={"banner swiper-container"}>
                <ul className={"swiper-wrapper"}>
                    {
                        data.length >0 && (
                            data.map((item,index) =>{
                                return(
                                    <li key={item.id} className={"swiper-slide"}>
                                        <Link to={`/shopbuy/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.alt}/>
                                        </Link>
                                    </li>
                                )
                            })
                        )

                    }
                    {/*<li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt=""/></a></li>*/}
                    {/*<li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt="" /></a></li>*/}
                    {/*<li className={"swiper-slide"}><a href=""><img src={require("./img/2.jpg")} alt=""/></a></li>*/}
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Index;