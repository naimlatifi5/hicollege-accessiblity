<template>
  <div class="tabs">
    <div class="tabs__nav">
      <div
        class="tabs__nav_tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="index === active ? 'tabs__nav_tab--active' : ''"
        @click="activate(index)"
      >
        Tab {{ index + 1 }}
      </div>
    </div>
    <div class="tabs__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data: function () {
    return {
      active: 0,
      tabs: ['Content for tab 1!', 'Content for tab 2!', 'Content for tab 3!']
    }
  },
  computed: {
    content () {
      return this.tabs[this.active]
    }
  },
  methods: {
    activate (index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  background: grey;
  padding: 1rem;
  max-width: 1440px;
  margin: 0 auto;
  &__nav {
    display: flex;
    &_tab {
      padding: 1rem;
      margin: 0 0.5rem 0 0;
      background: #fff;
      border-radius: 0.5rem 0.5rem 0 0;
      box-shadow: inset 0 -1rem 0.75rem -1rem rgba(0, 0, 0, 0.25);
      cursor: pointer;
      opacity: 0.75;
      transition: 100ms linear all;
      &--active {
        opacity: 1;
        box-shadow: none;
      }
    }
  }
  &__content {
    background: #fff;
    padding: 1rem;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
  }
}
</style>
