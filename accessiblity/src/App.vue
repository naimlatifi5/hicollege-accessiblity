<template>
  <div id="app">
    <nav>
      <router-link :to="{ 'name': 'page1'}">Page 1- Accessible</router-link>
      <router-link :to="{ 'name': 'page2'}">Page 2- Accessible</router-link>
    </nav>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
