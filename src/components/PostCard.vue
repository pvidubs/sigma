<script setup>
import PostIcon from './icons/PostIcon.vue';
import { computed } from 'vue';

const props = defineProps({
    buy: Boolean,
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

const bgColor = computed(() => {
    return props.buy ? 'bg-sigma' : 'bg-green-300';
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
                        :class="bgColor"
                    >
                        <img
                            src="../assets/icons/full-vertical-logo.svg"
                            class="relative translate-x-0.5"
                            width="48"
                        />
                    </div>
                </div>
                <div class="w-28 h-48" :class="bgColor"></div>
            </div>
            <div class="w-44 xl:w-52 h-full absolute right-0 px-3 pt-2 pb-4 flex flex-col">
                <div
                    class="flex items-center gap-1 font-poppins font-extrabold"
                    :class="buy ? 'text-sigma' : 'text-green-300'"
                >
                    <h3 class="tracking-wide text-2xl">SOBRE</h3>
                    <div class="text-xs leading-none">
                        <h4>La</h4>
                        <h4>Propiedad</h4>
                    </div>
                </div>

                <div
                    class="mb-3 font-bahnschrift font-semibold text-xs leading-none text-gray-200 scoped-font-condensed scoped-font-10px"
                >
                    <span class="">{{ street }} #{{ addressNumber }}.</span>
                    <br />
                    <span>{{ residence }}. {{ province }}.</span>
                </div>

                <div
                    class="font-bahnschrift font-semibold grid grid-cols-4 grid-rows-2 grow gap-y-2"
                >
                    <div class="h-5 flex place-self-center scoped-gap">
                        <div
                            class="w-5 h-5 rounded-md"
                            :class="bedroom > 0 ? bgColor : 'bg-gray-100'"
                        >
                            <PostIcon icon="bedroom" />
                        </div>
                        <span
                            class="scoped-font-condensed"
                            :class="bedroom > 0 ? 'text-gray-300' : 'text-gray-100'"
                            >x{{ bedroom }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scoped-gap {
    gap: 2px;
}

.scoped-font-condensed {
    font-stretch: condensed;
}

.scoped-font-10px {
    font-size: 12px;
}
</style>
