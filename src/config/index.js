import axios from 'axios'

export default axios.create({
    baseURL: "https://festivals-api.herokuapp.com/api"
}) 