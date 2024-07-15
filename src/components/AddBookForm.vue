  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        nombre: '',
        genero: '',
        descripcion: '',
        stock: 0,
        precio: 0,
        img: ''
      };
    },
    methods: {
      ...mapActions('products', ['addProduct']),
      submitForm() {
        const newBook = {
          id: Date.now(),
          nombre: this.nombre,
          genero: this.genero,
          descripcion: this.descripcion,
          stock: this.stock,
          precio: this.precio,
          img: this.img
        };
        this.addProduct(newBook);
        this.$router.push('/admin');
      }
    }
  };
  </script>
<!-- src/views/AddBookView.vue -->
<template>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="nombre" required />
        </div>
        <div class="form-group">
          <label for="genero">Género:</label>
          <input type="text" v-model="genero" required />
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <textarea v-model="descripcion" required></textarea>
        </div>
        <div class="form-group">
          <label for="stock">Stock:</label>
          <input type="number" v-model="stock" required />
        </div>
        <div class="form-group">
          <label for="precio">Precio:</label>
          <input type="number" v-model="precio" required />
        </div>
        <div class="form-group">
          <label for="img">URL de la Imagen:</label>
          <input type="text" v-model="img" required />
        </div>
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: var(--neutral-color-light200);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: var(--primary-color500);
    color: var(--neutral-color-light200);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: var(--primary-color700);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .form-container {
      padding: 1rem;
      margin: 1rem;
    }
  
    input, textarea {
      padding: 0.5rem;
    }
  
    button {
      padding: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .form-container {
      padding: 0.5rem;
      margin: 0.5rem;
    }
  
    input, textarea {
      padding: 0.5rem;
    }
  
    button {
      padding: 0.5rem;
    }
  }
  </style>
  