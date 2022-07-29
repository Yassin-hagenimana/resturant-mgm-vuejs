<template>
  <div id="name">
  <Header/>
  <h1>Hello user, Welcome to Update Restaurant Page.</h1>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
  name: "Update",
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
