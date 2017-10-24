<template>
    <div id="autodetails">
{{autodetails}}
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'autodetails',
        computed: {
            autodetails() {
                return this.$store.getters.autodetails
            }
        },
        mounted() {
                this.$store.dispatch('autodetails', this.$route.params.id);
        }

    }
</script>

<style>
    #autodetails {
        color: orange;
    }
</style>
