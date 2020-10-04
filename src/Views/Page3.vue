<template>
  <div class="ui container">
    <header>
        <h1> Accessible custom components </h1>
   </header>
   <main>
      <img src="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif" alt="a cute dog, saying hello" />
      <br/>
      <div tabindex="0" role="my-button" class="my-button" @click="btnClicked" aria-label="custom button">
        <span aria-hidden="true">Accessible button</span>
      </div>
    <br/>
   <div class="custom-switch">
      <span id="notify-by-email">Notify email</span>
      <button role="switch" :class="swithState" :aria-checked="this.switch.toString()" @click.prevent="checkedButtonOnClick" @keyup.enter="checkedButtonOnEnter" aria-labelledby="notify-by-email">
        <span>off</span>
        <span>on</span>
      </button>
    </div>
    <h3>Forms</h3>
     <form class="ui form">
      <div class="field">
        <label for="email">Email: </label>
        <input type="email" id="email" placeholder="enter your email" />
     </div>
     <div class="field">
       <label for="password">Password: </label>
       <input type="password" id="password" placeholder="enter your password" />
     </div>
     <div class="field">
       <label for="userType">User Type: </label>
       <select name="user_type" value="">
         <option disabled value="">Choose user type</option>
         <option value="admin">Admin</option>
         <option value="user">User</option>
       </select>
     </div>
     <button class="ui primary button">Submit</button>
     <br>
     <!-- USING HTML 5 -->
     <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About us</a></li>
      </ul>
     </nav>
     <!-- Using roles -->
     <ul role="navigation">
       <li><a href="/">Home</a></li>
       <li><a href="/">About us</a></li>
     </ul>
    <div class="checkbox-wrapper">
      <h2>Custom checkboxes</h2>
      <div class="checkbox" tabindex="0" role="checkbox" aria-checked="true" checked aria-labelledby="fruit">
        <span id="fruit">Fruit</span>
      </div>
    </div>
    <br/>
    <div class="error" tabindex="0" role="alert">Cannot connect to internet</div>
   </form>
   <br/>
   <hr>
   <to-do-list></to-do-list>
   <br/>
   <br/>
   <div id="currentValue">Current value {{ value }}</div>
   <div class="calc" aria-describedby="help" tabindex="0" aria-labelledby="currentValue" >
     <span aria-live="assertive">{{value}}</span>
     <button tabindex="-1" title="increment by 1" aria-controls="number" @click="increment">Increment</button>
     <button tabindex="-1" title="decrement by 1" aria-controls="number" @click="decrement">Decrement</button>
   </div>
   <div id="help">
     Use increment and decrement button to increment/decrement a number
   </div>
   </main>
  </div>
</template>

<script>
import toDoList from '../components/todoList.vue'
export default {
  name: 'Page3',
  data () {
    return {
      switch: false,
      value: 0
    }
  },
  computed: {
    swithState () {
      return this.switch ? 'checkbox-on' : 'checkbox-off'
    }
  },
  watch: {
    switch (val) {
      this.checkedButtonOnEnter(val)
    }
  },
  components: {
    toDoList
  },
  methods: {
    btnClicked () {
      alert('Button clicked')
      this.pressed = true
    },
    checkedButtonOnClick () {
      this.switch = !this.switch
    },
    checkedButtonOnEnter (val) {
      this.switch = !val
    },
    increment () {
      this.value++
    },
    decrement () {
      this.value--
    }
  }
}
</script>

<style lang="scss">
.my-button {
  background-color: red;
  padding: 10px;
  color: white;
  max-width: 200px;
  margin: 0 auto;
  cursor: pointer;
}

[role='switch'][aria-checked='true'] :first-child,
[role='switch'][aria-checked='false'] :last-child {
  background-color: yellow;
  padding: 3px;
}
.checkbox-on {
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
.ui.form {
  max-width: 500px;
  margin: 0 auto;
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

.checkbox[checked]::after {
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
.error {
  padding: 10px;
  background-color: red;
  color: white;
  border-radius: 3px;
}
</style>
