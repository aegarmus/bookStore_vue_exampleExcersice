<script>
import ActionButton from './ActionButton.vue';

import { formatPrice } from '@/utils/formatPrice';

export default {
    components: {
        ActionButton
    },
    props: {
        books: {
            type: Array,
            required:true
        }
    },
    data() {
        return {
            editLabelButton: '<i class="fa-solid fa-pen-to-square"></i>',
            editClassButton: 'edit-btn',
            deleteLabelButton: '<i class="fa-solid fa-trash"></i>',
            deleteClassButton: 'delete-btn'
            
        }
    },
    methods: {
        editBook(book) {
            this.$emit('edit-book', book);
        },
        deleteBook(book) {
            this.$emit('delete-book', book.id);
        },
        formatPrice
    }
}
</script>

<template>
    <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Portada</th>
          <th scope="col">Nombre</th>
          <th scope="col">Genero</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td><img :src="book.img" :alt="book.nombre" class="img-thumbnail" /></td>
          <td>{{ book.nombre }}</td>
          <td>{{ book.genero }}</td>
          <td>{{ book.stock }}</td>
          <td>{{ formatPrice(book.precio) }}</td>
          <td>
              <ActionButton 
                  :label="editLabelButton" 
                  :buttonClass="editClassButton" 
                  @handle-click="()=>editBook(book)" 
              />
              
              <ActionButton 
                  :label="deleteLabelButton" 
                  :buttonClass="deleteClassButton" 
                  @handle-click="() => deleteBook(book)" 
              />
          </td>
          
        </tr>
      </tbody>
    </table>
    </div>
</template>

<style scoped>
img {
    width: 3rem;
    height: 5rem;
}

table {
    border-radius: 50px;
}
</style>