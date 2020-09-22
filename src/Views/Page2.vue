<template>
  <div class="ui container">
    <h1>Custom components</h1>
   <div class="my-button" @click="btnClicked">Hello button</div>
    <div class="custom-switch">
      <span>Notify email</span>
      <button @keyup.enter="firchSwithStatement" @click="firchSwithStatement" :class="swithState1">
        <span>off</span>
        <span>on</span>
      </button>
    </div>
   <hr/>
    <h2> Accessible custom components </h2>
    <div tabindex="0" role="my-button" @keyup.enter="btnClicked()" :aria-pressed="pressed" class="my-button" @click="btnClicked" aria-label="custom button">
      <span aria-hidden="true">Accessible button</span>
      <span class="visually-hidden">play</span>
    </div>
   <div class="custom-switch">
      <span id="notify-by-email">Notify email</span>

      <button role="switch" :aria-checked="switch1.toString()" @click.prevent="checkedButtonOnClick" @keyup.enter="checkedButtonOnEnter" aria-labelledby="notify-by-email">
        <span>off</span>
        <span>on</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      pressed: false,
      switch: false,
      switch1: false
    }
  },
  computed: {
    swithState () {
      return this.switch1 ? 'checkbox-on-switch1' : 'checkbox-off-switch1'
    },
    swithState1 () {
      return this.switch ? 'checkbox-on' : 'checkbox-off'
    }
  },
  watch: {
    switch1 (val) {
      this.checkedButtonOnEnter(val)
    }
  },
  methods: {
    btnClicked () {
      alert('Button clicked')
      this.pressed = true
    },
    firchSwithStatement () {
      this.switch = !this.switch
    },
    checkedButtonOnClick () {
      this.switch1 = !this.switch1
    },
    checkedButtonOnEnter (val) {
      this.switch1 = !val
    }
  }
}
</script>

<style lang="scss" scoped>
.my-button {
  background-color: red;
  padding: 10px;
  color: white;
  max-width: 200px;
  margin: 0 auto;
  cursor: pointer;
}
.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  border: 0;
  padding: 0;
}
[role='switch'][aria-checked='true'] :first-child,
[role='switch'][aria-checked='false'] :last-child {
  background-color: yellow;
  padding: 3px;
}
.checkbox-on,
.checkbox-on-switch1 {
  span {
    &:last-child {
      background-color: yellow;
      padding: 2px;
    }
  }
}
</style>
