<template>
  <div id="name">
  <Header/>
  <h1>Hello user, Welcome to Update Restaurant Page.</h1>
  <div class="update">
  <input type="text" placeholder="Enter Name" v-model="Restaurant.name"/>
  <input type="text" placeholder="Enter Address" v-model="Restaurant.address"/>
  <input type="text" placeholder="Enter Contact" v-model="Restaurant.contact"/>
  <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </div>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
import axios from "axios"
export default {
  name: "Update",
  components:{
  Header
  },
  data() {
    return {
    Restaurant:{
    name:'',
    contact:'',
    address:''
    }
    };
  },
  methods: {
  async updateRestaurant(){
   let result=await axios.put("http://localhost:3000/restaurants/"+ this.$route.params.id,{
   name:this.Restaurant.name,
   address:this.Restaurant.address,
   contact:this.Restaurant.contact,
   })
   if(result.status==200){
   this.$router.push({name:"Home"})
   }
  }
  },
  async mounted(){
let user=localStorage.getItem("user-info")
if(!user){
    this.$router({name:"Login"})
}

  let result=await axios.get("http://localhost:3000/restaurants/"+ this.$route.params.id)
 console.warn(result.data)
 this.Restaurant=result.data;
  }
};
</script>

<style>
</style>
