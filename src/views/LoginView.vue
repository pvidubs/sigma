<script setup>
import UserInput from "../components/UserInput.vue";
import SigmaVerticalIcon from "../components/icons/SigmaVerticalIcon.vue";
import SigmaIsotypeIcon from "../components/icons/SigmaIsotypeIcon.vue";
</script>

<template>
  <div class="px-10">
    <div
      class="height-scoped flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center items-center"
    >
      <figure>
        <SigmaIsotypeIcon color="gray-100" class="w-44 block lg:hidden" />
        <SigmaVerticalIcon color="gray-100" class="w-60 hidden lg:block" />
      </figure>
      <!-- Horizontal/Vertical Line -->
      <div class="w-60 h-0 lg:w-0 lg:h-72 border-b lg:border-l border-gray-100"></div>
      <form class="w-full lg:w-96 flex flex-col gap-5 mt-6" novalidate>
        <UserInput type="email" placeholder="Correo Electrónico" />
        <UserInput type="password" placeholder="Contraseña" />
        <button
          type="submit"
          class="w-full py-2 px-5 rounded-2xl bg-sigma font-poppins font-semibold text-white"
        >
          INICIAR SESIÓN
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.height-scoped {
  height: calc(100vh - 66px);
}
</style>
