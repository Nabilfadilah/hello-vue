<!-- composition API -->
<script setup>
import { inject } from 'vue';

    // const name = 'ini Composition Component API'

    // const showName = () => console.log(name)
    const {nama, updateName} = inject('name') // bisa langsung inject
    const nameApp = inject('nameApp')
</script>

<template>
    <h1>Name : {{ nama }}</h1>
    <h1>Name App : {{ nameApp }}</h1>
    <!-- @click = event handler -->
    <!-- <button @click="showName">Show Name</button> -->
    <button @click="updateName">Update</button>
</template>

<!-- gak perlu dimasukan juga tidak apa-apa -->
<style></style>