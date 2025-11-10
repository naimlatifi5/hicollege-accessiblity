<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'page1' }">Native elements</router-link>
      <router-link :to="{ name: 'page2' }">Inaccessible components</router-link>
      <router-link :to="{ name: 'page3' }">Accessible components</router-link>
      <router-link :to="{ name: 'modal-inaccessible' }">
        Inaccessible modals
      </router-link>
      <router-link :to="{ name: 'modal-accessible' }">
        Accessible modal
      </router-link>
      <router-link :to="{ name: 'accordions' }">Accordions</router-link>
      <router-link :to="{ name: 'todolist' }">Todolist</router-link>
      <router-link :to="{ name: 'tabs' }">Tabs</router-link>
      <router-link :to="{ name: 'noAccessibilityPage' }">Page with accessibility issues</router-link>
      <router-link :to="{ name: 'accessiblePage' }">Page with no accessibility issues</router-link>
    </nav>
    <router-view />
    <portal-target name="modal"></portal-target>
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
fieldset {
  border: none;
}

/* Global anchor styling for WCAG compliance */
a {
  color: #0056b3;
  text-decoration: underline;
  transition: color 0.2s ease;
}

a:hover {
  color: #003d82;
}

a:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}

a:visited {
  color: #6f42c1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    color: #0056b3;
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #003d82;
  }

  a:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }
}
</style>
