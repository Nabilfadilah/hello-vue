<script setup>
    const {title, disable} = defineProps({
        title: {
            type: String,
            default: 'Title'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })

    // jika tidak disable
    const disabledColor = "#000"
    const availableColor = "#fff"
</script>

<template>
    <!-- class binding dengan kondisi tertentu -->
     <!-- bisa juga atur warnanya di class -->
    <button :disabled class="button" :class="{disabled: disabled}" :style="{color: disabled ? disabledColor : availableColor}">{{ title }}</button>
</template>

<style scoped>
.button {
    background-color: saddlebrown;
    border: none;
    color: white;
    padding: 5px 8px;
}

.disabled {
    background-color: mediumaquamarine;
}
</style>