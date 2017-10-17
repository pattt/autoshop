<template>
    <b-container  id="app" class="bv-example-row">
        <b-row>
            <b-col>
                <login></login>
            </b-col>
            <b-col sm="10">
                <history></history>
            </b-col>
        </b-row>
    </b-container>
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
