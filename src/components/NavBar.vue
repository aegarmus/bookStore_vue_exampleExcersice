<script>
import { mapGetters, mapActions } from 'vuex'

import FormButton from './FormButton.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
    components: {
        FormButton,
        ShoppingCart
    },
    data() {
        return {
            isActive: false,
            loginButton: 'login-btn',
            textLoginButton: 'Inicia Sesión',
            registerButton: 'register-btn',
            textRegisterButton: 'Registrate',
            logoutButton: 'logout-btn',
            textLogoutButton: 'Cerrar Sesión',
        }
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated', 'isAdmin'])
    },
    methods: {
        ...mapActions('auth', ['logout']),
        toggle(){
            this.isActive = !this.isActive
        }
    }
}
</script>

<template>
    <nav>
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item navbar-logo"><img class="navbar__icon" src="/img/icon/icon.png" alt="icon"></router-link>
            <div class="navbar-burger" :class="{'is-active': isActive}" @click="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start-side">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/about" class="navbar-item">Sobre Nosotros</router-link>
                <router-link to="/products" class="navbar-item">Productos</router-link>
            </div>
            
            <div>
                <router-link v-if="isAdmin" to="/admin/books" class="navbar-item">Admin</router-link>      
            </div>
            
            <div class="navbar-end-aside">
                <router-link to="/cart" class="navbar-item"><ShoppingCart /></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><FormButton :type="loginButton" :text="textLoginButton" /></router-link>
                <router-link v-if="!isAuthenticated" to="/signup"><FormButton :type="registerButton" :text="textRegisterButton" /></router-link>
                <router-link v-if="isAuthenticated" to="/login" @click="logout"><FormButton :type="logoutButton" :text="textLogoutButton" /></router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: var(--primary-color700);
    color: var(--neutral-color-light200);

    padding: 1.5rem 3rem;

    position: sticky;
    top: 0;
    
    width: 100%;

    z-index: 1;

    
}

.navbar-brand {
    display: flex;
    justify-content: center;
}

.navbar-logo {
    margin-bottom: 2rem;
}

.navbar__icon {
    width: 6rem;
}

.navbar-item {
    color: var(--neutral-color-light200);
    text-decoration: none;

    margin-right: 1rem;

    transition: .5s;
}

.navbar-menu {
    display: flex;
    justify-content: space-between;
   
}


.navbar-item:hover {
    transform: scale(1.1);
    text-shadow: 0px 0px 5px var(--neutral-color-light200);
}

.navbar-burger {
    display: none
}

.navbar-end-aside {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.navbar-burger span {
    display: block;

    width: 1.3rem;
    height: .2rem;

    margin: .5rem auto;

    background-color: var(--neutral-color-light500);

    transition: .5s
}

@media(max-width: 768px) {

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .navbar-brand {
        justify-content: space-between;
        align-items: center
    }

    .navbar-burger {
        display:block;
        cursor: pointer;

        border: solid 1px var(--neutral-color-light500);
        border-radius: 20px;

        padding: 1rem;

        width: 5rem;
        height: 5rem;

        transition: .5s;
    }

    
    .navbar-menu {
        display: none;
        
    }

    
    .is-active {
        display:flex;
        flex-direction: column;
        width: 100%;
        animation: slideIn 0.5s ease-in-out;
    }
    
    .navbar-item {
        display: block;
        padding: .5rem 1rem;
    }

    .navbar-start-side {
        margin: 1.5rem 0;
    }
}

</style>