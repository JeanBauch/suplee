<template>
  <section class="container mx-auto 2xl:px-20 mt-4 xl:mt-6 2xl:mt-20">
    <div class="flex flex-col md:flex-row md:gap-4 xl:gap-0">
      <molecules-aside-home-page />
      <molecules-main-buttons-filters @select-category-filter="mostra" @search-product="searchProductName" />
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["selectCategoryFilter", "searchProduct"]);
function mostra (category) {
  emit("selectCategoryFilter", category);
}

function searchProductName (productName) {
  emit("searchProduct", productName);
}
</script>
