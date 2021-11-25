<template>
  <b-col>
    <h2>Festivals</h2>
    <b-button 
    :to="{
        name: 'festivals_create'
        }">
    Add
    </b-button>

    <b-table responsive head-varient="dark" striped hover :items="festivals" :fields="headings">
        <template #cell(title)="data">
            <p>{{ data.value }}</p>
            <router-link :to="{name:'festivals_show', params: { id: data.item._id}}">{{ data.value }}</router-link>
        </template>
        <template #cell(start_date)="data">
            <p>{{ new Date(data.value).toLocaleString() }}</p>
        </template>
        <template #cell(end_date)="data">
            <p>{{ new Date(data.value).toLocaleString() }}</p>
        </template>
    </b-table>

    <p
        v-for="festival in festivals"
        :key="festival._id"
    >
    <router-link :to="{name:'festivals_show', params: { id: festival._id}}">{{ festival.title }}</router-link>
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
            headings: [
                {
                    key: 'title',
                    sortable: true
                }, 
                'description', 
                {
                    key: 'city',
                    sortable: true
                }, 
                'start_date', 
                'end_date'
                ],
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
                    this.festivals = response.data
                })
                .catch(error => console.log(error))
        }
    }
};
</script>

<style>
    .btn{
        margin-bottom:10px;
    }
</style>