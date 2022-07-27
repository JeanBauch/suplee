<template>
  <div class="relative">
    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />

    <section class="w-screen min-h-screen bg-complement-background-soft overflow-hidden">
      <organisms-header class="hidden md:block" />
      <main class="md:container mx-auto px-8 md:px-0 2xl:px-20 flex justify-center items-center mb-8" style="height: calc(100% - 6.5rem)">
        <div class="flex flex-1 flex-col justify-center">
          <atoms-title-page :title-page="'Green Tea Long Jin'" />

          <atoms-breadcrumb>
            <template #aside-category>
              <h4 class="font-medium text-lg 2xl:text-xl text-secondary-green-gray-dark hidden md:block">
                Categoria: <strong class="font-semibold">Vitaminas</strong>
              </h4>
            </template>
          </atoms-breadcrumb>

          <div class="flex flex-1 flex-col md:flex-row w-full gap-3 md:gap-6 mt-3 md:mt-2 xl:mt-4 2xl:mt-6 relative">
            <!-- Card Images -->
            <organisms-card-preview-images-product />
            <!-- Card Product Details -->
            <organisms-card-details-product />
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  setup () {
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
    return { dynamic: ref(49) };
  },
  head: {
    title: "Produto"
  }
};
</script>
