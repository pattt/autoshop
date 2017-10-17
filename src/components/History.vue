<template>
    <ul id="history">
        <b-table bordered :items="historyList" :fields="fields"></b-table>
    </ul>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'history',
        data() {
            let historyList = 'qweqe';
            axios.get('http://localhost:8008/api/history', {headers: {'token': sessionStorage.getItem('token')}})
                .then(response => {
                    this.historyList = response.data.data;
                    console.log(response.data.data);
                })
                .catch(err => err);

            return {
                fields: [ 'auto', 'user', 'date' ],
                historyList: historyList
            }
        }
    }
</script>

<style>
    #history {
        color: red;
    }
</style>
