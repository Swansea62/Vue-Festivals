<template>
  <b-col>
    <h2>Welcome to the Festivals Page</h2>
    <p
        v-for="festival in festivals"
        :key="festival._id"
    >
    {{ festival.title }}
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FestivalsIndex",
  components: {},
    data(){
        return{
            festivals: []
        };
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            axios
                .get("https://festivals-api.herokuapp.com/api/festivals")
                .then(response => {
                    console.log(response.data)
                    this.festival = response.data
                })
                .catch(error => console.log(error))
        }
    }
};
</script>