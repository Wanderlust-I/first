export default{
    state:{
        fruits:[{name:"香蕉",price:3.2,num:0},{name:"苹果",price:3.8,num:0},{name:"鸭梨",price:4.2,num:0}]
    },
    reset(){
        this.state.fruits.map(fruit=>{
            fruit.num=0;
        });
       
    }
}