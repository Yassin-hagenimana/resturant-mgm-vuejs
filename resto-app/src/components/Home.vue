<template>
  <div id="name">
  <Header/>
  <h1>Hello user, Welcome to the homepage.</h1>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
  name: "Home",
  components:{
  Header
  },
  data() {
    return {};
  },
  methods: {},
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
