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
        isLoggedIn: false,
        autolist: [],
        autodetails: null
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
        },
        autolist(state) {
            return state.autolist
        },
        autodetails(state) {
            return state.autodetails
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
                commit('set', {type: 'history', items: res})
            } catch (e) {
                error(this, 'Cant show history')
            }
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
            commit('set', {type: 'autolist',items: []})
            commit('set', {type: 'autodetails',items: []})
            commit('set', {type: 'isLoggedIn',items: false})
            sessionStorage.removeItem('token');
        },
        async autolist({commit}) {
            try {
                let {data: {data: res}} = await axios.get('http://localhost:8008/api/auto')
                console.log(res);
                commit('set', {type: 'autolist', items: res})
            } catch (e) {
                error(this, 'Cant load auto')
            }
        },
        async autodetails({ commit }, id) {
            try {
                //let {data: {data: res = []}} = await axios.get('http://localhost:8008/api/auto/' + id)
                let res = {qwe: 'qwe'}
                commit('set', {type: 'autodetails', items: res})
            } catch (e) {
                error(this, 'Cant show history')
            }
        }
    }
})

function error(obj, text="unknown error") {
    obj.commit('set', {
        type: 'mainMsg',
        items: {
            type: 'error',
            text
        }
    })
}

export default store;
