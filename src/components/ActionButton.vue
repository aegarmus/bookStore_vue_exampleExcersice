<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        buttonClass:{
            type: String,
            required: true
        }
    },
    methods: {
        onClick(){ 
            this.$emit('handle-click')
        }
    }
}
</script>

<template>
    <button :class="buttonClass" @click="onClick"  v-html="label"></button>
</template>


<style scoped>

button {
    padding: .5rem;
    border: none;
    border-radius: 5px;

    margin: .2rem;
}

.add-book-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
}

.edit-btn, .add-book-btn {
    background-color: var(--primary-color500)
}

.delete-btn {
    background-color: var(--secondary-color500)
}

.edit-btn, .delete-btn, .add-book-btn {
    color: var(--neutral-color-light200);
    transition: .5s
}

.edit-btn:hover, .delete-btn:hover, .add-book-btn:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--neutral-color-light200);
}
</style>