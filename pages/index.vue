<template>
  <div class="relative">
    <organisms-nav-bar-footer-mobile />
    <section class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
      <atoms-bg-hero />
      <organisms-header />
      <organisms-call-to-action-home-page />
    </section>
    <section class="bg-complement-background-normal min-h-screen">
      <!-- Heading -->
      <div class="px-4 sm:px-8 pt-8 pb-4 border-b border-secondary-green-gray-medium">
        <h2 class="font-semibold text-2xl text-dark-normal">
          Todos os produtos
        </h2>
      </div>
      <div class="px-4 sm:px-8 py-5 shadow-lg md:hidden">
        <div class="flex flex-wrap items-center justify-start ">
          <div class="mr-8">
            <h3 class="font-semibold text-lg">
              Filtros:
            </h3>
          </div>
          <div class="flex gap-4">
            <button class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full border border-primary-lemon-dark text-lg text-primary-lemon-dark shadow-md">
              Categorias
            </button>
            <button class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full border border-dark-normal font-medium text-lg text-dark-normal shadow-md">
              Efeitos
            </button>
          </div>
        </div>
      </div>
      <div v-if="pending">
        <p>Loading...</p>
      </div>
      <main v-else class="px-4 sm:px-8 py-5 grid grid-cols-2 grid-rows-4 gap-4 md:hidden">
        <div v-for="(produto, index) in allProducts" :key="index">
          <organisms-card-product :produto="produto" />
        </div>
      </main>
    </section>
    <div id="modal" />
  </div>
</template>

<script>
export default {
  setup () {
    const { pending, data: allProducts } = useLazyFetch("https://supleeapiv1.herokuapp.com/api/Catalogo/produtos");
    // watch(allProducts, (newProducts) => {
    //   console.log("passou por aqui!");
    // });

    useHead({
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "pt-br"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Ecommerce de suplementos alimentares."
        }
      ]
    });

    return { dynamic: ref(49), allProducts, pending };
  },
  head: {
    title: "Suplee"
  }
};
</script>
