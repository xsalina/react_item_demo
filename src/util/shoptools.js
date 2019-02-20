let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
//shop => { 商品ID1 ：数量，商品ID2 ：数量 }
//更新
shopTools.addUpdate = function(goods){
    // 是否已经存在商品ID  存在就累加

    if( shop[goods.id] ){
        shop[goods.id] += goods.num
    }else{
        shop[goods.id] = goods.num
    }
    this.saveShops()
}

//删除
shopTools.delete = function(id){
    delete shop[id]
    this.saveShops()
}

//默认获取商品
shopTools.getShop = function(){
    return shop
}



//不管做什么操作都要存储
shopTools.saveShops = function(){
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default shopTools