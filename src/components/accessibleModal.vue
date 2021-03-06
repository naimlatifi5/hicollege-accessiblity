<template>
  <portal to="modal">
    <div class="base-modal-frame-wrapper" v-if="active">
      <div
        class="base-modal-frame"
        @click.self="handleClose"
      >
        <div
          role="dialog"
          tabindex="0"
          aria-labelledby="modalTitle"
          aria-describedby="modalContent"
          class="base-modal-frame__container"
        >
          <header class="base-modal-frame__header">
            <h2 id="modalTitle" class="base-modal-frame__headline">
              {{ title }}
            </h2>
            <button
              class="base-modal-frame__close-button"
              aria-label="Close modal"
              @click="handleClose"
              ref="closeBtn"
              @keydown.shift.tab.prevent=""
            >
              X
            </button>
          </header>
          <div class="base-modal-frame__content" id="modalContent">
            <p>
              We should be able to open & close the modal just using the
              keyboard.
            </p>
            <p>
              Trap the focus in the modal: since the modal is an inert
              component, the keyboard navigation should be trapped inside of it
              once it’s open.
            </p>
            <h3>Fill the form</h3>
            <div class="dialog_form_item">
              <label for="name">
                <span class="label_text">
                  Name
                </span>
                <input type="text" id="name" class="name" />
              </label>
            </div>
            <br />
            <div class="dialog_form_item">
              <label for="city">
                <span class="label_text">
                  City:
                </span>
                <input type="text" id="city" class="city" />
              </label>
            </div>
            <br />
            <div class="dialog_form_item">
              <label for="state">
                <span class="label_text">
                  State:
                </span>
                <input type="text" id="state" class="state_input" />
              </label>
            </div>
          </div>
          <footer class="base-modal-frame__footer">
            <button
              type="button"
              @click="handleClose"
              @keydown.tab.exact.prevent=""
            >
              Close
            </button>
          </footer>
        </div>
      </div>
      <transition name="fadeIn">
        <div v-if="hasOverlay" class="base-modal-frame__overlay" />
      </transition>
    </div>
  </portal>
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
  mounted () {
    this.handleCloseOnESC()
    document.body.classList.add('modal-open')
    this.$nextTick(() => {
      this.$refs.closeBtn.focus()
    })
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
    min-height: 280px;
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
