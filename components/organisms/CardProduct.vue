<template>
  <div class="w-full h-80 flex items-end">
    <div class="w-[90%] h-[80%] pl-4 pr-6 bg-[#FFF] relative z-20 rounded-xl shadow-md">
      <div class="flex justify-center relative -top-1/4">
        <img src="/bg-complement/item-example.svg" class="drop-shadow-xl" alt="">
      </div>
      <div class="absolute top-6 left-3">
        <img :src="`/icons/${classObject.icons}`" class="-rotate-12 opacity-80" width="28" height="28" alt="Icone para representar que o produto selecionado se trate da categoria Imunidade">
      </div>
      <article class="relative z-30 -top-1/4">
        <h4 class="text-base text-dark-normal font-semibold mb-4 truncate ">
          {{ produto.nome }}
        </h4>

        <div class="flex flex-col gap-2 w-[85%]">
          <div class="flex justify-between text-sm">
            <span class="text-secondary-green-gray-dark font-normal">Caterogia:</span>
            <p class="text-dark-normal font-light">
              {{ produto.nomeCategoria }}
            </p>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-secondary-green-gray-dark font-normal">Efeito:</span>
            <p v-if="produto.nomeEfeito === 'Fortificação Óssea'" class="text-dark-normal font-light">
              <abbr title="Fortificação Óssea"> Fort. Óssea</abbr>
            </p>
            <p v-else class="text-dark-normal font-light">
              {{ produto.nomeEfeito }}
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center mt-4">
          <h4 class="text-lg text-dark-normal font-semibold mb-4">
            {{ accountBRL }}
          </h4>
        </div>
      </article>

      <div class="absolute z-20 bottom-2 left-0 w-full h-8 bg-[#FFF] rounded-b-xl" />
      <div :class="classObject.theme" class="absolute z-10 bottom-0 left-0 w-full h-8 rounded-b-xl" />

      <atoms-button-shopping-cart-product :theme="classObject.theme" />
      <atoms-button-quick-view-product />
    </div>
  </div>
</template>

<script setup lang="ts">

type ProductCard = {
  imagem: string,
  nome: string,
  nomeCategoria: string,
  nomeEfeito: string
  preco:number,
};

const propsValue = defineProps<{
  produto: ProductCard
}>();

const classObject = computed(() => ({
  theme: propsValue.produto.nomeCategoria === "Vitaminas"
    ? "bg-primary-green-dark"
    : propsValue.produto.nomeCategoria === "Proteínas"
      ? "bg-primary-lemon-dark"
      : propsValue.produto.nomeCategoria === "Minerais" ? "bg-secondary-orange-medium" : propsValue.produto.nomeCategoria === "Ômega-3" && "bg-primary-olivia-dark",

  icons: propsValue.produto.nomeCategoria === "Vitaminas"
    ? "icon-imunity.svg"
    : propsValue.produto.nomeCategoria === "Proteínas"
      ? "icon-muscle.svg"
      : propsValue.produto.nomeCategoria === "Minerais" ? "icon-bone.svg" : propsValue.produto.nomeCategoria === "Ômega-3" && "icon-brain.svg"
}));

const accountBRL = computed(() => {
  return "R$ " + propsValue.produto.preco.toFixed(2);
});

</script>
