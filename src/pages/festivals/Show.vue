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
            festivals: {}
        };
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            axios
                .get("https://festivals-api.herokuapp.com/api/festivals/60205e996e2181ac4f9eadcd",
                {
                    headers: {
                        "Authorization": "Bearer"
                    }
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
        }
    }
};
</script>