<template>
  <div class="base-modal-frame-wrapper" v-if="active">
    <div
      class="base-modal-frame"
      :class="[modalWithFooter]"
      @click.self="handleClose"
    >
      <div
        role="dialog"
        class="base-modal-frame__container"
        :style="{ 'background-color': bgColor }"
      >
        <header class="base-modal-frame__header" :class="hasIcon">
          <h2 class="base-modal-frame__headline">{{ title }}</h2>
          <button
            class="base-modal-frame__close-button"
            aria-label="Stäng modal"
            data-test="close-button"
            @click="handleClose"
          >X</button>
        </header>
        <div class="base-modal-frame__content">
          <slot name="content"></slot>
        </div>

        <footer
          v-if="hasFooterSlot"
          :style="{ 'background-color': bgColor }"
          class="base-modal-frame__footer"
        >
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
    <transition name="fadeIn">
      <div
        v-if="hasOverlay"
        class="base-modal-frame__overlay"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    hasOverlay: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: true
    }
  },
  computed: {
    hasFooterSlot () {
      return !!this.$slots['footer']
    },
    hasIcon () {
      return this.iconName && this.iconName !== ''
        ? 'base-modal-frame--has-icon'
        : null
    },
    modalWithFooter () {
      return this.hasFooterSlot ? 'base-modal-frame--with-footer' : null
    }
  },
  mounted () {
    this.handleCloseOnESC()
    document.body.classList.add('modal-open')
  },
  destroyed () {
    document.body.classList.remove('modal-open')
  },
  methods: {
    handleClose () {
      this.$emit('onClose')
    },
    handleCloseOnESC () {
      document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
          this.handleClose()
        }
      })
    }
  }
}
</script>
<style lang="scss">
body {
  &.modal-open {
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
.base-modal-frame {
  $this: &;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  display: flex;
  justify-content: center;
  outline: none;
  align-items: center;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    opacity: 0.4;
    z-index: 100;
  }

  &__container {
    max-width: 100vw;
    max-height: 95%;
    background-color: white;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 480px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 18px;
    border-radius: 24px;
  }

  &__content {
    overflow-y: auto;
    margin: 0;
  }
  &__headline {
    font-size: 36px;
  }
  &__close-button {
    border: none;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    position: absolute;
    outline: none;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 24px;
    top: 24px;
  }
  &__footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 18px;
    display: flex;
    justify-content: center;
  }
  &__icon {
    width: 96px;
    height: 96px;
    margin: 24px 0 24px 0;
  }
  &--has-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -18px -18px 0 -18px;
    background: linear-gradient(180deg, green 0%, rgba(222, 245, 236, 0) 100%);
    #{$this}__close-button {
      background-color: white;
    }
  }
  &--with-footer {
    #{$this}__content {
      padding: 0 18px 60px;
    }
  }
}

.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s ease;
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: opacity 0.5s, transform 0.5s ease;
}

.slideUp-enter,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.slideUp-enter-to,
.slideUp-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>
