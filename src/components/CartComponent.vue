<script>
import { mapGetters, mapActions } from 'vuex';

import { formatPrice } from '@/utils/formatPrice';

export default {
    computed: {
        ...mapGetters('cart', ['cartProducts', 'cartTotal'])
    },
    methods: {
        ...mapActions('cart', ['removeFromCart']),
        formatPrice
    }
}
</script>

<template>
    <div class="cart">
        <div v-if="cartProducts.length === 0">
            Aun no tienes productos en tu Carrito :c
        </div>
        <div v-else>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cartProducts" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.nombre }}</td>
                        <td>{{ product.stock }}</td>
                        <td>{{ formatPrice(product.precio) }}</td>
                        <td><button @click="removeFromCart(product)">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
            <div>
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

}

table {
    padding: 1rem;

}

thead {
    background-color: #cf54cf;
    color: #ddd;
}


</style>