import React, {Component} from 'react';
import "./index.scss"
class Index extends Component {
    state = {
        data:{}
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/conference')
            .then(res => res.json())
            .then(data => {
                if(data.status === 200){

                    this.setState({
                        data:data.data
                    })
                }
            })
    }
    render() {
        const data = this.state.data;
        return (
            <div className={"conference"}>
                {
                    data.shopid &&(

                        <a  href="">
                            <img src={data.picurl} alt={data.alt}/>
                        </a>


                    )
                }
            </div>
        );
    }
}

export default Index;