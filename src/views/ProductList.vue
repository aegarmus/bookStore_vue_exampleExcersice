<script>
import { mapGetters, mapActions } from 'vuex'

import ProductCard from '../components/ProductCard.vue'

export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters('products',['allProducts'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapActions('cart', ['addProductToCart'])
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>

<template>
<h1>Productos disponibles</h1>
<div>
    <router-link to="/cart">Ver Carrito</router-link>
</div>

<div class="contenedor">
    <div v-for="product in allProducts" :key="product.id">
        <ProductCard :product="product" @add-to-cart="addProductToCart" />
    </div>
</div>

</template>

<style>
.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    width: 75%;
    margin: 3rem auto;
}
</style>