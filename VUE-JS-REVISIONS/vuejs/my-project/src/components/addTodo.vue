<template>
  <div>
    <h3>Add todo</h3>

  <div class="add">
  <form @submit="onSubmit">
    <input type="text" placeholder="Add todo ....." v-model="title">

    <input type="submit" value="Submit ">
  </form>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit (e) {
      e.preventDefault()
      this.addTodo(this.title)
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  width: 50%;
  margin-left: 30em;
}
input[type='text']{
  flex: 10;
  padding: 10px;
  border: 1px solid  black;
  outline: 0;
}
input[type="submit"]{
  flex: 2;
  background: blueviolet;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
</style>
