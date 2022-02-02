<template>
    <div>
           <button @click="clear">重置</button>
        <ul>
            <li v-for="(fruit,index) of state.fruits" :key='index'>
                {{fruit.name}}
                单价:{{fruit.price}}
                <Counter :num='fruit.num' :index="index" @add="add"  @sub="sub" ></Counter>
            </li>
        </ul>
        <h1>商品总价为{{total}}元</h1>
    </div>
</template>

<script>

import Counter from "./Counter.vue"
import store from "../store.js"
export default {
    components:{Counter},
    data(){
//         return {
//     fruits:[{name:"香蕉",price:3.2,num:0},{name:"苹果",price:3.8,num:0},{name:"鸭梨",price:4.2,num:0}]
// }
return {state:store.state}
    },
    methods:{
   
           sub(n){
               if(this.state.fruits[n].num>0){
            this.state.fruits[n].num--;}
        },
             add(n){
             this.state.fruits[n].num++;
        },
        clear(){
          store.reset();
        }
    },
 computed:{
        total(){
            let total=0;
            this.state.fruits.map(fruit=>{total+=fruit.price*fruit.num})
            return total.toFixed(2);
        }
 }

}
</script>
