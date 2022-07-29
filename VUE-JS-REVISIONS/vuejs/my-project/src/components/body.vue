<template>
<div>

   <br><br> <br>
    <body>

   <div id="body" title="head boy">
    <p>hagenimana yassin <br>software engneer</p>
    <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
   <p>hagenimana yassin <br>software engneer</p>
   <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
  <p>hagenimana yassin <br>software engneer</p>
  <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
    <p>hagenimana yassin <br>software engneer</p>
    <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <p id="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque maxime nisi provident in ipsam enim, veniam praesentium ut ea ab numquam dicta corrupti? Dolore, fuga ratione natus cumque odio facilis.
   Voluptatum odit veniam ducimus dolore possimus ratione, perferendis magni accusamus eos blanditiis. Aspernatur consequatur ex ad. Delectus nostrum molestiae adipisci, fugiat eveniet, dolorum obcaecati quos nam, possimus deleniti nobis fuga?
   Sunt, iusto minima nostrum nemo exercitationem laudantium nesciunt fugit repudiandae accusantium natus, harum asperiores placeat dicta beatae dignissimos rerum iure! Suscipit totam modi, possimus id cumque eum? Illum, maiores alias!</p>
   </body>
      <h1>{{title}}</h1>
      <input type="text" v-model="search" placeholder="Search Users">
  <div v-for="user in filteredUsers" :key="user">
    <table cell-spacing="0" cell-padding="20">
       <tr>
         <th>First Name</th>
         <th>Last name</th>
         <th>Email </th>
         <th>Register Date</th>
       </tr>
          <tr>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.date}}</td>
          </tr>
          </table>

          </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      title: 'ALL SYSTEM USERS',
      Users: {},
      search: ''
    }
  },

  mounted () {
    axios.get('http://localhost:5000/Users/users')

      .then(response => {
        console.log(response.data)
        this.Users = response.data.slice(0, 100)
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    filteredUsers: function () {
      return this.Users.filter((user) => {
        return user.email.match(this.search)
      })
    }
  }
}

</script>

<style scoped>
table,tr,td{
  border: 0px solid black;
  padding: 1em ;
  background: #f1eeee;

}
tr{
  padding: 2px 2px;
  border: none;
}
img{
  width: 12em;
  margin-left: 10em;
}
 body{
  border: 1px solid black;
 }
 p{
     text-align: center;
     font-size: 2em;
     color: blueviolet;
 }
 #body{
     border: 1px solid blueviolet;
     width: 500px;
     padding: 1em;
     margin: 2em;
     display: inline-block;
     font-family: 'Nunito semiBold';
 }
 #body p{
     text-transform:capitalize;
     font-size: 1em;
     color: rgb(94, 94, 94);
 }
 #lorem{
   text-align: justify;
   margin: 1em;
   color: black;
   font-size: 25px;
 }
 h1{
   text-align: center;
   color: blueviolet;
   text-transform: capitalize;
 }
 th{
  color: black;
   background: hsl(0, 0%, 100%);
 }
 td{
   color:black;
   background: rgb(249, 249, 250);
   height: 2em;
   width: 10%;
   border-radius: 5px;

 }
 input[type="text"]{
   float: right;
   margin-right: 30%;
   width: 30%;
   border: 1px solid blueviolet;
   height: 2em;
   margin-bottom: 2em;
 }
</style>
