<script>
import { mapGetters, mapActions } from 'vuex';
import { formatPrice } from '@/utils/formatPrice';

export default {
  computed: {
    ...mapGetters('cart', ['cartProducts', 'cartTotal'])
  },
  methods: {
    ...mapActions('cart', ['removeFromCart', 'incrementQuantity', 'decrementQuantity']),
    formatPrice
  }
}
</script>
<template>
    <div class="cart">
      <div v-if="cartProducts.length === 0" class="empty-cart">
        Aún no tienes productos en tu Carrito :c
      </div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.nombre }}</td>
              <td>
                <button @click="decrementQuantity(product)">-</button>
                {{ product.cantidad }}
                <button @click="incrementQuantity(product)">+</button>
              </td>
              <td>{{ formatPrice(product.precio * product.cantidad) }}</td>
              <td><button @click="removeFromCart(product)">Eliminar</button></td>
            </tr>
          </tbody>
        </table>
        <div class="cart-total">
          <p>Total: <span>{{ formatPrice(cartTotal) }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

}

.empty-cart {
  font-size: 1.2rem;
  color: var(--primary-color500);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

}

thead {
  background-color: var(--primary-color500);
  color: var(--neutral-color-light200);
}

th, td {
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--neutral-color-dark500);
}

button {
  padding: 0.5rem;

  background-color: var(--secondary-color500);
  color: var(--neutral-color-light200);

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 3s;
}

button:hover {
  background-color: var(--secondary-color700);
}

.cart-total {
  font-size: 1.5rem;
  font-weight: bold;
}

.cart-total span {
  color: var(--primary-color500);
}

@media (max-width: 768px) {
  .cart {
    padding: 1rem;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.5rem;
  }

  button {
    padding: 0.5rem;
  }

  .cart-total {
    font-size: 1.2rem;
  }
}
</style>