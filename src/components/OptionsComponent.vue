<!-- option API -->
<script>
import MainButton from './MainButton.vue';

export default {
    data() {
        return {
            name: 'ini Option Component API' 
        }
    },
    methods: {
        showName() {
            console.log(this.name)
        }
    }
}
</script>

<template>
    <h1>{{ name }}</h1>
    <button @click="showName">Show Name</button>
</template>

<!-- gak perlu dimasukan juga tidak apa-apa -->
<style></style>