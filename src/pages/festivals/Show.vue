<template>
  <b-col>
    <h2>Show Festival Page</h2>
    <p>
        {{ festival.title }}
    </p>
    <p>
        {{ festival.description }}
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FestivalShow",
  components: {},
    data(){
        return{
            festival: {}
        };
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            axios
                .get(`https://festivals-api.herokuapp.com/api/festivals/${this.$route.params.id}`)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
        }
    }
};
</script>