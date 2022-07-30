<template>
  <div :class="classObjectToPreviewImage.borderThemeCategory" class="flex flex-col items-center justify-around lg:justify-between gap-6 lg:gap-0 h-full xl:h-[33.25rem] 2xl:h-[38.75rem] w-full md:w-4/12 2xl:w-5/12 p-5 xl:p-12 2xl:p-16 bg-complement-background-white rounded-[0.625rem] shadow-green-perso relative z-20 border-b-4">
    <div class="drop-shadow-2xl w-1/2">
      <img src="/bg-complement/imagem-suplemento-modelo.svg" class="w-full" alt="Imagem de modelo de suplemento alimentar">
    </div>
    <div class="flex w-full justify-center items-center">
      <div class="flex justify-center items-center w-20 h-20">
        <img src="/bg-complement/item-example.svg" width="47" height="71" class="scale-[.85] md:scale-100" alt="Imagem de modelo de suplemento alimentar - variação 01">
      </div>
      <div class="flex justify-center items-center w-20 h-20 border border-primary-olivia-dark">
        <img src="/bg-complement/item-example.svg" width="47" height="71" class="scale-[.85] md:scale-100" alt="Imagem de modelo de suplemento alimentar - variação 01">
      </div>
      <div class="flex justify-center items-center w-20 h-20">
        <img src="/bg-complement/item-example.svg" width="47" height="71" class="scale-[.85] md:scale-100" alt="Imagem de modelo de suplemento alimentar - variação 01">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const propsPreviewImagesProduct = defineProps<{
  currentCategory: string,
}>();

const classObjectToPreviewImage = computed(() => ({
  borderThemeCategory: propsPreviewImagesProduct.currentCategory === "Vitaminas"
    ? "border-primary-green-dark"
    : propsPreviewImagesProduct.currentCategory === "Proteínas"
      ? "border-primary-lemon-dark"
      : propsPreviewImagesProduct.currentCategory === "Minerais" ? "border-secondary-orange-dark" : propsPreviewImagesProduct.currentCategory === "Ômega-3" && "border-primary-olivia-dark"
}));

</script>
