import shoptools from "../util/shoptools";


//事件交互所改变的状态 都交给热redux
//购物车的功能
export default function(state={},action){
    let goods = action.data
    switch (action.type){
        case 'CART_ADD':
            shoptools.addUpdate(goods)
            return shoptools.getShop()
        case 'CART_DEL':
            shoptools.delete(goods)
            return shoptools.getShop()
        case 'CART_GOODS_NUM':
            let newState = Object.assign({},state,goods)
            return newState
        default:
            return shoptools.getShop()
    }
}