<template>

  <nav class=" bg-blue-400 w-full">
    <router-link class="text-white" to="/">Home</router-link>
    <router-link class="text-white" to="/todo-list">Todo list</router-link>
  </nav>
  <router-view class="flex items-center"/>
</template>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  color: #555;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
