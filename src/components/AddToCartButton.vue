<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product)
        }
    }
}
</script>

<template>
    <button @click="addToCart">Añadir al Carrito</button>
</template>

<style scoped>
button {
    border-radius: 15px;
    background-color: #549a56;
    color: #eee;

    padding: .5rem 1rem;
    border: none;
    font-size: 1rem;

    cursor: pointer;
}
</style>