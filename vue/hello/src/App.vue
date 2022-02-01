<template>
  <div id="app">
  <h1 v-if='isLogin'>欢迎</h1>
  <h1 v-show="!isLogin"><a href="">登录</a></h1>
  <table>
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
<HelloWorld></HelloWorld>
<h1>{{needchange}}</h1>
<Child :information="information" @event="change"></Child>
  <h1>{{mes}}</h1>

  


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Child from "./components/Child.vue"
export default {
 components:{HelloWorld, Child},
  data(){
      return{
        information:"dady",
        needchange:'',
        mes:"hello?",
        isLogin:false,
        studentList:[{id:15,name:"xiaoming",age:10},{id:15,name:"xiaopeng",age:12},{id:15,name:"xiaohong",age:15}]
      };
},
  change(n){
        alert(n)
      }
  }
</script>

<style>

</style>
