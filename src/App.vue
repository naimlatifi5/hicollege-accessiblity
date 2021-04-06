<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'page1' }">Native elements</router-link>
      <router-link :to="{ name: 'page2' }">Inaccessible components</router-link>
      <router-link :to="{ name: 'page3' }">Accessible components</router-link>
      <router-link :to="{ name: 'modal-inaccessible' }">Inaccessible modals</router-link>
      <router-link :to="{ name: 'modal-accessible' }">Accessible modal</router-link>
      <router-link :to="{ name: 'accordions' }">Accessible/InAccessisble accordions</router-link>
    </nav>
    <router-view />
    <portal-target name="modal">
    </portal-target>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA-test'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  a {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
  }
}
</style>
