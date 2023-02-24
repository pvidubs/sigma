<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import UserCta from './UserCta.vue';
import SigmaIcon from './icons/SigmaIcon.vue';

const closeIconHidden = ref(true);
const navBarColor = ref('bg-sigma');
const iconColor = ref('fill-white');

const menuInteraction = () => {
    if (closeIconHidden.value) {
        navBarColor.value = 'bg-white';
        iconColor.value = 'fill-sigma';
    } else {
        navBarColor.value = 'bg-sigma';
        iconColor.value = 'fill-white';
    }
    closeIconHidden.value = !closeIconHidden.value;
};
</script>

<template>
    <div
        :class="`${navBarColor} flex justify-between items-center p-4 lg:py-4 lg:px-6 font-poppins`"
    >
        <RouterLink to="/">
            <SigmaIcon :class="`w-28 lg:w-32 ${iconColor}`" />
        </RouterLink>
        <img
            :src="`../src/assets/icons/hamburger-menu.svg`"
            class="block lg:hidden"
            width="28"
            @click="menuInteraction"
            v-if="closeIconHidden"
        />
        <img
            :src="`../src/assets/icons/close-menu.svg`"
            class="block lg:hidden relative right-0.5"
            width="22"
            @click="menuInteraction"
            v-if="!closeIconHidden"
        />
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
