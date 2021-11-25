import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        loggedIn: false
    },
    getters:{
    },
    mutations:{
        SET_LOGGED_IN_STATUS(state, loggedIn){
            state.loggedIn = loggedIn
        }
    },
    actions:{
        login(context, credentials){
            axios
                .post('/users/login', {
                email: credentials.email,
                password: credentials.password
                })
                .then(response => {

                    context.commit('SET_LOGGED_IN_STATUS', true)


                    localStorage.setItem('token', response.data.token)
                })
                .catch(error=>{
                console.log(error)
                console.log(error.response)
            })
        },

        logout(context){
            localStorage.removeItem('token')
            context.commit('SET_LOGGED_IN_STATUS', false)
        }
    }

})
