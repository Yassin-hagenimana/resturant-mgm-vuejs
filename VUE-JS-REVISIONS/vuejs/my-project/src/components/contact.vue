<template>
  <div>
      <form action="#" style="margin-top:10em;" v-on:submit.prevent="contact">
    <div id="contact-form">
     <h2>contact us</h2>
     <label for="names" >Names</label>
     <input type="text" name="names" v-model="form.names">
     <p v-if="!namesValid"> Names  required</p>
     <label for="email">Email</label>
     <input type="email" name="email" required v-model="form.email">
      <p v-if="!emailValid"> Email  required</p>
     <label for="phone">Phone Number</label>
     <input type="number" name="number" v-model="form.phone">
      <p v-if="!phoneValid"> phone  required</p>
     <label for="location">Location</label>
     <input type="text" name="location" required  v-model="form.location">
      <p v-if="!locationValid"> Location  required</p>
     <label for="msg">Message</label>
      <textarea name="message" id="" cols="50" rows="10" required v-model="form.message"></textarea>
      <p v-if="!messageValid"> Message  required</p>
      <button type="submit" name="submit" :disabled="!formValid">send</button>
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
  data () {
    return {
      form: {
        names: null,
        email: null,
        phone: null,
        location: null,
        message: null
      }
    }
  },
  computed: {
    namesValid () {
      return !!this.form.names
    },
    emailValid () {
      return !!this.form.email
    },
    phoneValid () {
      return !!this.form.phone
    },
    locationValid () {
      return !!this.form.location
    },
    messageValid () {
      return typeof this.form.message === 'string'
    },
    formValid () {
      return this.namesValid && this.emailValid && this.phoneValid && this.locationValid && this.messageValid
    }
  },
  methods: {
    contact () {
      if (this.formValid) {
        console.log('Form SUbmitted', this.form)
      } else {
        console.log('form not submitted')
      }
      axios.post('http://localhost:5000/Contacts/Contact', {
        names: this.form.names,
        email: this.form.email,
        phone: this.form.phone,
        location: this.form.location,
        message: this.form.message
      })
        .then(res => {
          router.push({name: 'Student'})
        })
        .catch(err => {
          console.log(err)
        })
    }

  }

}
</script>

<style scoped>
p{
  color: red;
  text-transform: capitalize;
}
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
 input[type="text"],input[type="email"],input[type="number"],textarea{
     display: block;
     width: 90%;

 }
 input[type="text"],input[type="email"],input[type="number"]{
     height: 2em;
 }
 button{
     margin: 1em 7em ;
     width: 20%;
     font-size: 2em;
     height: 1.6em;
     background: blueviolet;
     font-family: sans-serif;
     color:white;
     padding: -7em;
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
