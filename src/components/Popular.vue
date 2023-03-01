<script setup>
import { RouterLink } from 'vue-router';
import LeadInfo from './LeadInfo.vue';
import PostCard from './PostCard.vue';

defineProps({
    buy: Boolean,
});
</script>

<template>
    <div class="px-4 py-14 lg:p-20 text-center">
        <LeadInfo
            :title="buy ? 'Descubre nuestras casas en venta' : 'Descubre nuestras casas en renta'"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus maiores ut aspernatur"
        />
    </div>
    <div
        class="flex flex-col lg:flex-row items-center justify-evenly xl:justify-center gap-7 xl:gap-10 lg:px-14"
    >
        <PostCard
            :buy="buy"
            street="San Gervacio"
            address-number="324"
            first-corner="Virtudes"
            second-corner="Esperanza Gomez"
            residence="Diez de Octubre"
            province="La Habana"
            :bedroom="2"
            :dininroom="2"
            :kitchen="2"
            :garage="2"
            :bathroom="3"
            :livingroom="2"
            :garden="2"
            :pool="2"
        />
        <PostCard
            :buy="buy"
            street="San Gervacio"
            address-number="324"
            first-corner="Virtudes"
            second-corner="Esperanza Gomez"
            residence="Diez de Octubre"
            province="La Habana"
            :bedroom="0"
            :dininroom="2"
            :kitchen="2"
            :garage="2"
            :bathroom="3"
            :livingroom="2"
            :garden="2"
            :pool="2"
        />
        <PostCard
            :buy="buy"
            street="San Gervacio"
            address-number="324"
            first-corner="Virtudes"
            second-corner="Esperanza Gomez"
            residence="Diez de Octubre"
            province="La Habana"
            :bedroom="2"
            :dininroom="2"
            :kitchen="2"
            :garage="2"
            :bathroom="3"
            :livingroom="2"
            :garden="2"
            :pool="2"
        />
    </div>
    <div class="text-center mt-10 lg:mt-16 font-poppins font-extrabold text-sm lg:text-2xl">
        <RouterLink :to="buy ? '/buy' : '/rent'" class="hover:underline active:underline"
            >Ver Más</RouterLink
        >
    </div>
</template>
