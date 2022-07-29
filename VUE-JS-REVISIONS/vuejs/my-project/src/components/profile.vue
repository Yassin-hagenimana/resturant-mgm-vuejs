<template>
  <div>
<table>
  <tbody>
    <div id="data">
    <tr>
      <td>First Name:</td>
      <td>{{first_name}}</td>
    </tr>
 <br>
     <tr>
      <td>Last Name:</td>
      <td>{{last_name}}</td>
    </tr>
    <br>
     <tr>
      <td>Email:</td>
      <td>{{email}}</td>

    </tr>
    <br>
    </div>
  </tbody>
</table>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)

    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    }
  }
}
</script>

<style scoped>
table{
  text-align: center;
  border-collapse: collapse;
}
tbody{
  margin-top: 10em;
}
#data{

  margin-top: 10em;
  margin-left: 30em;
  border: 1px solid rgb(248, 244, 244);
  width: 70%;
  height: 90%;
  border-radius: 5px;
  text-align: center;
}
td{
/* color:rgb(10, 9, 9); */
margin-left: 30em;
padding: 20px 30px 5px;
}
#data:hover{
  border: 2px solid rgb(255, 255, 255);
  background: white;
  box-shadow: 0px 0px 5px 5px;
  transition: 1s;
}
</style>
