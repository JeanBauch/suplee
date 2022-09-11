<template>
  <div :class="classObjectToPreviewImage.borderThemeCategory" class="flex flex-col items-center justify-around lg:justify-between gap-6 lg:gap-0 h-full xl:h-[33.25rem] 2xl:h-[38.75rem] w-full md:w-4/12 2xl:w-5/12 p-5 xl:p-12 2xl:p-16 bg-complement-background-white rounded-[0.625rem] shadow-green-perso relative z-20 border-b-4">
    <div class="w-1/2" style="filter: drop-shadow(0 50px 25px rgb(0 0 0 / 0.35))">
      <img
        :src="images[0].urlImagemMaior"
        width="423"
        height="423"
        loading="lazy"
        class="w-full"
        alt="Imagem de modelo de suplemento alimentar"
      >
    </div>
    <div class="flex w-full justify-center items-center">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="index === 0 && 'border border-primary-olivia-dark rounded'"
        class="flex justify-center items-center w-20 h-20"
      >
        <img
          :src="image.urlImagemReduzida"
          width="47"
          height="71"
          class="scale-[.85] md:scale-100"
          alt="Imagem de modelo de suplemento alimentar - variação 01"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagesProduct } from "~~/types/product";

const propsPreviewImagesProduct = defineProps<{
  currentCategory: string,
  images: ImagesProduct[],
}>();

const classObjectToPreviewImage = computed(() => ({
  borderThemeCategory: propsPreviewImagesProduct.currentCategory === "Vitaminas"
    ? "border-primary-green-dark"
    : propsPreviewImagesProduct.currentCategory === "Proteínas"
      ? "border-primary-lemon-dark"
      : propsPreviewImagesProduct.currentCategory === "Minerais" ? "border-secondary-orange-dark" : propsPreviewImagesProduct.currentCategory === "Ômega-3" && "border-primary-olivia-dark"
}));

</script>
