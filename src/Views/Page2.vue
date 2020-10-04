<template>
  <div class="ui container">
    <h1>Custom components</h1>
      <!-- Remove example for alt text and turn on the voiceOver to see the diff with alt text and without -->
    <img src="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif" />
    <br/>
   <div class="my-button" @click="btnClicked">Hello button</div>
   <br/>
    <div class="custom-switch">
      <span>Notify email</span>
      <button @click="firchSwithStatement" :class="swithState">
        <span>off</span>
        <span>on</span>
      </button>
    </div>
    <br/>
       <div class="ui form">
      <div class="field">
        <label>Email: </label>
        <input type="text" id="email" placeholder="enter your email" />
     </div>
     <div class="field">
       <label>Password: </label>
       <input type="password" id="password" placeholder="enter your password" />
     </div>
     <div class="field">
       <label>User Type: </label>
       <select name="user_type" value="">
         <option disabled value="">Choose user type</option>
         <option value="admin">Admin</option>
         <option value="user">User</option>
       </select>
     </div>
     <button class="ui primary button">Submit</button>
  </div>
  <br>
  <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About us</a></li>
  </ul>
    <div class="checkbox-wrapper">
      <h2>Custom checkboxes</h2>
      <div class="checkbox" tabindex="0" :class="{'checked': checked}" @click="clickedCheckbox">
        Fruit
      </div>
    </div>
    <to-do-list-not-accessible></to-do-list-not-accessible>
  </div>
</template>

<script>
import toDoListNotAccessible from '../components/todoList.vue'
export default {
  name: 'Page2',
  data () {
    return {
      switch: false,
      checked: false,
      checked1: false
    }
  },
  components: {
    toDoListNotAccessible
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
    firchSwithStatement () {
      this.switch = !this.switch
    },
    clickedCheckbox () {
      this.checked = !this.checked
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
  outline: #2196F3 auto 5px;
}

.checkbox[checked]::after,
.checkbox.checked::after,
.checkbox.checked1::after  {
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
</style>
