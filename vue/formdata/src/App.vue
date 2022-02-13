<template>
<div>
  <form  @submit.prevent="getform">
  <label for="">用户名:</label>
  <input type="text" v-model="formData.username">
  <label for="">密码</label >
  <input type="password" v-model="formData.password">
  <label for="">性别</label>
  <label for="">男</label>
  <input type="radio" value="男" v-model="formData.sex">
  <label for="">女</label >
  <input type="radio"  value="女" v-model="formData.sex">
  <select v-model="formData.skill">
    <option value="eat">eat</option>
    <option value="drink">drink</option>
    <option value="sleep">sleep</option>
  </select>
  <label for="">爱好:</label>
  <label for="">学习</label>
  <input type="checkbox" value="学习" v-model="formData.hobby">
  <label for="">学习？</label>
  <input type="checkbox" value="学习2" v-model="formData.hobby">
  <input type="submit">
  </form>


<div>
  <form @submit.prevent="postfruit" >
    <label for="">水果 </label>
  <input type="text" v-model="fruit">
    <button>添加</button>
  </form>
  

  <ul>
    <li v-for="(fruit,id) of fruits" :key="id" >  
      {{fruit}}
       <button>删除</button></li>
  </ul>

</div>
</div>
</template>

<script>

import axios from "axios"
export default {
  data(){
  return{
    formData:{
      username:"",
      password:"",
      sex:"",
      skill:"",
      hobby:[]
    },
    fruit:"",
    fruits:[]
  }

  },
    methods:{
      getform(){
          console.log(this.formData)
      },
      getfruit(){
        axios.get("http://127.0.0.1:2200/fruits").then(res=>{
          this.fruits=res.data;
        })
      }
  },
  postfruit(){
    axios.post("http://127.0.0.1:2200/fruits",{fruit:this.fruit}).then(res=>{
   this.getfruit();
    })
  },
  
  created(){
    this.getfruit();
  }

}
</script>

