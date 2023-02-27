<script setup>
import LeadInfo from './LeadInfo.vue';

defineProps({
    buy: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <div class="px-4 py-14 lg:p-20 text-center">
        <LeadInfo
            :title="buy ? 'Descubre nuestras casas en venta' : 'Descubre nuestras casas en renta'"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus maiores ut aspernatur"
        />
    </div>
</template>
