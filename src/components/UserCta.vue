<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <span
        class="bg-white font-semibold rounded-full py-1 px-4 font hover:bg-blue-300 hover:text-white cursor-pointer active:bg-blue-400"
        >{{ message }}</span
    >
</template>
