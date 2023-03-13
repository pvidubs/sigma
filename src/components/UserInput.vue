<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  type: String,
  placeholder: String,
});

const visibility = ref("invisible");

const validationError = computed(() => {
  return props.type === "email"
    ? "El correo electrónico no es válido"
    : "Ingrese una contraseña válida";
});
</script>

<template>
  <div class="w-full font-bahnschrift">
    <input
      class="scoped-border scoped-placeholder w-full py-2 lg:py-3 px-5 lg:px-6 font-semibold text-gray-400 text-base lg:text-2xl"
      :type="type"
      :placeholder="placeholder"
    />
    <span class="text-alert text-sm lg:text-xl italic font-semibold pl-5" :class="visibility"
      >{{ validationError }}...</span
    >
  </div>
</template>

<style scoped>
.scoped-border {
  @apply shadow-none ring-0 border-0 outline-none;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px #565656;
}

.scoped-border:focus {
  @apply shadow-none ring-0 border-0 outline-none;
  box-shadow: inset 0 0 0 2px #333333;
}

.scoped-border-error {
  @apply shadow-none ring-0 border-0 outline-none;
  box-shadow: inset 0 0 0 2px #aa1530;
}

.scoped-placeholder::placeholder {
  color: #565656;
  font-weight: 400;
}
</style>
