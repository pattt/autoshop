<template>
    <div>
        <ul id="history" v-if="history.length">
            <b-table bordered :items="history" :fields="fields"></b-table>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'history',
        data() {
            return {
                fields: ['auto', 'user', 'date']
            }
        },
        computed: {
            history() {
                return this.$store.getters.history
            }
        }
    }
</script>

<style>
    #history {
        color: red;
    }
</style>
