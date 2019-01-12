import React, {Component} from 'react';
import "./index.scss"
class Index extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/category')
            .then(res => res.json())
            .then(data =>{
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                }

            })


    }

    render() {
        const data = this.state.data;
        //console.log(data)
        return (
            <div className={"classfily"}>
                {
                    data.length > 0 &&(
                        data.map((item,index) =>{
                            return(
                                <a key={item.id} href="/">
                                    <img src={item.picurl} alt={item.alt}/>
                                </a>
                            )
                        })
                    )

                }
            </div>
        );
    }
}

export default Index;