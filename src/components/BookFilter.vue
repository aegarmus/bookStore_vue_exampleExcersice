<script>
export default {
    props: {
        genres: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            nameFilter: '',
            genreFilter: ''
        }
    },
    methods: {
        applyFilter() {
            this.$emit('filter-books', { name: this.nameFilter, genre: this.genreFilter })
        }
    }
}
</script>

<template>
    <section class="filter-container">
        <input type="text" v-model="nameFilter" @input="applyFilter" placeholder="El Señor de los Anillos">
        <select v-model="genreFilter" @change="applyFilter">
            <option value="">Todos los géneros </option>
            <option v-for="(genre, index) in genres" :key="index" :value="genre">{{ genre }}</option>
        </select>
    </section>
        
</template>

<style scoped>
.filter-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    width: 30%;
}

input, select {
    padding:  .5rem 1rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px var(--neutral-color-dark500);
}
</style>