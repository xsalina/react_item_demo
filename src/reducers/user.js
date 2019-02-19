
//用户信息
export default function(state={},action){
    let goods = action.data
    switch(action.type){
        case 'GET_NAME':
            return 'salina'
        default:
            return state
    }
}