import axios from 'axios'


const state = {
    products: []
}

const getters = {
    allProducts: (state) => state.products,
    bookGenres: (state) => new Set(state.products.map((book) => book.genero)),
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
        const indexProduct = state.products.findIndex(product => product.id === updatedProduct.id)
        if(indexProduct !== -1) state.products.splice(indexProduct, 1, updatedProduct ) 
    },
    deleleProduct(state, productID) {
        state.products = state.products.filter(product => product.id === productID)
    }
}

const actions = {
    async fetchProducts({ commit }) {
        try {
            const { data } = await axios.get('/api/productos.json')
            commit('setProducts', data)
        }catch(error) {
             console.error('No pudimos tomar la data', error)
        }
    },
    addProduct({ commit }, product) {
        commit('addProduct', product)
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