<template>
  <div :class="classObject.themeCategory" class="w-full xl:w-[60%] pb-5 pt-20 xl:pt-6 xl:p-6 2xl:p-8 -mt-16 mb-20 md:mb-0 xl:mt-0 rounded-b-3xl xl:rounded-tl-3xl xl:rounded-bl-3xl xl:rounded-br-none shadow-green-perso relative z-10">
    <div class="w-full h-full flex flex-1 flex-col px-5 xl:px-0">
      <div :class="classObject.lineColorCategory" class="flex flex-col gap-3 2xl:gap-4 pb-6 2xl:pb-7 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Descrição do Produto
        </h4>
        <p id="descriptionProduct" class="font-light text-justify text-base xl:text-sm 2xl:text-base text-complement-background-white text">
          {{ productDetailsInfo.description }}
          <span v-if="productDetailsInfo.description.length > 200" class="text-complement-background-white absolute bottom-0 right-0 text-base xl:text-sm 2xl:text-base ml-8 font-semibold cursor-pointer pl-3" @click="handleShowMoreDescription">
            {{ textSeeMoreDescription }}
          </span>
        </p>
      </div>
      <div :class="classObject.lineColorCategory" class="flex flex-col gap-3 2xl:gap-4 py-4 2xl:py-5 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Efeito
        </h4>
        <div :class="productDetailsInfo.effects.length < 2 ? 'justify-start' : productDetailsInfo.effects.length < 3 ? 'justify-around' : 'justify-between' " class="flex items-center">
          <div v-for="(efeito, index) in productDetailsInfo.effects" :key="index" class="flex flex-col justify-start items-center w-full max-w-[33%] h-full gap-1 group">
            <div class="bg-complement-background-white rounded-full flex items-center justify-center shadow p-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14">
              <!-- <img src="/icons/icon-imunity.svg" class="transition-all grayscale group-hover:grayscale-0" alt=""> -->
              <img
                v-if="efeito.nome === 'Imunidade'"
                src="/icons/icon-imunity.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito imunidade"
              >
              <img
                v-else-if="efeito.nome === 'Fortalecimento Muscular'"
                src="/icons/icon-muscle.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito de Fortalecimento Muscular"
              >
              <img
                v-else-if="efeito.nome === 'Fortificação Óssea'"
                src="/icons/icon-bone.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito de Fortificação Óssea"
              >
              <img
                v-else-if="efeito.nome === 'Memória'"
                src="/icons/icon-brain.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito Memória"
              >
              <img
                v-else-if="efeito.nome === 'Vitamina D'"
                src="/icons/icon-vit-d.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito Vitamina D"
              >
              <img
                v-else-if="efeito.nome === 'Relaxante'"
                src="/icons/icon-sleep.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito Relaxante"
              >
              <img
                v-else
                src="/icons/icon-imunity.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone imunidade"
              >
            </div>
            <p class="font-light xl:text-sm 2xl:text-base text-complement-background-white text-center flex items-center justify-center flex-1">
              {{ efeito.nome }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 2xl:gap-4 pt-4 2xl:pt-5 relative">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Composição
        </h4>
        <ul id="list-composition" class="pl-6 mb-4 columns-2 gap-16 columns-composition">
          <li v-for="(item, index) in textCompositionProduct" :key="index" class="font-light xl:text-sm 2xl:text-base text-complement-background-white list-disc">
            {{ item }}
          </li>
        </ul>
        <span :class="classObject.themeCategory" class="text-complement-background-white absolute -bottom-2 xl:-bottom-6 right-0 text-base xl:text-sm 2xl:text-base ml-8 font-semibold cursor-pointer pl-4 rounded-full" @click="handleShowMoreComposition">
          {{ textSeeMoreComposition }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DescriptionProductDetails } from "~~/types/product";

const propsCardDescriptionProduct = defineProps<{
  productDetailsInfo: DescriptionProductDetails,
  currentCategory: string,
}>();

const textCompositionProduct = ref([""]);
textCompositionProduct.value = propsCardDescriptionProduct.productDetailsInfo.composition.split(",");

const textSeeMoreDescription = ref("ler mais");
const textSeeMoreComposition = ref(`Ver todas (${textCompositionProduct.value.length})`);

const classObject = computed(() => ({
  themeCategory: propsCardDescriptionProduct.currentCategory === "Vitaminas"
    ? "bg-primary-green-dark"
    : propsCardDescriptionProduct.currentCategory === "Proteínas"
      ? "bg-primary-lemon-dark"
      : propsCardDescriptionProduct.currentCategory === "Minerais" ? "bg-secondary-orange-dark" : propsCardDescriptionProduct.currentCategory === "Ômega-3" && "bg-primary-olivia-dark",

  lineColorCategory: propsCardDescriptionProduct.currentCategory === "Vitaminas"
    ? "after:bg-secondary-green-gray-dark"
    : propsCardDescriptionProduct.currentCategory === "Proteínas"
      ? "after:bg-secondary-green-gray-light"
      : propsCardDescriptionProduct.currentCategory === "Minerais" ? "after:bg-secondary-green-gray-light" : propsCardDescriptionProduct.currentCategory === "Ômega-3" && "after:bg-secondary-green-gray-dark"
}));

function handleShowMoreDescription () {
  const element:HTMLElement | null = document.getElementById("descriptionProduct");
  element?.classList.toggle("text");
  if (element?.classList.contains("text")) { textSeeMoreDescription.value = "ler mais"; } else { textSeeMoreDescription.value = "ler menos"; }
}

function handleShowMoreComposition () {
  const element:HTMLElement | null = document.getElementById("list-composition");
  element?.classList.toggle("columns-composition");
  if (element?.classList.contains("columns-composition")) { textSeeMoreComposition.value = `Ver mais (${textCompositionProduct.value.length})`; } else { textSeeMoreComposition.value = "Ver menos"; }
}

</script>

<style scoped>
.text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 1.5rem;     /* fallback */
   max-height: 7.5rem;      /* fallback */
   -webkit-line-clamp: 5; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.columns-composition {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5rem;     /* fallback */
  max-height: 4.5rem;      /* fallback */
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
