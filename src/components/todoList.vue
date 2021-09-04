<template>
  <section aria-labelledby="todos-label">
    <h1 id="todos-label">My to-do list (accessible)</h1>
    <form @submit.prevent="addTodods">
      <label for="add-todo" class="visually-hidden">Add a to-do item</label>
      <input
        id="add-todo"
        v-model="newTask"
        type="text"
        placeholder="E.g buy milk"
      />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="item in todos" :key="item.item">{{ item.item }}</li>
    </ul>
    <div v-if="!todos.length" class="empty-state">
      Either you have done everything already or there are still things to add
      to your list. Add more items in the list
    </div>
    <div
      ref="feedback"
      class="visually-hidden"
      role="status"
      aria-live="polite"
    ></div>
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
      if (this.newTask !== '') {
        this.todos.push({ item: this.newTask })
        this.newTask = ''
        this.addToFeedback(this.newTask)
      }
    },
    addToFeedback (item) {
      let feedback = this.$refs.feedback
      feedback.innerText = `${item} added to your to-do list`
    }
  }
}
</script>

<style>
.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

</style>
