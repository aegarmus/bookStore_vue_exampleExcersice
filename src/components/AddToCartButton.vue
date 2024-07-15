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
    background-color: var(--primary-color500);
    color: var(--neutral-color-light500);

    font: var(--secondary-font);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);

    padding: .5rem 1rem;
    border: none;
    font-size: 1rem;

    cursor: pointer;
}
</style>