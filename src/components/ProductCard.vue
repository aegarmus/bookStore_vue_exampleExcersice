<script>
import AddToCartButton from './AddToCartButton.vue'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        AddToCartButton
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product)
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card__header">
            <h2>{{ product.nombre }}</h2>
        </div>
        <div class="card__body">
            <p>{{ product.descripcion }}</p>
            <div>
                <p>precio {{ product.precio }}</p>
                <p>Stock Disponible: {{ product.stock }} </p>
            </div>
        </div>
        <AddToCartButton @add-to-cart="addToCart" :product="product"/>
    </div>

</template>

<style scoped>
.card {
    width: 15rem;

    border-radius: 25px;
    box-shadow: 0 0 20px #454545;

    padding: 1.5rem
}
</style>