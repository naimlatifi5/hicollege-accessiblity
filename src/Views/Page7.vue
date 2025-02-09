<template>
    <div class="todolists">
     <inAccessibleToDoList></inAccessibleToDoList>
     <br/>
     <hr/>
     <accessibleToDoList></accessibleToDoList>
    </div>
</template>

<script>
import accessibleToDoList from '../components/todoList.vue'
import inAccessibleToDoList from '../components/todoListNotAccessible.vue'
export default {
  name: 'ToDoList',
  components: {
    accessibleToDoList,
    inAccessibleToDoList
  }
}
</script>
