<script>
import { mapActions } from 'vuex'

import FormButton from './FormButton.vue'


export default {
    components: {
        FormButton
    },
    data() {
        return {
            textButton: "Iniciar Sesión",
            typeButton: "login-btn",
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions('auth', ['loginUser']),

        onSubmitLogin() {
            try {
                this.loginUser({ email: this.email, password: this.password })
                alert(`Bienvenido ${this.email}`)
                this.$router.push('/')
            } catch (error) {
                alert('Credenciales Invalidas')
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="onSubmitLogin">
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Papapleto" required />
        </div>
        <div>
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" placeholder="Papapleto" required />
        </div>
        <FormButton :text="textButton" :type="typeButton"/>

    </form>
</template>

<style scoped>
</style>