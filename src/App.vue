<template>
    <b-container fluid id="app">
        <header>
            <nav>
                <router-link to="/history">History</router-link>
                <router-link to="/shop">Shop</router-link>
            </nav>
        </header>

        <alert></alert>

        <b-row>
            <b-col>
                <login></login>
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
            this.$store.dispatch('history', sessionStorage.getItem('token'));
        }
    }
}
</script>

<style>
    #app {
        color: blue;
    }
</style>
