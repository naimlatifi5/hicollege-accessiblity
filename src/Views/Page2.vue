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
      <button @click="firchSwithStatement" :class="swithState1">
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
    <div class="ui checkbox">
      <label>Fruit</label>
    </div>
    <div class="ui checkbox">
      <label>Meal</label>
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
      pressed: false,
      switch: false,
      switch1: false
    }
  },
  components: {
    toDoListNotAccessible
  },
  computed: {
    swithState () {
      return this.switch1 ? 'checkbox-on-switch1' : 'checkbox-off-switch1'
    },
    swithState1 () {
      return this.switch ? 'checkbox-on' : 'checkbox-off'
    }
  },
  methods: {
    btnClicked () {
      alert('Button clicked')
      this.pressed = true
    },
    firchSwithStatement () {
      this.switch = !this.switch
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
</style>
