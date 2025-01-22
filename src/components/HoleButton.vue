<script setup>
    // bisa menggunakan desctructuring
    // const {title} = defineProps({
    //     title: String
    // })
    // const { title= 'Button', disable = false} = defineProps({
    //     title: String,
    //     disabled: Boolean
    // })

    const props = defineProps([
        'title'
    ])
    console.log(props.title)

    // in script setup (pakai object)
    // const props2 = defineProps({
    //     title: String
    // })
</script>

<template>
    <button>{{ props.title }}</button>
    <!-- <button>{{ title }}</button> -->
</template>

<style scoped></style>