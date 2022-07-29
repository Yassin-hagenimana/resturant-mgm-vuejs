<template>
  <div>
  <Header/>
  <h1>Hello {{name}}, Welcome to the homepage.</h1>
  <table>
  <tr>
  <td>Id</td>
  <td>Name</td>
  <td>Contact</td>
  <td>Address</td>
  </tr>
<tr v-for="item in restaurants" :key="item.id">
 <td>{{item.id}}</td>
  <td>{{item.name}}</td>
   <td>{{item.contact}}</td>
    <td>{{item.address}}</td>
</tr>
  </table>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
import axios from "axios"
export default {
  name: "Home",
  data(){
  return{
  name:"",
  restaurants:[]
  }
  },
  components:{
  Header
  },

  async mounted(){
 let user= localStorage.getItem('user-info')
 let myUser=JSON.parse(user);
  this.name=myUser[0].name

if(!user){
    this.$router({name:"Login"})
}

let result=await axios.get("http://localhost:3000/restaurants")
 this.restaurants=result.data;
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
