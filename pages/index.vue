<template>
  <div class="relative">
    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollPageToListProducts" />
    <section class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
      <atoms-bg-hero />
      <organisms-header />
      <organisms-call-to-action-home-page @select-category-filter="filterCategoryCallToAction" />
    </section>
    <section class="bg-complement-background-normal min-h-screen">
      <!-- Heading -->
      <div class="px-4 sm:px-8 pt-8 pb-4 border-b border-secondary-green-gray-medium">
        <h2 class="font-semibold text-2xl text-dark-normal">
          Todos os produtos
        </h2>
      </div>
      <div id="productsFiltered" />
      <div class="bg-complement-background-normal  px-4 sm:px-8 py-5 shadow-lg md:hidden sticky top-0 right-0 z-30">
        <div class="flex flex-wrap items-center justify-start ">
          <div class="mr-8">
            <h3 class="font-semibold text-lg">
              Filtros:
            </h3>
          </div>
          <div class="flex gap-4">
            <button :class="setBorderCurrentCategoryFilter()" class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full text-lg shadow-md" @click="showModal = !showModal">
              <span v-if="isCategorySelected('Vitaminas')">Vitaminas</span>
              <span v-else-if="isCategorySelected('Proteínas')">Proteínas</span>
              <span v-else-if="isCategorySelected('Minerais')">Minerais</span>
              <span v-else-if="isCategorySelected('Ômega-3')">Ômega-3</span>
              <span v-else>Categorias</span>
            </button>
            <button class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full border border-dark-normal font-medium text-lg text-dark-normal shadow-md" @click="loaderProduct = !loaderProduct">
              Efeitos
            </button>
          </div>
        </div>
      </div>
      <div v-if="pending">
        <p>Loading...</p>
      </div>
      <main v-else class="px-4 sm:px-8 py-6 grid grid-cols-2 grid-rows-4 gap-4 md:hidden pb-28 relative">
        <atoms-loader-label :show="loaderProduct">
          <template #content-label>
            <span>Buscando seus produtos...</span>
          </template>
        </atoms-loader-label>
        <div v-for="(produto, index) in allProducts" :key="index">
          <organisms-card-product :produto="produto" />
        </div>
      </main>
    </section>
    <AtomsModal :show="showModal">
      <template #header-modal>
        <h3 class="text-2xl font-bold">
          Categorias
        </h3>
      </template>
      <template #btn-close-modal>
        <button class="close-btn p-3" @click="showModal = !showModal">
          <XIcon class="h-6 w-6 text-current relative z-10" />
        </button>
      </template>
      <template #content-modal-category>
        <ul class="mb-7 text-2xl font-light flex flex-col gap-3 text-dark-normal">
          <li :class="isCategorySelected('Vitaminas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Vitaminas')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-green-dark" />
              <span>
                Vitaminas
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Vitaminas')" class="h-8 w-8 text-primary-green-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Proteínas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Proteínas')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-lemon-dark" />
              <span>
                Proteínas
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Proteínas')" class="h-8 w-8 text-primary-lemon-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Minerais') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Minerais')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-secondary-orange-medium" />
              <span>
                Minerais
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Minerais')" class="h-8 w-8 text-secondary-orange-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Ômega-3') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Ômega-3')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-olivia-dark" />
              <span>
                Ômega-3
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Ômega-3')" class="h-8 w-8 text-primary-olivia-dark relative z-10" />
            </div>
          </li>
          <li class="px-7 py-3 text-dark-normal flex items-center justify-center" @click="removeFilter">
            <span>
              Listar todas
            </span>
          </li>
        </ul>
      </template>
    </AtomsModal>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { CheckIcon } from "@heroicons/vue/outline";

export default {
  components: { XIcon, CheckIcon },
  setup () {
    const showModal = ref(false);
    const currentCategorySelected = ref("");
    const loaderProduct = ref(false);
    const originalListProduct = reactive({
      data: [],
      modified: false
    });

    const { pending, data: listProducts } = useLazyFetch("https://supleeapiv1.herokuapp.com/api/Catalogo/produtos?pagina=1&quantidade=12");
    watch(currentCategorySelected, async () => {
      if (currentCategorySelected.value === "") {
        return;
      }
      loaderProduct.value = true;
      if (!originalListProduct.modified) {
        originalListProduct.data = listProducts.value;
        originalListProduct.modified = true;
      }
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/categoria?categoriaId=${currentCategorySelected.value}`);
        listProducts.value = (await res.json());
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    function toggleSelectedCategory (category) {
      currentCategorySelected.value = category === "Proteínas" ? "8a11a207-806b-4381-a66d-312380079800" : category === "Ômega-3" ? "06c8e04e-6186-4348-b2b3-c92956593d94" : category === "Vitaminas" ? "13da56cc-5122-4392-8766-de930231f770" : "083a4576-f55b-4766-bf50-eb86db16b766";
      showModal.value = false;
      scrollPageToListProducts();
    }

    function filterCategoryCallToAction (category) {
      toggleSelectedCategory(category);
      scrollPageToListProducts();
    }

    function scrollPageToListProducts () {
      const element = document.querySelector("#productsFiltered");
      element.scrollIntoView({ behavior: "smooth" });
    }

    function isCategorySelected (category) {
      category = category === "Proteínas" ? "8a11a207-806b-4381-a66d-312380079800" : category === "Ômega-3" ? "06c8e04e-6186-4348-b2b3-c92956593d94" : category === "Vitaminas" ? "13da56cc-5122-4392-8766-de930231f770" : "083a4576-f55b-4766-bf50-eb86db16b766";
      return category === currentCategorySelected.value;
    }

    function setBorderCurrentCategoryFilter () {
      return currentCategorySelected.value === "13da56cc-5122-4392-8766-de930231f770"
        ? "border-primary-green-dark text-primary-green-dark font-bold border-2"
        : currentCategorySelected.value === "8a11a207-806b-4381-a66d-312380079800"
          ? "border-primary-lemon-dark text-primary-lemon-dark font-bold border-2"
          : currentCategorySelected.value === "083a4576-f55b-4766-bf50-eb86db16b766"
            ? "border-secondary-orange-dark text-secondary-orange-dark font-bold border-2"
            : currentCategorySelected.value === "06c8e04e-6186-4348-b2b3-c92956593d94"
              ? "border-primary-olivia-dark text-primary-olivia-dark font-bold border-2"
              : "border-dark-normal text-dark-normal border";
    }

    function removeFilter () {
      if (!originalListProduct.modified) {
        showModal.value = false;
        return;
      }
      listProducts.value = originalListProduct.data;
      showModal.value = false;
      currentCategorySelected.value = "";
      scrollPageToListProducts();
    }

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

    return { dynamic: ref(49), allProducts: listProducts, loaderProduct, pending, showModal, currentCategorySelected, toggleSelectedCategory, filterCategoryCallToAction, isCategorySelected, setBorderCurrentCategoryFilter, removeFilter, scrollPageToListProducts };
  },
  head: {
    title: "Suplee"
  }
};
</script>
