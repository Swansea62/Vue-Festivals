<template>
  <b-col>
    <h2>Log in to the Cloud Festivals Website</h2>

    Email: <input type="email" v-model="form.email"/>
    <br><br>
    Password: <input type="password" v-model="form.password"/>
    <br><br>
    <button @click="login()">Log In</button>
  </b-col>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data(){
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods:{
    login(){
      axios
        .post('https://festivals-api.herokuapp.com/api/users/login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
};
</script>
