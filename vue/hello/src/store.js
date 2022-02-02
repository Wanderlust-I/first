export default{
    state:{
        fruitlist:[{name:"香蕉",price:3.8,num:0},{name:"苹果",price:3.5,num:0},{name:"鸭梨",price:6.2,num:0}]
    },
reset(){
    this.state.fruitlist.map(fruit=>{
        fruit.num=0;
    })
},
computed:{
    totalprice(){
        let totalprice=0;
        this.state.frutlist.map(fruit=>{
            totalprice=fruit.price*fruit.num;
        })
        return totalprice;
    }
}
}