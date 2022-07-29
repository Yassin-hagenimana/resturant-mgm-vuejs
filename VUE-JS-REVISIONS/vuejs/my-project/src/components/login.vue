<template>
  <div>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

 <form  v-on:submit.prevent="login" action="#" style="max-width:500px;margin:auto;margin-top:10em;">
 <h2 style="text-align:center;color:blueviolet;font-family:cursive;">Login Here</h2>
 <br>
<div class="input-container">
<i class="fa fa-envelope icon"></i>
<input id="input-field" type="text" v-model="email" placeholder="Email" name="email">
</div>
<br>

<div class="input-container">
<i class="fa fa-key icon"></i>
<input id="input-field" type="password" v-model="password" placeholder="Password" name="psw">
</div>

<br>
<button type="submit" class="btns" name="submit">Login </button>

 </form>
 <Footer></Footer>
  </div>
</template>

<script>
import Footer from './footer'
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {

  components: {
    Footer
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:5000/Users/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({name: 'Profile'})
      }).catch(err => {
        console.log(err.response)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }

}
</script>

<style scoped>

*{
margin: 0;
padding: 0;
font-family: century gothic;

}

.btn{
border:1px solid #fff;
padding: 0.6em 2em;
color: #fff;
text-decoration: none;
transition: 0.6s ease;
font-size: 1em;
}

.btn:hover{
background-color: #fff;
color: #000;
}

html{
    background-color: #eaf0f2;
}

.icon {
  padding: 10px;
  background: blueviolet;
  color: white;
  min-width: 50px;
  text-align: center;
}

#input-field {
  width: 30em;
  padding: 10px;
  outline: none;
}

#input-field:focus {
  border: 2px solid blueviolet;
}
#text {display:none;color:red}
/* Set a style for the submit button */
.btns {
  background-color: blueviolet;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  font-family:'Times New Roman', Times, serif;
  width: 90%;
  opacity: 0.9;
}

.btns:hover {
  opacity: 0.7;
}

form{
padding: 1.5em;
background-color: #ffffff;
border: 1px solid blueviolet;

}
</style>
