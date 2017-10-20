<template>
    <b-container fluid id="app">
        <alert></alert>

        <b-row>
            <b-col>
                <login></login>
            </b-col>
            <b-col sm="9">
                <history></history>
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
