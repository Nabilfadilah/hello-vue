<!-- composition API -->
<script setup>
import MainButton from './MainButton.vue';

    const name = 'ini Composition Component API'

    const showName = () => console.log(name)
</script>

<template>
    <h1>{{ name }}</h1>
    <!-- @click = event handler -->
    <MainButton @click="showName" />
</template>

<!-- gak perlu dimasukan juga tidak apa-apa -->
<style></style>