import axios from 'axios'

const state = {
    user: null, //Aquí se almacena al usuario logeado
    users: [], //Aquí se almacena el total de usuarios registrados para validar
};

const getters = {
    getUser: state => state.user,
    isAuthenticated: state => !!state.user,
    getUsers: state => state.users
}

const mutations = {
    setUser: (state, user) => state.user = user,
    addUser: (state, user) => state.users.push(user),
    setUsers: (state, users) => state.users = users
}

const actions = {
    loginUser({ commit, state }, { email, password }) {
        const user = state.users.find(user => user.email === email && user.password === password)
        //Aqui usamos un condicional lógico (Evaluo solo una de las condiciones y corre el resto del código fuera de la condición)
        if(!user) throw new Error('Credenciales Invalidas')//Guard Condition
        
        commit('setUser', user)

        //Esto es lo mismo pero menos eficiente.
        /* if(user) {
            commit('setUser', user)
        } else {
            throw new Error('Credenciales Invalidas')
        } */
    },

    registerUser({ commit, state } , newUser ) {
        const userExists = state.users.find(user => user.email === newUser.email)

        if(userExists) throw new Error('Ya hay un usuario registrado con este email')

        newUser.id = state.users.length + 1 //UUID
        commit('addUser', newUser)

        //Si queremos logear automaticamente despues de registrar, agregamos esta linea, sino queda hasta la linea anterior.
        commit('setUser', newUser)
    },

    logout({ commit }) {
        commit('setUser', null)
    },

    async fetchUsersFromJson({ commit }) {
        const { data } = await axios.get('/api/usuarios.json')
        commit('setUsers', data)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}