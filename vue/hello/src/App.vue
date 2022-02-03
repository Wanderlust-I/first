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
  
  <div>
 
    <form  @submit.prevent="postData">
      <label for="">用户:</label><input type="text" v-model="formData.username">
      <label for="">密码:</label><input type="text" v-model="formData.password">
      <label for="">性别:</label>
      <label for="">男</label> <input type="radio"  value="男" v-model="formData.sex">
            <label for="">女</label> <input type="radio" value="女" v-model="formData.sex">
            <label for="">爱好</label>
            <select name="" id="" v-model="formData.hobby">
              <option value="eat">吃</option>
              <option value="drink">喝</option>
            </select>
            <label for="">技能</label>
            <label for="">c</label><input type="checkbox" v-model="formData.skill">
             <label for="">java</label><input type="checkbox" v-model="formData.skill">
             <button>提交</button>
    </form>
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
        time:"2020-02-01",
        formData:{ 
        username:'',
        password:'',
        sex:'',
        hobby:'',
        skill:''
        }
       
      };
},
  mounted(){

  alert(window.getComputedStyle(this.$refs.boox).height);
  },

methods:{
  change(n){
        this.childdata=n;
      }
  },
    postData(){
    console.log(this.formData);
  },

}

</script>

<style>
.box{
  height: 100px;
  background-color: red;
}
</style>
