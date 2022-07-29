<template>
<div class="nav">
<a href="#">Home</a>
<a href="#">Add resturant</a>
<a href="#">Update resturant</a>
<a href="#">Logout</a>
    </div>
</template>

<script>
export default {
  name:"Header",
  data() {
    return {};
  },
  methods: {},

};
</script>
<style>
.nav{
background:#333;
overflow:hidden;
}

.nav a{
float:left;
color:#f2f2f2f2;
padding:14px 16px;
text-align:center;
font-size:17px;
text-decoration:none;
margin-right:5px;
}

.nav a:hover{
background:#ddd;
color:#333;
}

</style>
