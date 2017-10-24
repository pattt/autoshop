<template>
    <div id="auto">

        <b-table class="table table-striped table-hover" :items="autolist" :fields="fields">
            <template slot="details" scope="data">
                <router-link :to="{ name: 'autodetails', params: {id: data.item.id} }" class="nav-item nav-link">Auto</router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'auto',
        data() {
            return {
                fields: [
                    {key: 'model', sortable: true},
                    'brands',
                    'year',
                    'engine',
                    'color',
                    'kpp',
                    'speed',
                    'price',
                    'details']
            }
        },
        computed: {
            autolist() {
                return this.$store.getters.autolist
            }
        },
        mounted() {
            if(this.autolist.length === 0) {
                this.$store.dispatch('autolist');
            }
        }
    }
</script>

<style>
    #auto {
        color: orange;
    }
</style>
