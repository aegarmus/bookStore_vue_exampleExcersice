import { v4 as uuidv4 } from 'uuid'

import { getProduct } from '@/services/productServices';


const state = {
    products: []
}

const getters = {
    allProducts: state => state.products,
    bookGenres: state => new Set(state.products.map(book => book.genero)),
    getProductById: state => id => state.products.find(book => book.id === id)
};

const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    decrementProductStock(state, productId) {
        const productSelected = state.products.find(item => item.id === productId)
        if(productSelected && productSelected.stock > 0) {
            productSelected.stock--
        }
    },
    addProduct(state, product) {
        state.products.push(product)
    },
    editProduct(state, updatedProduct) {
        console.log(updatedProduct)
        const indexProduct = state.products.findIndex(product => product.id === updatedProduct.id)
        if(indexProduct !== -1) state.products.splice(indexProduct, 1, updatedProduct ) 
    },
    deleteProduct(state, productID) {
        state.products = state.products.filter(product => product.id !== productID);       
    }
}

const actions = {
    async fetchProducts({ commit }) {
        try {
            const products = await getProduct()
            commit('setProducts', products)
        }catch(error) {
             console.error('No pudimos tomar la data', error)
        }
    },
    addProduct({ commit }, product) {
        const newProduct = { ...product, id: uuidv4() };
        commit('addProduct', newProduct)
    },
    editProduct({ commit }, product) {
        commit('editProduct', product)
    },
    deleteProduct({commit}, productID) {
        commit('deleteProduct', productID)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}