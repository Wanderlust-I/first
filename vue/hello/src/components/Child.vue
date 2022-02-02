<template>
<div>
     <h1>{{information}}</h1>
     <button @click='senddata'>传递数据</button>
</div>
   

</template>

<script>

export default({
 props:['information'],
 data(){
     return{
         n:"nmsl"
     }

 },
 methods:{
 senddata(){
     this.$emit("event",this.n)
 }
 }

})
</script>
