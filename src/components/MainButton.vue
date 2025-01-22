<script setup>
// boolean atributes
const buttonDisbaled = false;

// dynamic binding multiple atttribute
const buttonAttr = {
    disabled: true,
    class: 'text-3xl bg-black text-white',
    // id: '1'
}

// using javascript expression
const isLoading = false;

// calling function
const renderIsLoading = () => {
    if (isLoading) {
        return "Submit"
    } else {
        return 'Save'
    }
}

// agar dinamis
const url = "/home"

</script>

<template>
    <!-- derective -->
     <a :href={url}>
         <button v-bind="buttonAttr" :id="`id-${1}`">
             {{ renderIsLoading() }}
         </button>
     </a>


    <!-- <button :disabled="buttonDisbaled">Button Add</button> -->
    <!-- <button v-bind="buttonAttr">Button Edit</button> -->
    <!-- <button>{{ renderIsLoading() }}</button> -->
    <!-- <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button> -->
</template>

<style scoped></style>