<script>
import { mapGetters, mapActions } from 'vuex'

import TableBooksAdmin from '../components/TableBooksAdmin.vue'
import ActionButton from '../components/ActionButton.vue'

export default {
    components: {
        TableBooksAdmin,
        ActionButton
    },
    computed: {
        ...mapGetters('products', ['allProducts'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts', 'deleteProduct']),

        editProductRedirect(book) {
            this.$router.push(`/admin/books/${book.id}`);
        },
        redirectToAddBook() {
            this.$router.push('/admin/books/add');
        }
    },
    async mounted() {
        this.allProducts
    }
}
</script>

<template>
    <h1 class="m-5">Panel de Administrador</h1>
    <main class="container mt-5">
        <TableBooksAdmin :books="allProducts" @edit-book="editProductRedirect" @delete-book="deleteProduct" />

    </main>
    <ActionButton 
      label='<i class="fa-solid fa-plus"></i>' 
      buttonClass="add-book-btn" 
      @handle-click="redirectToAddBook" 
    />
</template>

<style>

</style>