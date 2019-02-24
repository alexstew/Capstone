import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: '',
       sidebarColor: 'blue',
       sidebarImg: 'sidebar-2.jpg'
    },
    getters: {

    },
    mutations: {
        setUser: (state, value) => {
            state.user = value;
        },
        setColor: (state, value) => {
            state.sidebarColor = value;
        },
        setImg: (state, value) => {
            state.sidebarImg = value;
        }
    },
    actions: {

    }
});