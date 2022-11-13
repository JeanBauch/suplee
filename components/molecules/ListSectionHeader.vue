<template>
  <div class="hidden md:flex justify-between gap-10 lg:gap-6 xl:gap-12 font-semibold text-xl lg:text-2xl text-primary-olivia-medium">
    <nuxt-link to="/" aria-label="Voltar para página Inicial">
      <h3 class="lg:w-32 text-left lg:text-center">
        Tela inicial
      </h3>
    </nuxt-link>
    <div class="cursor-pointer" @click="handleClickSuplementHeaderList()">
      <h3 class="lg:w-32 text-left lg:text-center">
        Suplementos
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">

const routeHeaderList = useRoute();

function handleClickSuplementHeaderList () {
  if (routeHeaderList.name === "index") {
    const element = document.getElementById("sessaoDeSuplementos");
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    location.href = "/#sessaoDeSuplementos";
  }
}

</script>
