<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        buttonClass:{
            type: String,
            required: true
        }
    },
    methods: {
        onClick(){ 
            this.$emit('handle-click')
        }
    }
}
</script>

<template>
    <button :class="buttonClass" @click:="onClick">{{ label }}</button>
</template>


<style>

</style>