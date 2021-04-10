<template>
  <section aria-labelledby="todos-label">
    <h1 id="todos-label">My to-do list (inaccessible)</h1>
      <input
        id="add-todo"
        v-model="newTask"
        type="text"
        placeholder="E.g buy milk"
      />
      <button type="submit" @click="addTodods">Add</button>
    <ul>
      <li v-for="item in todos" :key="item.item">{{ item.item }}</li>
    </ul>
    <div v-if="!todos.length" class="empty-state">
      Either you have done everything already or there are still things to add
      to your list. Add more items in the list
    </div>
  </section>
</template>
<script>
export default {
  name: 'Todos',
  data () {
    return {
      todos: [],
      newTask: ''
    }
  },
  methods: {
    addTodods () {
      this.todos.push({ item: this.newTask })
      this.newTask = ''
    }
  }
}
</script>
<style>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
