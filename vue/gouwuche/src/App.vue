<template>
<Carts v-if="isLogin"></Carts>
</template>

<script>

import Carts from "./components/Carts.vue"
export default {
components:{Carts},
data(){
  
return {isLogin:false}
},
 created(){
this.loading();
 },
 methods:{
      loading(){
     setTimeout(()=>{
    this.isLogin=true;
     },2000)
   }
 }

}
</script>

