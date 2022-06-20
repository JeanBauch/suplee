<template>
  <div class="relative">
    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />
    <section class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
      <atoms-bg-hero />
      <organisms-header @search-product="searchProductName" />
      <organisms-call-to-action-home-page @select-category-filter="filterCategoryCallToAction" @search-product="searchProductName" />
    </section>
    <section class="bg-complement-background-normal min-h-screen">
      <div class="md:container mx-auto">
        <!-- Heading -->
        <div id="titleListProduct" class="flex items-start px-4 sm:px-8 md:px-0 pt-8 pb-4 md:border-none border-b border-secondary-green-gray-medium">
          <h2 class="font-semibold text-2xl md:font-bold lg:text-3xl text-dark-normal">
            Todos os produtos
          </h2>
          <div class="hidden lg:flex flex-1 justify-center items-center">
            <div class="relative w-[28rem] flex flex-col gap-2">
              <molecules-search-product product-listing @search-product="searchProductName" />
              <h3 v-if="currentProductNameToSearch != '' " class="text-center font-light pr-16">
                <span class="font-bold">
                  {{ currentCountProductSearch }}
                </span>
                suplementos encontrados com
                <span class="font-bold">
                  "{{ currentProductNameToSearch }}"
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div id="productsFiltered" />
        <!-- Filter Mobile-->
        <div class="bg-complement-background-normal px-4 sm:px-8 py-5 shadow-lg lg:hidden">
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
        <div class="flex md:justify-between">
          <!-- Filter Desktop-->
          <div class="hidden lg:flex flex-col gap-3">
            <div class="bg-[#FFF] rounded-2xl w-72 shadow-lg mt-16">
              <div class="p-6 border-b border-b-secondary-green-gray-light">
                <h3 class="text-2xl font-medium">
                  Categorias
                </h3>
              </div>
              <nav>
                <ul class="mb-7 text-2xl font-light flex flex-col text-dark-normal">
                  <li :class="isCategorySelected('Vitaminas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer" @click="toggleSelectedCategory('Vitaminas')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-green-dark" />
                      <span>
                        Vitaminas
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Vitaminas')" class="h-8 w-8 text-primary-green-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Proteínas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer" @click="toggleSelectedCategory('Proteínas')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-lemon-dark" />
                      <span>
                        Proteínas
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Proteínas')" class="h-8 w-8 text-primary-lemon-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Minerais') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer" @click="toggleSelectedCategory('Minerais')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-secondary-orange-medium" />
                      <span>
                        Minerais
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Minerais')" class="h-8 w-8 text-secondary-orange-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Ômega-3') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer" @click="toggleSelectedCategory('Ômega-3')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-olivia-dark" />
                      <span>
                        Ômega-3
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Ômega-3')" class="h-8 w-8 text-primary-olivia-dark relative z-10" />
                    </div>
                  </li>
                  <li class="px-6 pt-4 text-dark-normal flex items-center justify-start cursor-pointer" @click="removeFilter">
                    <span>
                      Listar todas
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div v-if="pending">
            <p>Loading...</p>
          </div>
          <main v-else class="w-full lg:max-w-6xl px-4 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 grid-rows-4 gap-4 lg:gap-16 pb-28 relative">
            <atoms-loader-label :show="loaderProduct">
              <template #content-label>
                <span>Buscando seus produtos...</span>
              </template>
            </atoms-loader-label>
            <div v-for="(produto, index) in allProducts" :key="index">
              <organisms-card-product :produto="produto" />
            </div>
          </main>
        </div>
      </div>
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
    const currentProductNameToSearch = ref("");
    const currentCountProductSearch = ref(0);
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
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome-categoria?nomeCategoria=${currentCategorySelected.value}`);
        listProducts.value = (await res.json());
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    watch(currentProductNameToSearch, async () => {
      if (currentProductNameToSearch.value === "") {
        return;
      }
      loaderProduct.value = true;
      if (!originalListProduct.modified) {
        originalListProduct.data = listProducts.value;
        originalListProduct.modified = true;
      }
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome?nome=${currentProductNameToSearch.value}`);
        listProducts.value = (await res.json());
        currentCountProductSearch.value = listProducts.value.length;
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    function toggleSelectedCategory (category) {
      currentCategorySelected.value = category;
      showModal.value = false;
      toggleProductNameToSearch("");
      scrollPageToListProducts();
    }

    function toggleProductNameToSearch (productName) {
      currentProductNameToSearch.value = productName;
      scrollPageToListProducts();
    }

    function filterCategoryCallToAction (category) {
      toggleSelectedCategory(category);
    }

    function searchProductName (productName) {
      toggleSelectedCategory("");
      toggleProductNameToSearch(productName);
    }

    function scrollToSection (section) {
      if (section === "ViewTopPage") {
        scrollPageToTop();
      } else if (section === "ViewListProduct") {
        scrollPageToListProducts();
      }
    }

    function scrollPageToListProducts () {
      let element;
      if (window.screen.height > 1024) {
        element = document.querySelector("#titleListProduct");
      } else {
        element = document.querySelector("#productsFiltered");
      }
      element.scrollIntoView({ behavior: "smooth" });
    }

    function scrollPageToTop () {
      const element = document.querySelector("body");
      element.scrollIntoView({ behavior: "smooth" });
    }

    function isCategorySelected (category) {
      // category = category === "Proteínas" ? "8a11a207-806b-4381-a66d-312380079800" : category === "Ômega-3" ? "06c8e04e-6186-4348-b2b3-c92956593d94" : category === "Vitaminas" ? "13da56cc-5122-4392-8766-de930231f770" : "083a4576-f55b-4766-bf50-eb86db16b766";
      return category === currentCategorySelected.value;
    }

    function setBorderCurrentCategoryFilter () {
      return currentCategorySelected.value === "Vitaminas"
        ? "border-primary-green-dark text-primary-green-dark font-bold border-2"
        : currentCategorySelected.value === "Proteínas"
          ? "border-primary-lemon-dark text-primary-lemon-dark font-bold border-2"
          : currentCategorySelected.value === "Minerais"
            ? "border-secondary-orange-dark text-secondary-orange-dark font-bold border-2"
            : currentCategorySelected.value === "Ômega-3"
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
      currentProductNameToSearch.value = "";
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

    return { dynamic: ref(49), allProducts: listProducts, loaderProduct, pending, showModal, currentCategorySelected, currentProductNameToSearch, currentCountProductSearch, toggleSelectedCategory, filterCategoryCallToAction, searchProductName, isCategorySelected, setBorderCurrentCategoryFilter, removeFilter, scrollToSection };
  },
  head: {
    title: "Suplee"
  }
};
</script>
