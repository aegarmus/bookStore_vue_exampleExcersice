<script>
import { mapGetters, mapActions } from 'vuex'

import ProductCard from '../components/ProductCard.vue'
import BookFilter from '../components/BookFilter.vue'

export default {
    components: {
        ProductCard,
        BookFilter
    },
    data() {
        return {

            filteredBooks: []

        }
    },
    computed: {
        ...mapGetters('products',['allProducts', 'bookGenres'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapActions('cart', ['addProductToCart']),
        filterBooks(filters) {
            this.filteredBooks = this.allProducts.filter(book => {
                return (
                    (!filters.name || book.nombre.toLowerCase().includes(filters.name.toLowerCase()))
                    &&
                    (!filters.genre || book.genero === filters.genre)
                )
            })
        }
    },
    mounted() {
        this.fetchProducts()
        this.filteredBooks = this.allProducts
    }
}
</script>

<template>
<h1>Productos disponibles</h1>
<div>
    <router-link to="/cart">Ver Carrito</router-link>
</div>

<main>
    <BookFilter :genres="bookGenres" @filter-books="filterBooks" class="book-filter"/>
    
    <div v-if="filteredBooks.length > 0">
        <div class="contenedor">
            <div v-for="product in filteredBooks" :key="product.id">
                <ProductCard :product="product" @add-to-cart="addProductToCart" />
            </div>
        </div>
    </div>
    <div v-else>
        <h2>No pudimos Encontrar los Libros</h2>
    </div>
</main>


</template>

<style>
main {
    width: 70%;
    margin: 0 auto;
    padding: 2rem 0
}

.book-filter {
    margin: 0 auto;
    padding: 2rem 0;

}

.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

}
</style>