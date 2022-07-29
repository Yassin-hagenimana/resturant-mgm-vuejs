<template>
  <div>
   <AddTodo/>
   <filterTodos/>
  <h3>TODOS</h3>
  <div class="todos">
  <div @click="onDblClick(todo)" class="todo" v-for="todo in allTodos" :key="todo.id">
  {{todo.title}}
 <button @click="deleteTodo(todo.id)">Delete</button>
  </div>
  </div>
  </div>
</template>
<script>
import AddTodo from './addTodo'
import filterTodos from './filterTodos'
import {mapGetters, mapActions} from 'vuex'
export default{
  name: 'todos',
  components: {
    AddTodo,
    filterTodos
  },
  methods: { ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    ondblclick (todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo)
    }
  },

  computed: mapGetters(['allTodos']),
  created () {
    this.fetchTodos()
  }
}
</script>
<style>
h3{
  text-align: center;
padding-top: 2em;
  color: blueviolet;
}
.todo{
  border:1px solid #ccc;
  background: #7c7af1;
  padding: 1rem;
  color: #fff;
  text-transform: capitalize;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.todos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
button{
  position: relative;
  bottom: 10px;
  right: 10px;
  color: #fff;
  background: green;
  cursor: pointer;
}
</style>
