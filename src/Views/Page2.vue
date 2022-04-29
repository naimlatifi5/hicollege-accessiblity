<template>
  <div class="ui container">
    <h1>Custom components</h1>
    <!-- Remove example for alt text and turn on the voiceOver to see the diff with alt text and without -->
    <img src="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif" />
    <br />
    <div class="my-button" @click="btnClicked">Hello button</div>
    <br />
    <div class="ui form">
      <div class="my-button" @click="btnClicked">Hello button</div>
      <div class="field">
        <div>Email:</div>
        <div class="custom-input password">
          <span>enter your password</span>
        </div>
      </div>
      <div class="field">
        <div class="dropdown" @click="toggleDropdown">
          <label data-value="">{{ optionSelected }}</label>
          <ul v-if="dropdownActive">
            <li data-value="1">Admin</li>
            <li data-value="2">Developer</li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/">About us</a>
      </div>
    </div>
    <h4>Navigation</h4>
    <div class="nav">
      <a href="/">Home</a>
      <br />
      <a href="/">About us</a>
    </div>
    <div class="checkbox-wrapper">
      <h2>Custom checkboxes</h2>
      <div
        class="checkbox"
        :class="{ checked: checked }"
        @click="clickedCheckbox"
      >
        Fruit
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      switch: false,
      checked: false,
      checked1: false,
      dropdownActive: false,
      optionSelected: 'User type:'
    }
  },
  computed: {
    swithState () {
      return this.switch ? 'checkbox-on' : 'checkbox-off'
    }
  },
  methods: {
    btnClicked () {
      alert('Button clicked')
    },
    clickedCheckbox () {
      this.checked = !this.checked
    },
    toggleDropdown (e) {
      this.optionSelected = e.target.innerText
      this.dropdownActive = !this.dropdownActive
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
.form {
  max-width: 500px;
  margin: 0 auto;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.checkbox-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.checkboxes {
  list-style: none;
}

.checkbox {
  position: relative;
  padding-left: 22px;
  text-align: left;
  cursor: pointer;
}

.checkbox:focus {
  outline: none;
}

.checkbox::before {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  position: absolute;
  left: 3px;
  top: 3px;
}

.checkbox:focus::before {
  outline: #2196f3 auto 5px;
}

.checkbox[checked]::after,
.checkbox.checked::after,
.checkbox.checked1::after {
  content: '';
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAQAAAADpb+tAAAAaElEQVR4Xl3PIQoCQQCF4Y8JW42D1bDZ4iVEjDbxFpstYhC7eIVBZHkXFGw734sv/TqDQQ8Xb1udja/I8igeIm7Aygj2IpoKTGZnVRNxAHYi4iPiDlA9xX+aNQDFySziqDN6uSp6y7ofEMwZ05uUZRkAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  display: block;
  width: 11px;
  height: 11px;
  position: absolute;
  left: 5px;
  top: 5px;
}

.dropdown {
  margin: 0px auto;
  position: relative;
  width: calc(100% - 40px);
  max-width: 400px;
}

.dropdown label {
  display: block;
  padding: 8px 16px;
  background: White;
  color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 3px;
}

.dropdown ul {
  list-style: none;
  position: absolute;
  width: 100%;
}

.dropdown ul li {
  padding: 0px 16px;
  background: #ddd;
  color: #343838;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  height: 0px;
  overflow: hidden;
  cursor: pointer;
  transition: height 0.1s linear 0s;
}

.dropdown ul li:hover,
.dropdown ul li.selected {
  background: #00b4cc;
  color: #fafafa;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.dropdown:hover ul li {
  padding: 8px 16px;
  height: 34px;
}
.custom-input {
  padding: 0.67857143em 1em;
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  text-align: left;
  color: #2c3e50;
}
</style>
