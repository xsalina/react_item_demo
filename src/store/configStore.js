//export const configStore = createStore(reducer)
import {createStore} from 'redux'
import Reducers from "../reducers/index.js";

export default function(init){
    //init参数是state的初始值
    const store = createStore(
        Reducers,
        init,
        //调试工具
        window.devToolsExtension ? window.devToolsExtension():undefined
    )
    return store
}