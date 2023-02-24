<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
    <NavBar />
    <div class="container mx-auto bg-gray-400">
        <RouterView />
    </div>
</template>

