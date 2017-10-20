import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        history: [],
        mainMsg: {
            type: '',
            text: 'msg text'
        },
        isLoggedIn: false
    },
    getters: {
        history(state) {
            return state.history;
        },
        mainMsg(state) {
            return state.mainMsg;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        set(state, {type, items}) {
            state[type] = items
        }
    },
    actions: {
        async history({ commit }, token) {
            let {data:{data:res=[]}} = await axios.get('http://localhost:8008/api/history', {headers: {'token': token}})
            commit('set', {type: 'history', items: res})
        },
        login({ commit, dispatch }, token) {
            sessionStorage.setItem('token', token);
            commit('set', {type: 'isLoggedIn', items: true})
            dispatch('history', token);

        },
        logout({ commit }) {
            commit('set', {type: 'history',items: []})
            commit('set', {type: 'isLoggedIn',items: false})
            sessionStorage.removeItem('token');

        }
    }
})

function error(obj) {
    obj.commit('set', {
        type: 'mainMsg',
        items: {
            type: 'error',
            text: 'Cant show history'
        }
    })
}

export default store;
