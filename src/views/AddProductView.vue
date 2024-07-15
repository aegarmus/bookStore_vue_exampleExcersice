<script>
import AddBookForm from '@/components/AddBookForm.vue';

export default {
  components: {
    AddBookForm
  }
};
</script>

<template>
        <h1>Agregar un Libro</h1>
        <main class="container">
            <AddBookForm />

        </main>
    
  </template>
  
  <style scoped>
    h1 {
        text-align: center;
    }
  </style>