<template>
  <div>
    <form v-on:submit.prevent="register" action="#">

   <h2>Register  School</h2>
   <label for="name">Name</label>
   <input type="text"  v-model="name"><br>
   <label for="abbreviation" >Abbreviation</label>
   <input type="text" v-model="abbreviation"><br>
    <label for="motto" >Motto</label>
   <input type="text" v-model="motto"><br>
   <label for="sector">Sector</label>
   <input type="text" v-model="sector"><br>
   <button type="submit" name="submit">Register</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'

export default {

  data () {
    return {
      name: '',
      abbreviation: '',
      motto: '',
      sector: ''
    }
  },

  methods: {
    register () {
      axios.post('http://localhost:5000/Schools/school', {
        name: this.name,
        abbreviation: this.abbreviation,
        motto: this.motto,
        sector: this.sector
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
     form{
       width: 60%;
       border: 1px solid rgb(158, 91, 221);
       margin: 10em;
       padding-left: 20px;
       box-shadow: 0px 0px 4px 2px;
       border-radius: 5px;
     }
     h2{
       text-align: center;
       color: blueviolet;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     }
     input[type="text"],input[type="email"],input[type="number"]{
     display: block;
     width: 90%;
     padding: 5px;
     font-family:'Courier New', Courier, monospace
 }
 input[type="text"],input[type="email"],input[type="number"]{
     height: 2em;

 }
 button{
     margin: 1em 0em ;
     width: 20%;
     font-size: 1em;
     height: 3em;
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
 label{
   margin-left:0;
   padding-bottom: 5em;
 }

  </style>
