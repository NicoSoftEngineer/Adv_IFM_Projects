<template>
  <div class=" pt-5 flex-col items-center ">
    <h1 class=" text-lg">Your todo list</h1>
    <TodoInput @response="(resp) => addTodo(resp)" />
    <TodoList  @response="(resp) => deleteTodo(resp)" :Todos="todos" />

  </div>
</template>

<script setup>
import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue';
import { ref } from 'vue';
let id = ref(1)
const todos = ref([
  {
    Id : id.value++,
    Title: 'Todo 1',
    Description: 'Description 1',
    Done: false
  },
  {
    Id : id.value++,
    Title: 'Todo 2',
    Description: 'Description 2',
    Done: false
  }
])
function deleteTodo(todo) {
  console.log(todo)
  todos.value = todos.value.filter(t => t.Id !== todo)
}
function addTodo(todo) {
  todos.value.push({
    Id : id.value++,
    Title: todo.Title,
    Description: todo.Description,
    Done: false
  })
}
</script>

<style lang="css" scoped></style>