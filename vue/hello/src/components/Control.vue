<template>
    <div>
        <button @click="clear">清空数据</button>
       
    </div>
</template>

<script>
import store from "../store.js"
export default {
    methods:{
clear(){
    store.reset();
}
    }
}
</script>