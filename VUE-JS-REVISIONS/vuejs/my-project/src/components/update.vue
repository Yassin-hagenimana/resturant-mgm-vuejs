<template>
  <div>
      <form action="#" style="margin-top:10em;" v-on:submit.prevent="updateUser">
    <div id="contact-form">
     <h2>Update Form</h2>
     <label for="fname">First Name</label>
     <input type="text" name="names" v-model="user.first_name">
       <label for="lname" >Last Name</label>
     <input type="text" name="names" v-model="user.last_name">
     <label for="email">Email</label>
     <input type="email" name="email" required v-model="user.email">
     <label for="gender">Gender</label>
     <input type="text" name="gender" v-model="user.gender" >
     <label for="phone">date</label>
      <input type="text" name="number" v-model="user.date">
      <button type="submit" name="submit" v-on:click="updateUser">Update User</button>
    </div>
    </form>
  <br>
  <br>
</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'update',
  data () {
    return {
      user: []
    }
  },
  created: function () {
    this.getUser()
  },
  methods: {

    getUser () {
      let url = 'http://localhost:5000/Users/edit/' + this.$route.params.id
      axios.get(url)
        .then((response) => {
          this.user = response.data
          console.log(response.data)
        })
    },
    updateUser () {
      let urls = 'http://localhost:5000/Users/update/' + this.$route.params.id
      axios.post(urls, this.user).then((response) => {
        router.push({name: 'User'})
      })
    }

  }
}

</script>

<style scoped>
#contact-form{
    width: 60% ;
    border: 1px solid blueviolet;
    margin-left: 10%;
    padding: 0em 4em 0em;

}
h2{
    margin-left: 40%;
    color: blueviolet;
    text-transform: capitalize;
    font-family: cursive;
}
label{
    display: block;
     margin: 20px 0px 10px;

}
 input[type="text"],input[type="email"],input[type="date"]{

     width: 90%;

 }
 input[type="text"],input[type="email"],input[type="date"]{
     height: 2em;
 }

 button{
     margin: 1em 7em ;
     width: 30%;
     font-size: 1.5em;
     height: 1.6em;
     background: blueviolet;
     font-family: sans-serif;
     color:white;
     padding: 0em;
     border-radius: 5px;
     text-transform: capitalize;
     border: none;

 }
 button:hover{
     background: rgb(79, 79, 214);
     border: none;
     font-family: cursive;
     transition: 2s;
 }
</style>
