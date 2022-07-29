<template lang="">
    <div>
    <img class="logo" src="../assets/logo.png"/>
        <h1>Signup form</h1>

     <div class="register">
     <input type="text" placeholder="Enter Names" v-model="name"/>
     <input type="email" placeholder="Enter Email" v-model="email"/>
     <input type="password" placeholder="Enter Password" v-model="password"/>

     <button v-on:click="signUp">Sign up</button>
     <p>
     <router-link to="/login">Login</router-link>
     </p>

    </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Signup',
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        async signUp(){
            let result= await axios.post("http://localhost:3000/user",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.warn(result)

            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:"Home"})
            }
        }
    },
    mounted(){
        let user =localStorage.getItem("user-info")
        if(user){
            this.$router.push({name:"Home"})
        }
    }
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
