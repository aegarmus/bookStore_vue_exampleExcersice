<template>
    <div class="edit-book-form">
      <h2>Edit Book</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input id="nombre" v-model="localBook.nombre" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="genero">Genero:</label>
          <input id="genero" v-model="localBook.genero" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <textarea id="descripcion" v-model="localBook.descripcion" class="form-control" required></textarea>
        </div>
        <div class="form-group">
          <label for="precio">Precio:</label>
          <input id="precio" type="number" v-model="localBook.precio" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="stock">Stock:</label>
          <input id="stock" type="number" v-model="localBook.stock" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="img">Imagen URL:</label>
          <input id="img" v-model="localBook.img" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        default: () => ({
          nombre: '',
          genero: '',
          descripcion: '',
          precio: 0,
          stock: 0,
          img: ''
        })
      }
    },
    data() {
      return {
        localBook: { ...this.book }
      };
    },
    watch: {
      book: {
        handler(newBook) {
          this.localBook = { ...newBook };
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      submitForm() {
        this.$emit('submit', this.localBook);
      }
    }
  };
  </script>
  
  <style scoped>
  .edit-book-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
  }
  .edit-book-form h2 {
    margin-bottom: 20px;
  }
  .edit-book-form .form-group {
    margin-bottom: 15px;
  }
  .edit-book-form .btn {
    width: 100%;
  }
  </style>