<template>
    <div>
        <ul>
            <li v-for="(fruit,index) of state.fruitlist" :key="index">
                {{fruit.name}}
                单价:{{fruit.price}}
                <Counter :num='fruit.num' :index="index"  @sub='sub' @add='add'></Counter>
            </li>
        </ul>
        <h1  >商品总价为:{{}}</h1>
    </div>
</template>
<script>
import Counter from "./Counter.vue"
import store from "../store.js"
export default {
    components:{Counter},
  data(){
     // return {fruitlist:[{name:"香蕉",price:3.8,num:0},{name:"苹果",price:3.5,num:0},{name:"鸭梨",price:6.2,num:0}]}
    return {state:store.state}
  },
  methods:{
      sub(n){
            if(this.state.fruitlist[n].num>0){
                this.state.fruitlist[n].num--;
            }

            },
            add(n){
          this.state.fruitlist[n].num++;
        
        }
             
             
            }
        }
    
        


</script>