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
        editProductRedirect(bookID) {
            this.$router.push(`/admin/books/${bookID}`)
        }
    },
    async mounted() {
        await this.fetchProducts()
    }
}
</script>

<template>
    <h1>Panel de Administrador</h1>
    <TableBooksAdmin :books="allProducts" @edit-book="editProductRedirect" @delete-book="deleteProduct" />
    <ActionButton />
</template>

<style>

</style>