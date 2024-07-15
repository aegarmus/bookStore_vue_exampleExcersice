<script>
import AddToCartButton from './AddToCartButton.vue'

import { formatPrice } from '@/utils/formatPrice';

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        AddToCartButton
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product)
        },
        formatPrice
    }
}
</script>

<template>
    <div class="card">
        <div class="card__header">
            <div class="card__img">
                <img :src="product.img" :alt="product.nombre">
            </div>
            <h2>{{ product.nombre }}</h2>
        </div>
        <div class="card__body">
            <p>{{ product.descripcion }}</p>
            <div>
                <p><span>precio: </span>{{ formatPrice(product.precio) }}</p>
                <p><span>Stock Disponible: </span>{{ product.stock }} </p>
            </div>
        </div>
        <div>
            <AddToCartButton @add-to-cart="addToCart" :product="product"/>

        </div>
    </div>

</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 20rem;
  height: auto;

  border-radius: 15px;
  box-shadow: 0 0 10px var(--neutral-color-dark500);

  padding: 1rem;

  background-color: var(--neutral-color-light500);

  transition: .3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px var(--primary-color500);
}

.card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.card__img img {
  width: 100%;
  height: 26rem;
  border-radius: 10px;
}

.card__body {
  flex: 1;
}

span {
    font-weight: var(--font-weight-bold);
}

.card__footer {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }
}
</style>