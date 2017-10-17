<template>
    <div id="app">
        app_component!!!
        {{msg}} app
        <login></login>
        <history></history>
    </div>
</template>

<script>
import History from "./components/History";
import Login from './components/Login';

export default {
    name: 'app',
    components: {
        history: History,
        login: Login
    },
    data() {
        return {
            msg: "sometext"
        }
    }
}
</script>

<style>
    #app {
        color: blue;
    }
</style>
