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
    <form @submit.prevent="onSubmitRegister" class="register-form">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="user.nombre" placeholder="Papapleto" required />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" v-model="user.apellido" placeholder="Rodriguez" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" placeholder="user@email.com" required />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" v-model="user.telefono" placeholder="+56912345678" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="user.password" placeholder="*******" required />
      </div>
      <div class="form-group">
        <label for="passwordConfirm">Confirma contraseña</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="*******" required />
      </div>
      <FormButton :text="textButton" :type="typeButton" />
    </form>
  </template>

<style scoped>
.register-form {
  max-width: 400px;

  margin: 2rem auto;
  padding: 2rem;

  background-color: var(--neutral-color-light500);
  
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--neutral-color-dark500);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-color700);
}

input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--neutral-color-dark500);
}

input:focus {
  outline: none;
  box-shadow: 0 0 15px var(--primary-color500);
}

@media (max-width: 768px) {
  .register-form {
    padding: 1rem;
  }

  input {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .register-form {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  input {
    padding: 0.5rem;
  }
}
</style>