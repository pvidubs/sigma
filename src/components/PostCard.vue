<script setup>
import PostIcon from './icons/PostIcon.vue';

defineProps({
    buy: {
        type: Boolean,
        default: true,
    },
    price: Number,
    bedroom: Number,
    dininroom: Number,
    kitchen: Number,
    garage: Number,
    bathroom: Number,
    livingroom: Number,
    garden: Number,
    pool: Number,
    street: String,
    firstCorner: String,
    secondCorner: String,
    addressNumber: String,
    info: String,
    price: Number,
    residence: String,
    province: String,
});
</script>

<template>
    <div class="flex flex-col overflow-hidden rounded-2xl w-72 xl:w-80 h-96">
        <div class="relative w-full h-3/5">
            <img
                src="../assets/images/card-img.jpg"
                alt="Una casa"
                class="absolute h-full w-full object-cover"
            />
        </div>
        <div class="relative grow">
            <div class="absolute bottom-0">
                <div class="relative mx-auto w-20 h-20">
                    <div
                        class="flex justify-center items-center absolute top-1/2 w-full h-full rounded-full"
                        :class="`${buy ? 'bg-sigma' : 'bg-green-300'}`"
                    >
                        <img
                            src="../assets/icons/full-vertical-logo.svg"
                            class="relative translate-x-0.5"
                            width="48"
                        />
                    </div>
                </div>
                <div class="w-28 h-48" :class="`${buy ? 'bg-sigma' : 'bg-green-300'}`"></div>
            </div>
            <div class="w-44 xl:w-52 h-full absolute right-0 p-3 flex flex-col">
                <div class="flex items-center gap-1 font-poppins font-extrabold text-sigma">
                    <h3 class="tracking-wide text-2xl">SOBRE</h3>
                    <div class="text-xs leading-none">
                        <h4>La</h4>
                        <h4>Propiedad</h4>
                    </div>
                </div>

                <!--
                    <div class="font-bahnschrift text-xs leading-none text-gray-300">
                        <span class=""
                            >{{ street }} #{{ addressNumber }} / {{ firstCorner }} y
                            {{ secondCorner }}.</span
                        >
                        <br />
                        <span>{{ residence }}. {{ province }}</span>
                    </div>
                -->

                <div class="grid grid-cols-4 grid-rows-2 grow gap-y-3 gap-x-1">
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="bedroom" />
                        </div>
                        <span>x{{ bedroom }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="dininroom" />
                        </div>
                        <span>x{{ dininroom }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="kitchen" />
                        </div>
                        <span>x{{ kitchen }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="garage" />
                        </div>
                        <span>x{{ garage }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="bathroom" />
                        </div>
                        <span>x{{ bathroom }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="livingroom" />
                        </div>
                        <span>x{{ livingroom }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="garden" />
                        </div>
                        <span>x{{ garden }}</span>
                    </div>
                    <div class="bg-red-600 h-5 flex place-self-center">
                        <div class="w-5 h-5 bg-sigma">
                            <PostIcon icon="pool" />
                        </div>
                        <span>x{{ pool }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
