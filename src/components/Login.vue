<template>
    <div id="login">
        <input type="text" v-model="name"/> <br />
        <input type="text" v-model="password"/> <br />
        <button @click="singin">Send</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';
    export default {
        name: 'login',
        data() {
            return {
                name: "name",
                password: "pass"
            }
        },
        methods: {
            singin() {
                axios.post('http://localhost:8008/api/auth', {login: this.name, password: this.password})
                .then(function (response) {
                    const token = _.get(response, 'data.data.token');

                    if(token) {
                        sessionStorage.setItem('token', token);
                        console.log(`tocken is set ${token}`)
                    }
                });
            }
        }
    }
</script>

<style>
    #login {
        color: green;
    }
</style>
