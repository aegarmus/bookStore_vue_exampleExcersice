  <script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
    ...mapGetters('cart', ['cartCount'])
    },
    methods: {
      redirectToCart() {
        this.$router.push('/cart');
      }
    }
  };
  </script>

<template>
    <button @click="redirectToCart" class="shopping-cart-button">
      <i class="fa-solid fa-cart-shopping"></i>
      <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
    </button>
  </template>
  
  
  <style scoped>
  .shopping-cart-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: inherit;

    transition: .5s;
  }
  
  .shopping-cart-button:hover {
    transform: scale(1.1);
    text-shadow: 0px 0px 10px var(--neutral-color-light200);
  }

  .cart-count {
    position: relative;
    top: -45px;
    right: -15px;

    background-color: var(--secondary-color500);
    color: var(--neutral-color-light200);
    
    border-radius: 50%;
    
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center
}
  </style>
  