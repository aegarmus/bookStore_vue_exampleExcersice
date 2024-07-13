<script>
import AddToCartButton from './AddToCartButton.vue'

import { formatPrice } from '@/utils/formatPrice';

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
        },
        formatPrice
    }
}
</script>

<template>
    <div class="card">
        <div class="card__header">
            <div class="card__img">
                <img :src="product.img" :alt="product.nombre">
            </div>
            <h2>{{ product.nombre }}</h2>
        </div>
        <div class="card__body">
            <p>{{ product.descripcion }}</p>
            <div>
                <p>precio: {{ formatPrice(product.precio) }}</p>
                <p>Stock Disponible: {{ product.stock }} </p>
            </div>
        </div>
        <div>
            <AddToCartButton @add-to-cart="addToCart" :product="product"/>

        </div>
    </div>

</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 15rem;
    height: 35rem;

    border-radius: 25px;
    box-shadow: 0 0 20px #454545;

    padding: 2rem;

    background-color: var(--neutral-color-light500);
}

.card__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.card__img {
    width: 80%;
    height: 40%;
}

.card__img img {
    width: 10rem;
    height: 15rem;

    box-shadow: 0px 0px 15px var(--neutral-color-dark500);

    border-radius: 10px;
}
</style>