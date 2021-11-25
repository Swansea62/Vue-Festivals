<template>
  <b-col>
    <h2>Log in to the Cloud Festivals Website</h2>
    <div v-if="!loggedIn">
      Email: <input type="email" v-model="form.email"/>
      <br><br>
      Password: <input type="password" v-model="form.password"/>
      <br><br>
      <button @click="login()">Log In</button>
    </div>
    <p v-else>
      You are logged in!
    </p>
  </b-col>
</template>

<script>
import axios from '@/config';

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  props:{
    loggedIn: Boolean
  },
  data(){
    return {
      form: {
        email: "admin@festivals.ie",
        password: "secret"
      }
    }
  },
  methods:{
    login(){
      axios
        .post('/users/login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          //console.log(response.data.token)
          this.$emit('login', response.data.token)
          })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
};
</script>
