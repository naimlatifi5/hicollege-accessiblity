<template>
  <div class="tabs-page">
    <h4>Inaccessible tabs</h4>
    <tabsInaccessible />
    <br />
    <br />
    <hr />
    <h4>Accessible tabs</h4>
    <tabsAccessible />
  </div>
</template>

<script>
import tabsInaccessible from '../components/tabsInaccessible.vue'
import tabsAccessible from '../components/tabsAccessible.vue'
export default {
  name: 'Page8',
  components: {
    tabsInaccessible,
    tabsAccessible
  }
}
</script>

<style lang="scss" scoped></style>
