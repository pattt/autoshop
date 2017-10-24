<template>
    <b-container fluid id="app">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link to="/history" class="nav-item nav-link">History</router-link>
                <router-link to="/auto" class="nav-item nav-link">Auto</router-link>
            </nav>
        </header>

        <alert></alert>

        <b-row>
            <b-col>
                <aside>
                    <login></login>
                </aside>
            </b-col>
            <b-col sm="9">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import History from "./components/History";
import Login from './components/Login';
import Alert from './components/Alert';

export default {
    name: 'app',
    components: {
        history: History,
        login: Login,
        alert: Alert
    },
    created() {
        let token = sessionStorage.getItem('token');
        if (token) {
            this.$store.dispatch('history', token);
            this.$store.commit('set', {type: 'isLoggedIn',items: true})
        }
    }
}
</script>

<style lang="scss" scoped>
    #app {
        header {
            margin-bottom: 10px;
            nav {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }
    }
</style>
