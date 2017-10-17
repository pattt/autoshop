<template>
    <div v-if="!isLoggedIn" id="login">
        <input type="text" v-model="name"/> <br />
        <input type="text" v-model="password"/> <br />
        <button @click="singin">Send</button>
    </div>
    <div v-else>
        logged in <a href="javascript: void(0)" @click="logOut">Log Out</a>
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
                password: "pass",
                isLoggedIn: !!this.getToken()
            }
        },
        methods: {
            singin() {
                axios.post('http://localhost:8008/api/auth', {login: this.name, password: this.password})
                .then(response => {
                    const token = _.get(response, 'data.data.token');

                    if(token) {
                        sessionStorage.setItem('token', token);
                        console.log(`token is set ${token}`);
                        this.isLoggedIn = true;
                    }
                    else {

                    }
                })
                .catch(err => err);
            },
            getToken() {
                return sessionStorage.getItem('token');
            },
            logOut() {
                sessionStorage.removeItem('token');
                console.log('token is cleared');
                this.isLoggedIn = !!this.getToken();

                console.log(this.isLoggedIn);
            }
        }
    }
</script>

<style>
    #login {
        color: green;
    }
</style>
