<template>
  <div class="ui container">
   <h2> Accessible custom components </h2>
    <div tabindex="0" role="my-button" class="my-button" @click="btnClicked" aria-label="custom button">
      <span aria-hidden="true">Accessible button</span>
      <span class="visually-hidden">play</span>
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
   </form>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {
      switch: false
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
</style>
