<template>
    <form v-if="!isLoggedIn">
        <div class="form-group">
            <label for="formlogin">Email address</label>
            <input v-model="name" type="text" class="form-control" id="formlogin" aria-describedby="loginDesc" placeholder="Enter login">
            <small id="loginDesc" class="form-text text-muted">Your login can be email</small>
        </div>
        <div class="form-group">
            <label for="formPassword">Password</label>
            <input v-model="password" type="password" class="form-control" id="formPassword" placeholder="Password">
        </div>
        <button @click.prevent="singin" type="submit" class="btn btn-primary">Log-In</button>
    </form>
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
                name: "",
                password: "",
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
                        this.$store.dispatch('history', token);
                    }
                    else {
                        obj.commit('set', {
                            type: 'mainMsg',
                            items: {
                                type: 'error',
                                text: 'Cant get token'
                            }
                        })
                    }
                })
                .catch(err => err);
            },
            getToken() {
                return sessionStorage.getItem('token');
            },
            logOut() {
                sessionStorage.removeItem('token');
                this.isLoggedIn = !!this.getToken();

                this.$store.commit('logout')
            }
        }
    }
</script>

<style>
    #login {
        color: green;
    }
</style>
