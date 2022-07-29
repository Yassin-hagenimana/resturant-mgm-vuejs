<template>
<div>
<header cpls="12" md="4">

   <ul>
    <li><router-link to="home">HOME</router-link></li>

    <li><router-link to="login">ABOUT US</router-link></li>

   <li>
     <router-link to="contact">CONTACT US</router-link>
     </li>
     <li>
     <router-link to="student">STUDENTS</router-link>
     </li>
      <li>
     <router-link to="school">SCHOOLS</router-link>
     </li>
      <li>
     <router-link to="users">USERS</router-link>
     </li>

   <li v-if="auth==''">
     <router-link to="register">REGISTER</router-link>
     </li>

   <li v-if="auth==''">
     <router-link to="login">LOGIN</router-link>
     </li>
   <li v-if="auth=='loggedin'">
     <a href="/login" v-on:click="logout">LOGOUT</a></li>

   <li v-if="auth=='loggedin'">
     <router-link to="profile">PROFILE</router-link>
     </li>
   </ul>
   </header>
   <Body></Body>
</div>
</template>

<script>
import EventBus from './EventBus'
EventBus.$on('logged-in', test => {
  console.log(test)
})

export default{
  data () {
    return {
      auth: '',
      user: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}

</script>

<style scoped>
h2{
color: white;
font-family: cursive;
font-size: 25px;
text-align: center;
text-transform: capitalize;
margin-top: -0em;
}
header{
background: rgb(98, 77, 172);
padding: 7px;
border-radius: 3px;
margin: -8px;
}
header:hover{
  background: rgb(111, 98, 151);
  transition: 1s;
}
ul{
color: white;
}
ul li {
list-style-type: none;
display: inline-block;
margin: 2em 1.8em;
}
ul li a{
    color: white;
    text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
}
ul li:hover{

border-bottom: 4px solid yellow;
padding: 0px;
font-family: cursive;
transition: 1s;
}
</style>
