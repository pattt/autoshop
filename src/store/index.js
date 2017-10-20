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
        }
    },
    getters: {
        history(state) {
            return state.history;
        },
        mainMsg(state) {
            return state.mainMsg;
        }
    },
    mutations: {
        set(state, {type, items}) {
            state[type] = items
        },
        logout(state) {
            state.history = [];
        }
    },
    actions: {
        history({ commit }, token) {
            axios.get('http://localhost:8008/api/history', {headers: {'token': token}})
                .then(response => {
                    let results = response.data.data;
                    if(!results) {
                        error(this)
                        return
                    }
                    commit('set', {type: 'history', items: results})
                })
                .catch(err => error(this));
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
