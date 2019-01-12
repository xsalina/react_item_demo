import React, {Component} from 'react';
import "./index.scss"
class Index extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/recommend')
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
            <div className={"miplay"}>
                {
                    data.shopid && (
                        <a href=""><img src={require('./img/recommend.png')} alt=""/></a>
                    )
                }
            </div>
        );
    }
}

export default Index;