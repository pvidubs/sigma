<script setup>
import { RouterLink } from 'vue-router';
import UserCta from './UserCta.vue';
</script>

<template>
    <div class="bg-sigma flex justify-between items-center p-3 lg:py-4 lg:px-6 font-poppins">
        <RouterLink to="/">
            <img src="../assets/icons/logo1.svg" class="w-24 lg:w-32" />
        </RouterLink>
        <img src="../assets/icons/hamburger-menu.svg" width="20" class="block lg:hidden" />
        <div class="space-x-7 hidden lg:flex">
            <RouterLink to="/buy" class="text-white">Comprar</RouterLink>
            <RouterLink to="/rent" class="text-white">Rentar</RouterLink>
            <RouterLink to="/sell" class="text-white">Vender</RouterLink>
            <RouterLink to="/help" class="text-white">Ayuda</RouterLink>
            <RouterLink to="/login">
                <UserCta message="Iniciar Sesion" />
            </RouterLink>
        </div>
    </div>
</template>
