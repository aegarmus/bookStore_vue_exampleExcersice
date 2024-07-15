<script>

export default {
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <button :class="type" type="submit" >{{ text }}</button>
</template>

<style scoped>
button {
    padding: .5rem 1rem;

    border: none;
    border-radius: 15px;

    font-family: var(--prinicipal-font);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);

    cursor: pointer;

    text-align: center;

    transition: .5s

}

.login-btn {
    background-color: var(--primary-color500);
}

.register-btn {
    background-color: var(--primary-color700);   
}

.logout-btn {
    background-color: var(--secondary-color500);
    
}

.login-btn, .register-btn, .logout-btn {
    color: var(--neutral-color-light500);
    transition: .5s
}

.register-btn:hover, .login-btn:hover, .logout-btn:hover {
    box-shadow: 0px 0px 15px var(--secondary-color500);
}

button:hover {
    transform: scale(1.1)
}

</style>