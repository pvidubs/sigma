<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import UserCta from './UserCta.vue';
import SigmaIcon from './icons/SigmaIcon.vue';

const hiddenMenu = ref(true);
const navBarColor = ref('bg-sigma');
const iconColor = ref('fill-white');

const menuInteraction = () => {
    if (hiddenMenu.value) {
        navBarColor.value = 'bg-white';
        iconColor.value = 'fill-sigma';
    } else {
        navBarColor.value = 'bg-sigma';
        iconColor.value = 'fill-white';
    }
    hiddenMenu.value = !hiddenMenu.value;
};
</script>

<template>
    <div
        :class="`${navBarColor} flex justify-between items-center p-4 lg:py-4 lg:px-6 font-poppins z-20`"
    >
        <RouterLink to="/">
            <SigmaIcon :class="`w-28 lg:w-32 ${iconColor}`" />
        </RouterLink>
        <img
            src="../assets/icons/hamburger-menu.svg"
            class="block lg:hidden"
            width="28"
            @click="menuInteraction"
            v-if="hiddenMenu"
        />
        <img
            src="../assets/icons/close-menu.svg"
            class="block lg:hidden relative right-0.5"
            width="22"
            @click="menuInteraction"
            v-if="!hiddenMenu"
        />
        <nav class="space-x-7 hidden lg:flex">
            <RouterLink to="/buy" class="text-white">Comprar</RouterLink>
            <RouterLink to="/rent" class="text-white">Rentar</RouterLink>
            <RouterLink to="/sell" class="text-white">Vender</RouterLink>
            <RouterLink to="/help" class="text-white">Ayuda</RouterLink>
            <RouterLink to="/login">
                <UserCta message="Iniciar Sesión" />
            </RouterLink>
        </nav>
    </div>
    <div
        v-if="!hiddenMenu"
        class="w-1/2 bg-white h-full absolute right-0 pt-9 pr-7 border-t border-t-gray-100 z-10"
    >
        <nav class="flex flex-col items-end gap-7">
            <RouterLink to="/buy" class="text-black">Comprar</RouterLink>
            <RouterLink to="/rent" class="text-black">Rentar</RouterLink>
            <RouterLink to="/sell" class="text-black">Vender</RouterLink>
            <RouterLink to="/help" class="text-black">Ayuda</RouterLink>
            <RouterLink to="/login">
                <UserCta message="Iniciar Sesión" />
            </RouterLink>
        </nav>
    </div>
</template>
