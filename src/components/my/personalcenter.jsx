import React, {Component} from 'react';
import Spacing from './spacing';
import TwoChild from "./twochild";
import TwoChild2 from './twochild2';
import OneChild from "./onechild";
import OneChild2 from "./onechild2";
class Personalcenter extends Component {
    render() {
        return (
            <div className={"personalcenter"}>

                <TwoChild />
                <Spacing />
                <TwoChild2/>
                <Spacing />
                <OneChild />
                <Spacing />
                <OneChild2 />
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />




            </div>
        );
    }
}

export default Personalcenter;