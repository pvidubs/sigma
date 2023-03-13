<script setup>
import { RouterLink } from "vue-router";
import UserInput from "../components/UserInput.vue";
import SigmaVerticalIcon from "../components/icons/SigmaVerticalIcon.vue";
import SigmaIsotypeIcon from "../components/icons/SigmaIsotypeIcon.vue";
</script>

<template>
  <div class="px-10">
    <div
      class="height-scoped flex flex-col lg:flex-row gap-5 lg:gap-20 pt-14 lg:pt-0 lg:justify-center items-center"
    >
      <figure>
        <SigmaIsotypeIcon color="gray-100" class="w-44 block lg:hidden" />
        <SigmaVerticalIcon color="gray-100" class="w-72 xl:w-80 hidden lg:block" />
      </figure>
      <!-- Horizontal/Vertical Line -->
      <div class="w-60 h-0 lg:w-0 lg:h-96 border-b lg:border-l border-gray-100"></div>
      <form class="w-full scoped-width flex flex-col gap-1 lg:gap-2 mt-6" novalidate>
        <UserInput type="email" placeholder="Correo Electrónico" />
        <UserInput type="password" placeholder="Contraseña" />
        <button
          type="submit"
          class="w-full py-2 lg:py-3 px-5 rounded-2xl bg-sigma font-poppins font-semibold text-white text-base lg:text-2xl"
        >
          INICIAR SESIÓN
        </button>
        <a
          href="#"
          class="text-center lg:text-left text-sigma font-poppins font-semibold text-sm lg:text-xl hover:underline mt-5"
          >¿Olvidaste tu contraseña???</a
        >
        <RouterLink
          to="/signup"
          class="text-center lg:text-left text-sigma font-poppins font-semibold text-sm lg:text-xl hover:underline"
          >¿Aún no tienes cuenta???</RouterLink
        >
      </form>
    </div>
  </div>
</template>

<style scoped>
.height-scoped {
  height: calc(100vh - 62px);
}

@media (min-width: 1024px) {
  .scoped-width {
    width: 37%;
  }

  .height-scoped {
    height: calc(100vh - 66px);
  }
}

@media (min-width: 1280px) {
  .scoped-width {
    width: 40%;
  }
}
</style>
