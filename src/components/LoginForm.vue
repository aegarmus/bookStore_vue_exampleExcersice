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
     <form @submit.prevent="onSubmitLogin" class="login-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" placeholder="Introduce tu email" required />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password" v-model="password" placeholder="Introduce tu contraseña" required />
    </div>
    <FormButton :text="textButton" :type="typeButton"/>
  </form>
</template>

<style scoped>
.login-form {
  max-width: 20%;

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
  .login-form {
    padding: 1rem;
  }

  input {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .login-form {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  input {
    padding: 0.5rem;
  }
}
</style>