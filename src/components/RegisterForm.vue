<script>
import FormButton from './FormButton.vue';

import { mapActions } from 'vuex'

export default {
    components: {
        FormButton
    },
    data() {
        return {
            textButton: 'Registrate',
            typeButton: 'register-btn',
            user: {
                nombre: '',
                apellido: '',
                email: '',
                password: '',
                telefono: ''
            },
            passwordConfirm: ''
        }
    },
    methods: {
        ...mapActions('auth', ['registerUser']),

        onSubmitRegister () {
            try {
                if(this.user.password !== this.passwordConfirm) {
                    alert('Las contraseñas no coinciden')
                    return
                } 

                this.registerUser(this.user)
                alert('Usuario registrado con éxito')
                this.$router.push('/')
                
            } catch (error) {
                console.error("Error al registrar el usuario", error)
            }
        }
    }
}

</script>

<template>
    <form @submit.prevent="onSubmitRegister">
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="user.nombre" placeholder="Papapleto" required />
        </div>
        <div>
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="user.apellido" placeholder="Rodriguez" required />
        </div>
                <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="user.email" placeholder="user@email.com" required />
        </div>
        <div>
            <label for="telefono">Telefono</label>
            <input type="text" id="telefono" v-model="user.telefono" placeholder="+56912345678" required />
        </div>
        <div>
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="user.password" placeholder="*******" required />
        </div>
        <div>
            <label for="passwordConfirm">Confirma contraseña</label>
            <input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="*******" required />
        </div>
        
        <FormButton :text="textButton" :type="typeButton" />
    </form>
</template>

<style>

</style>