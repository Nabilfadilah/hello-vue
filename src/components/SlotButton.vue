<script setup>
import { useAttrs } from 'vue';


const attrs = useAttrs()
console.log(attrs.class) 

const {title, disabled} = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <label>Ini Button : </label>
    <button 
        v-bind="$attrs"
        :disabled
        class="button"
        :class="{disabled: disabled}"
        :style="{color: disabled ? '#fff' : '#000'}"
    >
        <!-- slot itu kaya childer kalau di react! -->
        <!-- kata "Submit" itu fallback content -->
        <!-- <slot>Submit</slot>  -->
       
        <div>
            <slot>Submit</slot>
        </div>

        <!-- nama slot -->
        <div v-if="$slots.header">
            <slot name="header"></slot>
        </div>
    </button>
</template>

<style scoped></style>