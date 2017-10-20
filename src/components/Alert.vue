<template>
    <div id="alert">
        <div class="alert alert-danger" role="alert" v-bind:class="{ hidden: !msg.showAlert, visible: msg.showAlert }">
            <icon class="icon" title="fail" size=70 />
            <span>{{ msg.text }}</span>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-material-design-icons/alert-octagon.vue'
    export default {
        name: 'alert',
        components: {
            Icon
        },
        computed: {
            msg() {
                return {
                    text: this.$store.getters.mainMsg.text,
                    showAlert: this.$store.getters.mainMsg.type
                }
            }
        },
        watch: {
            msg(newVal, oldVal) {
                if(newVal.showAlert)
                    setTimeout(() => {
                        this.$store.commit('set', {
                            type: 'mainMsg',
                            items: {
                                type: '',
                                text: newVal.text
                            }
                        })
                    }, 5000)
            }
        }
    }
</script>

<style>
    .visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 2s linear;
    }

    .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 2s, opacity 2s linear;
    }

    .icon {
        fill: orange;
    }

</style>
