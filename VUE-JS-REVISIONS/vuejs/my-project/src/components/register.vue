<template>
  <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

 <form v-on:submit.prevent="register" style="max-width:500px;margin:auto;margin-top:10em;">
<h2>Register Form</h2>
<br>

 <div class="input-container">
 <i class="fa fa-user icon"></i>
  <input id="input-field" required="First Name is required" v-model="first_name" type="text" placeholder="First Name">
 </div>

<div class="input-container">
 <i class="fa fa-user icon"></i>
  <input id="input-field" required v-model="last_name" type="text" placeholder="Last Name">
 </div>

  <div class="input-container">
  <i class="fa fa-envelope icon"></i>
  <input id="input-field" v-model="email" type="email" placeholder="Email"  required>
  </div>
<div class="input-container">
  <i class="fa fa-key icon"></i>
  <input id="input-field" v-model="gender" type="text" placeholder="Your gender" required >
  </div>

  <div class="input-container">
  <i class="fa fa-key icon"></i>
  <input id="input-field" v-model="password" type="password" placeholder="Password" required >
  </div>

<div class="input-container">
 <i class="fa fa-user icon"></i>
  <input id="input-field"  v-model="date" type="date" placeholder="Date">
 </div>

  <button type="submit" class="btns">Register</button>
  </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      password: '',
      date: ''
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:5000/Users/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        gender: this.gender,
        password: this.password,
        date: this.date
      }).then(res => {
        console.log(res.data)
        router.push({name: 'Login'})
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style  scoped>
  .form-container {max-width: 300px;padding: 10px;background-color: white;
  }

  .form-container textarea {width: 100%;padding: 15px;margin: 5px 0 22px 0;border: none;background: #f1f1f1;resize: none;min-height: 200px;
  }

  .form-container textarea:focus {background-color: #ddd;outline: none;
  }

  .form-container .btn {background-color: #4CAF50;color: white;padding: 16px 20px;border: none;cursor: pointer;width: 100%;margin-bottom:10px;opacity: 0.8;
  }

.button{position: absolute;top: 22em;left: 41em;transform: translate(-50%,-50%);

}

.btn{border:1px solid #fff;padding: 0.6em 2em;color: #fff;text-decoration: none;transition: 0.6s ease;font-size: 1em;
}

.btn:hover{background-color: #fff;color: #000;
}

.heading{

    position: absolute;
    top: 15em;
    left: 47em;
     transform: translate(-18em,-2em);
}
.heading h4{
    color: rgba(255, 255, 255, 0.808);
    font-size: 3.5em;
    font-family: 'Times New Roman', Times, serif;
    text-transform: capitalize;

}
h3{
    text-align: center;
    color: red;
}

body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

.input-container {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
h2{
text-align: center;
  color: blueviolet;
}

.icon {
  padding: 10px;
  background: blueviolet;
  color: white;
  min-width: 50px;
  text-align: center;
}

#input-field {
  width: 50em;
  padding: 10px;
  outline: none;
}

#input-field:focus {
  border: 2px solid dodgerblue;
}

.btns {
  background-color: blueviolet;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btns:hover {
  opacity: 0.7;
}

form{
border: 1px solid rgb(204, 202, 202);
padding: 1.5em;
background-color: #fdfdfd;
}

h3:hover{
    border-bottom: 0.1em solid darkred;
    margin: 10em;
    font-size: 10em;
}
</style>
