<template>
  <div id="app">
  <h1 v-if='isLogin'>欢迎</h1>
  <h1 v-show="!isLogin"><a href="">登录</a></h1>
  <table border="1">
    <thead>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>index</th>
    </thead>
    <tbody>
      <tr v-for="(student,index) of studentList" :key="index">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.age}}</td>
        <td>{{index}}</td>
      </tr>
    </tbody>
  </table>
<h1>{{childdata}}</h1>

<Child :information="information" @event="change"></Child>
<Control></Control>
<Courts></Courts>
<MyButton>
  <template v-slot:1>
ads
  </template>
  <template #2>
dsasddaa
  </template>
</MyButton>

<div  class="box" ref='boox'>
 
</div>

<div>
  <h1>{{time | split}}</h1>
</div>
  


  </div>
</template>

<script>
import Control from "./components/Control.vue"
import Child from "./components/Child.vue"
import Courts from "./components/Courts.vue"
import MyButton from "./components/MyButton.vue"
export default {
 components:{Child,Courts,Control,MyButton},
 filters:{
     split(n){
      let date=new Date(n);
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      let day=date.getDate();
      return `${year}年${month}月${day}日`
     }
 },
  data(){
      return{
        information:"dady",
        childdata:'',
        isLogin:false,
        studentList:[{id:15,name:"xiaoming",age:10},{id:15,name:"xiaopeng",age:12},{id:15,name:"xiaohong",age:15}],
        time:"2020-02-01"
      };
},
methods:{
  change(n){
        this.childdata=n;
      }
  },
  mounted(){

  alert(window.getComputedStyle(this.$refs.boox).height);
  }
}

</script>

<style>
.box{
  height: 100px;
  background-color: red;
}
</style>
