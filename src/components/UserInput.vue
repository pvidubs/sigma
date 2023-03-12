<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  type: String,
  placeholder: String,
});
</script>

<template>
  <div class="w-full">
    <input
      class="scoped-border scoped-placeholder w-full py-2 px-5 font-poppins text-gray-400"
      :type="type"
      :placeholder="placeholder"
    />
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

.scoped-error {
  @apply shadow-none ring-0 border-0 outline-none;
  box-shadow: inset 0 0 0 2px #aa1530;
}

.scoped-placeholder::placeholder {
  color: #565656;
}
</style>
