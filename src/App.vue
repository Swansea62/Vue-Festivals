<template>
  <div>
    <MyNavBar :loggedIn="loggedIn" v-on:logout="setLoggedOut" />
    <b-container>
      <br />
      <b-row>
        <router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" />
      </b-row>
      <MyFooter />
    </b-container>
  </div>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue"
import MyFooter from "@/components/MyFooter.vue"

export default {
  name: "App",
  components: {
    MyNavBar,
    MyFooter
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.loggedIn = true
    }
    else {
      this.loggedIn = false
    }
  },
  methods:{
    setLoggedIn(token){
      this.loggedIn = true
      localStorage.setItem('token', token)

    },
    setLoggedOut(){
      this.loggedIn= false
      localStorage.removeItem('token')
    }
  }
};
</script>

<style>

</style>
