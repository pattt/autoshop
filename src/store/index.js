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
            try {
                let {data: {data: res = []}} = await axios.get('http://localhost:8008/api/history', {headers: {'token': token}})
            } catch (e) {
                error(this, 'Cant show history')
            }
            commit('set', {type: 'history', items: res})
        },
        async login({ commit, dispatch }, token) {

            if(_.isObject(token)) {
                try {
                    let response = await axios.post('http://localhost:8008/api/auth', token)
                    token = _.get(response, 'data.data.token')
                } catch (e) {
                    error(this, 'Cant get token')
                }
            }

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

function error(obj, text) {
    obj.commit('set', {
        type: 'mainMsg',
        items: {
            type: 'error',
            text
        }
    })
}

export default store;
