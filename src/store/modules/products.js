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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}