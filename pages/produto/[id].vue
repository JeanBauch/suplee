<template>
  <div class="relative">
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - {{ produto.nome }}</Title>
      </Head>
    </Html>

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
            <organisms-card-preview-images-product
              :current-category="produto.categoria.nome"
              :images="produto.imagens"
            />
            <!-- Card Product Details -->
            <organisms-card-details-product
              :product-details-info="{ description: produto.descricao, composition: produto.composicao, effects: produto.efeitos, nutritionalInformation: produto.informacaoNutricional }"
              :product-identifer="{ id: produto.id , name: produto.nome, category: produto.categoria, images: produto.imagens }"
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
// import { TypeEventsToPushRoute } from "~~/types/pushRouteEvents";

export default {
  setup () {
    const route = useRoute();
    const { pending, data: produto } = useBaseFetch(`/Catalogo/${route.params.id}`);

    return { pending, produto };
  },
  head: {
    title: "Produto"
  }
};
</script>
