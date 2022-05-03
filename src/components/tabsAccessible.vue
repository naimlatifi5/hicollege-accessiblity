<template>
  <div class="tabs">
    <div
      role="tablist"
      @keydown="handleKeyDownTabs"
      aria-label="Some sample tabs"
      class="tabs__nav"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="tabs__nav_tab"
        role="tab"
        :id="`tab-${index + 1}`"
        :tabindex="index === active ? 0 : -1"
        :aria-controls="`control-tab-${index + 1}`"
        :aria-selected="index === active ? true : false"
        :class="index === active ? 'tabs__nav_tab--active' : ''"
        @click="changeTabs(index)"
      >
        Tab {{ index + 1 }}
      </button>
    </div>
    <div
      class="tabs__content"
      role="tabpanel"
      tabindex="0"
      :id="`control-tab-${active + 1}`"
      :aria-labelledby="`tab-${active + 1}`"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  // example https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
  data: function () {
    return {
      active: 0,
      tabs: ['Content for tab 1!', 'Content for tab 2!', 'Content for tab 3!'],
    }
  },
  computed: {
    content() {
      return this.tabs[this.active]
    },
  },
  methods: {
    changeTabs(index) {
      this.active = index
    },
    handleKeyDownTabs(e) {
      let tabFocus = 0
      const tabs = document.querySelectorAll('[role="tab"]')

      if (e.keyCode === 39 || e.keyCode === 37) {
        tabs[tabFocus].setAttribute('tabindex', -1)
        if (e.keyCode === 39) {
          tabFocus++
          // If we're at the end, go to the start
          if (tabFocus >= tabs.length) {
            tabFocus = 0
          }
        } else if (e.keyCode === 37) {
          tabFocus--
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1
          }
        }
        //TODO check why arrow back is not working
        tabs[tabFocus].setAttribute('tabindex', 0)
        tabs[tabFocus].focus()
      }
    },
  },
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
