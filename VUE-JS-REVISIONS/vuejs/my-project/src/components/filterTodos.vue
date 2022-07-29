<template>
  <div class="container">
  <h2>Filter Todos:</h2>
  <select @change="filterTodos($event)">
   <option value="200">200</option>
   <option value="100">100</option>
   <option value="50">50</option>
   <option value="20">20</option>
   <option value="10">10</option>
   <option value="5">5</option>
 </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'filterTodos',
  methods: mapActions(['filterTodos'])
}
</script>

<style scoped>
select{
  margin-top: 20px;
  padding: 6px;
  border: 1px solid black;
}
.container{
  margin-left: 50%;
}
</style>
