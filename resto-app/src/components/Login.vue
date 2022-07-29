<template>
<div> <img class="logo" src="../assets/logo.png"/>

        <h1>Login form</h1>

     <div class="login">
     <input type="email" placeholder="Enter Email" v-model="email"/>
     <input type="password" placeholder="Enter Password" v-model="password"/>

     <button v-on:click="login">Login</button>
     <p>
     <router-link to="/register">Signup</router-link>
     </p>

    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name:"Login",
  data() {
    return {
     email:'',
     password:''
    };
  },
  methods: {
  async login(){
  let result= await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
  if(result.status== 200 && result.data.length>0){
  localStorage.setItem("user-info",JSON.stringify(result.data))
  this.$router.push({name:"Home"})
  }
  console.warn(result)
  }
  },
  mounted(){
      let user =localStorage.getItem("user-info")
      if(user){
          this.$router.push({name:"Home"})
      }
  }
};
</script>
<style>

</style>
