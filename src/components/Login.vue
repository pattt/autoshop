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
                password: ""
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            }
        },
        methods: {
            async singin() {
                let {data:{data:{token}}} = await axios.post('http://localhost:8008/api/auth', {login: this.name, password: this.password})

                if(token) {
                    this.$store.dispatch('login', token);
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
            },
            logOut() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style>
    #login {
        color: green;
    }
</style>
