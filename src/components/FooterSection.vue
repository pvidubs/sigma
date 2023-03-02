<script setup>
import { RouterLink } from 'vue-router';
import SigmaIcon from './icons/SigmaIcon.vue';
</script>

<template>
    <div class="bg-sigma py-10 px-7 font-archivo text-sm">
        <SigmaIcon :class="`w-36 lg:w-32 mb-8 mx-auto fill-white`" />
        <div class="flex flex-col mb-3">
            <h4 class="font-bold">INFORMACIÓN DE LA EMPRESA</h4>
            <RouterLink to="/about" class="text-white hover:underline">¿Quiénes somos?</RouterLink>
            <!-- TODO: Add an id ref to HelpView to FAQ section -->
            <RouterLink to="/help" class="text-white hover:underline"
                >Preguntas Frequentes</RouterLink
            >
        </div>
        <div class="flex flex-col mb-3">
            <h4 class="font-bold">AYUDA</h4>
            <!-- TODO: Insert the original video link -->
            <a href="https://www.youtube.com/" class="text-white hover:underline">
                ¿Cómo funciona el sitio? (Tutorial)
            </a>
            <!-- TODO: Add an id ref to HelpView to Encontrar agente -->
            <RouterLink to="/help" class="text-white hover:underline"
                >Quiero contratar un agente</RouterLink
            >
        </div>
        <!-- TODO: Insert content to this section -->
        <div class="flex flex-col mb-3">
            <h4 class="font-bold">POWERED BY</h4>
            <p class="text-white hover:underline">/Insert some info..../</p>
        </div>
        <div class="flex flex-col mb-3">
            <h4 class="font-bold">CONTÁCTANOS</h4>
            <!-- TODO: Check about send and post emails directly or maybe copy the email to the clipboard -->
            <span class="text-white hover:underline">hola@sigmacuba.com</span>
            <!-- TODO: Insert the original whatsapp chat link and icon -->
            <a href="#" class="text-white hover:underline">W +53 5-000-6233</a>
        </div>

        <!-- TODO: Insert the brands icon for social section -->
    </div>
</template>
