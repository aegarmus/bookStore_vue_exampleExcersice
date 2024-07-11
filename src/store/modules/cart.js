const state = {
    cart: []
}

const getters = {
    cartProducts: state => state.cart,
    cartTotal: state => state.cart.reduce((acumm, product) => acumm += (product.precio * product.cantidad), 0)
}

const mutations = {
    addProductToCart(state, product) {
        const productSelected = state.cart.find(item => item.id === product.id)

        if(!productSelected) {
            return state.cart.push({...product, cantidad: 1})
        }

        return productSelected.cantidad++
    },
    removeFromCart(state, product) {
        state.cart = state.cart.filter(item => item.id !== product.id)
    }
}

const actions = {
    addProductToCart({ commit, dispatch }, product) {
        commit('addProductToCart', product)
        dispatch('products/decrementProductStock', product.id, { root: true })
    },
    removeFromCart({ commit }, product) {
        commit('removeFromCart', product)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}