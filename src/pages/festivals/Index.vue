<template>
  <b-col>
    <h2>Welcome to the Festivals Page</h2>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FestivalsIndex",
  components: {
      data(){
          return{

          }
      },
      mounted(){
          this.getData()
      },
      methods: {
          getData(){
              axios
                .get("https://festivals-api.herokuapp.com/api/festivals")
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
          }
      }
  }
};
</script>