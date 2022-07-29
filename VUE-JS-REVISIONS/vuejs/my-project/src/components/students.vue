<template>
  <div>
    <form v-on:submit.prevent="student" action="#">
    <h2>Register student</h2>
   <label for="names">Names</label>
   <input type="text"  v-model="name" required><br>
   <label for="email">Email</label>
   <input type="email" v-model="email" required><br>
    <label for="schoolId">School ID</label>
   <input type="text" v-model="schoolId" required><br>
   <label for="gender">Gender</label>
   <input type="text" v-model="gender" required><br>
   <label for="age" >Age</label>
   <input type="number" v-model="age"  required><br>
   <button type="submit" name="submit">Register</button>
    </form>

    <div class="searchform" v-on:submit.prevent="searchStudents">
      <h4>Find by age</h4>
      <label for="age">Enter ages</label><br>
      <input type="number" class="form-control" id="age" required v-model="age" name="age">
      <button v-on:click="searchStudents" class="search"> Search</button>
       <ul class="search-result">
      <h1>System users with age:</h1>
      <li v-for="student in students" :key="student">
        <h6>{{student.name}} ({{student.age}})</h6>
        <h6>{{student.email}} ({{student.age}})</h6>
      </li>
    </ul>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'search-student',
  data () {
    return {
      name: '',
      email: '',
      schoolId: '',
      gender: '',
      age: '',
      students: []
    }
  },
  methods: {
    student () {
      axios.post('http://localhost:5000/Students/student', {
        name: this.name,
        email: this.email,
        schoolId: this.schoolId,
        gender: this.gender,
        age: this.age
      })
        .then(res => {
          router.push({name: 'Images'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchStudents () {
      axios.get('http://localhost:5000/Students/studentsByage/' + this.age)
        .then(response => {
          this.students = response.data // JSON are parsed automatically.
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }

  }
}
</script>
 <style scoped>
 li{
   font-size: 25px;
   font-family: 'Courier New', Courier, monospace;
 }
 .searchform{
   width: 50%;
   margin-left: 20%;
 }
 .searchform h4{
   margin-left: 5em;
 }
 #age{
   width: 20%;
 }
 .search{
   background: rgb(95, 171, 201);
 }
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
   margin-left: 0;
   padding-bottom: 5em;
 }

  </style>
