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
<main>
    <BookFilter :genres="bookGenres" @filter-books="filterBooks" class="book-filter"/>
    
    <div v-if="filteredBooks.length > 0">
        <div class="contenedor">
            <div v-for="product in filteredBooks" :key="product.id"  class="fade-in-up">
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
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 1s ease-in-out forwards;
}

h1 {
    margin-top: 4rem;
}

main {
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0 20rem 0;
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

@media (max-width: 768px) {
  main {
    width: 90%;
    padding: 1rem 0;
  }

  .contenedor {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>