import React, {Component} from 'react';
import "./index.scss"
import {Link} from 'react-router-dom';
import BaseLine from '../baseline/index.jsx'
class Index extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/goods')
            .then(res=>res.json())
            .then((data)=>{
                if( data.status === 200 ){
                    this.setState({
                        data:data.data
                    })
                }
                //console.log(data)
            })

    }
    render() {
        const data = this.state.data
        //console.log(data)
        return (
            <div className={"selectgoods"}>
                <ul>

                    {
                        data.length > 0&& (
                            data.map((item,index) =>{
                                return(
                                    <li key={item.id}>
                                        <Link to={`/shopbuy/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.title}/>
                                            <div className={"goods_detail"}>
                                                <h3 className={"ellipsis"}>{item.title}</h3>
                                                <p className={"explain ellipsis"}>{item.des}</p>
                                                <p className={'price'}>{item.symbol} {item.price} {item.font}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        )



                    }

                </ul>
                <BaseLine />
            </div>
        );
    }
}

export default Index;