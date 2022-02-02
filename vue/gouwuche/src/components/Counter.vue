<template>
    <span>
        <button @click="sub">-</button>
        <span>{{num}}</span>
        <button @click="add">+</button>
     
    </span>
</template>


<script>
export default {
    props:['num','index'],
    methods:{
        sub(){
            this.$emit('sub',this.index)
        },
            add(){
            this.$emit('add',this.index)
        }
    }
    
}
</script>