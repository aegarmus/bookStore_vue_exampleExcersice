import { createStore } from 'vuex'


import products from "./modules/products.js";
import cart from "./modules/cart.js"
import auth from './modules/auth.js';

export default createStore({

  modules: {
    products,
    cart,
    auth
  }
})
