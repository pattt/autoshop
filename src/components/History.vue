<template>
    <div id="history">
        history {{ msg }}
    </div>
</template>

<script>
    export default {
        name: 'history',
        data() {
            return {
                msg: "hhhhh"
            }
        }
    }
</script>

<style>
    #history {
        color: red;
    }
</style>
