<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <span
        class="font-bold lg:hover:bg-blue-300 lg:hover:text-white cursor-pointer lg:active:bg-blue-400 lg:bg-white lg:font-semibold lg:rounded-full lg:py-1 lg:px-4"
        >{{ message }}</span
    >
</template>
