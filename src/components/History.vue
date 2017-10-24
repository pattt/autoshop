<template>
    <div id="history" v-if="history.length">
            <b-table class="table table-striped table-hover" :items="history" :fields="fields">
                <template slot="date" scope="data">
                    {{data.item.date | date}}
                </template>
            </b-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'history',
        data() {
            return {
                fields: [{key: 'user', sortable: true}, 'auto', 'date']
            }
        },
        computed: {
            history() {
                return this.$store.getters.history
            }
        }
    }
</script>

<style lang="scss">
    #history {
        border-radius: 10px;
        border: 2px solid darkgray;
        .table thead th {
            &:first-child {
                border-top: none;
            }
            &:last-child {
                border-top: none;
            }
        }
    }
</style>
