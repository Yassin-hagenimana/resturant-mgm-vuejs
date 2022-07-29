<template lang="">
    <div>
    <img class="logo" src="../assets/logo.png"/>
        <h1>Signup form</h1>

     <div class="register">
     <input type="text" placeholder="Enter Names"/>
     <input type="text" placeholder="Enter Email"/>
     <input type="text" placeholder="Enter Password"/>

     <button type="submit">Sign up</button>
    
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.logo{
width:100px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 5px;

}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
}
</style>