<template>
  <div class="relative">
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - {{ produto.nome }}</Title>
      </Head>
    </Html>

    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />

    <section class="w-screen min-h-screen bg-complement-background-soft overflow-hidden">
      <organisms-header class="hidden md:block" />
      <main v-if="!pending" class="md:container mx-auto px-8 md:px-0 2xl:px-20 flex justify-center items-center mb-8" style="height: calc(100% - 6.5rem)">
        <div class="flex flex-1 flex-col justify-center">
          <atoms-title-page :title-page="produto.nome" />

          <atoms-breadcrumb :current-category="produto.categoria.nome" :current-product="produto.nome">
            <template #aside-category>
              <h4 class="font-medium text-lg 2xl:text-xl text-secondary-green-gray-dark hidden md:block">
                Categoria: <strong class="font-semibold">{{ produto.categoria.nome }}</strong>
              </h4>
            </template>
          </atoms-breadcrumb>

          <div class="flex flex-1 flex-col md:flex-row w-full gap-3 md:gap-6 mt-3 md:mt-2 xl:mt-4 2xl:mt-6 relative">
            <!-- Card Images -->
            <organisms-card-preview-images-product :current-category="produto.categoria.nome" />
            <!-- Card Product Details -->
            <organisms-card-details-product
              :product-details-info="{ description: produto.descricao, composition: produto.composicao, effects: produto.efeitos, nutritionalInformation: produto.informacaoNutricional }"
              :product-identifer="{ id: produto.id , name: produto.nome, category: produto.categoria }"
              :product-action-cart="{ price: produto.preco, availableQuantity: produto.quantidadeDisponivel }"
            />
          </div>
        </div>
      </main>
      <aside v-else>
        <p>Loading...</p>
      </aside>
    </section>
  </div>
</template>

<script lang="ts">
import { useBaseFetch } from "~~/composables/useBaseURL";
import { Product } from "~~/types/product";
export default {
  setup () {
    const route = useRoute();
    const product = reactive<Product>({
      name: "",
      category: {
        id: "",
        nome: ""
      },
      composition: "",
      description: "",
      effects: [
        {
          id: "",
          nome: ""
        }
      ],
      id: "",
      images: [],
      nutritionalInformation: [{
        header: "",
        nutritionalCompounds: [
          {
            composition: "",
            order: 0,
            portion: "",
            dailyValue: ""
          }
        ],
        legends: ""
      }],
      price: 0,
      availableQuantity: 0
    });

    const { pending, data: produto } = useBaseFetch(`/Catalogo/${route.params.id}`);

    function scrollToSection (section: string) {
      return section;
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
    return { product, pending, produto, scrollToSection };
  },
  head: {
    title: "Produto"
  }
};
</script>
