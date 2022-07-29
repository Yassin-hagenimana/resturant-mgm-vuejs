<template>
  <div>
  <Header/>
  <h1>Hello user, Welcome to the add resturant page.</h1>
  <div class="add">
  <input type="text" placeholder="Enter Name" v-model="Restaurant.name"/>
  <input type="text" placeholder="Enter Address" v-model="Restaurant.address"/>
  <input type="text" placeholder="Enter Contact" v-model="Restaurant.contact"/>
  <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
  </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
  name: "Add",
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
  async addRestaurant(){
  console.warn(this.Restaurant.name)
  }
  },
  mounted(){
let user=localStorage.getItem("user-info")
if(!user){
    this.$router({name:"Login"})
}
  }
};
</script>

<style>
</style>
