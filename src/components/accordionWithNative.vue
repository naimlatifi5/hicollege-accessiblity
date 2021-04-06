<template>
  <div class="accordion-item" :class="{ 'accordion-item--expanded': expanded }">
    <h4>
      <button
        :aria-expanded="`${expanded}`"
        @click="toggleAccordion"
        type="button"
        class="accordion-item__heading-wrapper"
      >
        <span class="accordion-item__heading">What is the mac address?</span>
        <span class="accordion-item__icon" :style="rotateArrow">
          <svg
            data-v-5728faa5=""
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            style="transform: rotate(180deg);"
          >
            <path
              d="M27.936 24.0327L30.2871 21.6816L20.1756 11.5701C19.5263 10.9208 18.4737 10.9208 17.8244 11.5701L7.71289 21.6816L10.064 24.0327L19 15.0967L27.936 24.0327Z"
              fill="#272A2F"
            ></path>
          </svg>
        </span>
      </button>
    </h4>
    <div v-if="expanded" class="accordion-item__content-wrapper">
      <div class="accordion-item__content">
        I am accessible with use of native button element - Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Maecenas tincidunt aliquet
        placerat. Donec et tellus consectetur nisi congue hendrerit vitae non
        est. Phasellus pharetra ligula quis erat tincidunt consequat non non
        odio. Proin pretium ullamcorper cursus. Sed leo mauris, porttitor non
        ligula
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    rotateArrow () {
      return this.expanded ? 'transform: rotate(180deg)' : ''
    }
  },
  methods: {
    toggleAccordion () {
      this.expanded = !this.expanded
    },
    OnEnter () {
      console.log('enter')
    }
  }
}
</script>
<style lang="scss" scoped>
.accordion-item {
  $this: &;
  border-bottom: 1px solid grey;
  > h4 {
    margin: 0;
  }

  &__heading-wrapper {
    border: none;
    background: none;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
  }

  &__heading {
    max-width: 500px;
    text-align: left;
  }

  &__content {
    padding: 6px 18px 18px;
    font-family: sans-serif;
    font-size: 14px;
    max-width: 700px;
    text-align: left;
  }

  &__icon {
    display: inline-block;
    > svg {
      transition: transform 0.2s ease;
    }
  }

  &--expanded {
    margin-bottom: 10px;
    #{$this}__heading-wrapper,
    #{$this}__content-wrapper {
      background-color: white;
    }
  }
}
</style>
