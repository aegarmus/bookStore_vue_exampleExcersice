<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    components:{
        LoginForm
    }
}
</script>

<template>
    <main>
        <h1>Inicia Sesión</h1>
        <LoginForm />
    </main>
</template>

<style scoped >
main {
    height: auto;

    padding: 5rem;

    min-height: 50vh
}

</style>