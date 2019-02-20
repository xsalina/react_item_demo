
//action
export function addCart(data){
    return{
        type:'CART_ADD',
        data
    }
}

export function delCart(data){
    return{
        type:'CART_DEL',
        data
    }
}

export function getGoodsNum(data){
    return{
        type:'CART_GOODS_NUM',
        data
    }
}