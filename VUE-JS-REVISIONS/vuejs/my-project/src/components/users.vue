<template>
  <div>
    <input type="text" placeholder="Search Users" v-model="search">
 <table >
   <thead>
     <tr>
       <th>#</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Register date</th>
       <th>Gender</th>
       <th colspan="2" >Action</th>
     </tr>
   </thead>
   <tbody>
      <tr v-for=" user in filteredUsers" :key="user._id">
       <td>{{user._id}}</td>
       <td>{{user.first_name}}</td>
       <td>{{user.last_name}}</td>
       <td>{{user.email}}</td>
       <td>{{user.date}}</td>
       <td>{{user.gender}}</td>

       <!-- <td>{{user.password}}</td> -->
       <td><router-link :to = "{ name: 'Update', params: { id: user._id }}" class="update">Edit</router-link></td>
       <td><button  class="delete" v-on:click="deleteUser(user._id)">Delete</button></td>
     </tr>
   </tbody>
 </table>
  </div>
</template>
<script>
import axios from 'axios'
// import router from '../router'
export default{
  name: 'user',
  data () {
    return {
      users: [],
      search: ''
    }
  },
  methods: {
    deleteUser (id) {
      axios.delete('http://localhost:5000/Users/delete/' + id)
      this.users.splice(id, 1)

        .then(response => {
          console.log(response.data)
          this.$emit('refreshData')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    filteredUsers: function () {
      return this.users.filter((user) => {
        return user.first_name.match(this.search)
      })
    }
  },
  mounted () {
    axios.get('http://localhost:5000/Users/users')
      .then((response) => {
        console.log(response.data)
        this.users = response.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
<style  scoped>
table,th,td{
  margin-left: 8em ;
  margin-top: 4em;
  border: 1px solid black;
  border-collapse: collapse;
  border-bottom: 1px solid black;
}
td{
   border-bottom: 1px solid black;
}

th{
  padding: 2em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: rgb(101, 199, 101);
  color: white;
}
td{
  font-family: 'Courier New', Courier, monospace;
}
.delete{
  color: white;
  background: rgb(223, 119, 119);
  padding: 13px;
  width: 10em;
  margin:1em;
  border:none;
  border-radius: 3px;
}
.delete:hover{
  background: rgb(241, 178, 178);
  transition: 1s;
}
.update{
  color: white;
  padding: 13px;
  width: 10em;
  margin:1em;
  border: none;
  background: rgb(86, 202, 248);
  border-radius: 3px;
}
.update:hover{
  text-decoration: none;
  background: rgb(186, 235, 255);
  transition: 1s;
}
input[type="text"]{
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
}
</style>
