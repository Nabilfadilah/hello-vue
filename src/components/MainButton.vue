<script setup>
// boolean atributes
const buttonDisbaled = false;

// dynamic binding multiple atttribute
const buttonAttr = {
    disabled: true,
    class: 'text-3xl bg-black text-white',
    id: '1'
}

// using javascript expression
const isLoading = true;

// calling function
const renderIsLoading = () => {
    if (isLoading) {
        return "Submit"
    } else {
        return 'Save'
    }
}

</script>

<template>
    <button :disabled="buttonDisbaled">Button Add</button>
    <button v-bind="buttonAttr">Button Edit</button>
    <button>{{ renderIsLoading }}</button>
    <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
</template>

<style scoped></style>