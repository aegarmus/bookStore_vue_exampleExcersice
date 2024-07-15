  <script>
  import { mapGetters, mapActions } from 'vuex';
  import EditBookForm from '../components/EditBookForm.vue';
  
  export default {
    components: {
      EditBookForm
    },
    data() {
      return {
        book: null
      };
    },
    computed: {
      ...mapGetters('products', ['getProductById'])
    },
    methods: {
      ...mapActions('products', ['editProduct']),
      updateBook(book) {
        this.editProduct(book).then(() => {
          this.$router.push('/products');
        });
      }
    },
    mounted() {
      const bookId = parseInt(this.$route.params.id);
      this.book = { ...this.getProductById(bookId) };
    }
  };
  </script>

<template>
    <div>
      <h1>Edit Book</h1>
      <EditBookForm :book="book" @submit="updateBook" />
    </div>
  </template>
  
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  