<script setup>
defineProps({
    title: String,
    paragraph: String,
});
</script>

<template>
    <div class="space-y-2 lg:space-y-7">
        <h2 class="px-4 lg:px-24 xl:px-32 font-poppins font-extrabold text-2xl lg:text-5xl">
            {{ title }}
        </h2>
        <p
            class="px-14 lg:px-40 xl:px-64 font-archivo font-normal text-xs lg:text-2xl text-gray-200"
        >
            {{ paragraph }}
        </p>
    </div>
</template>
