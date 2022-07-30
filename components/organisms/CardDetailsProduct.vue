<template>
  <div class="flex w-full md:w-8/12 2xl:w-7/12">
    <div class="flex flex-1 w-full flex-col-reverse xl:flex-row">
      <molecules-card-description-product :product-details-info="productDetailsInfo" :current-category="productIdentifer.category.nome" />

      <molecules-card-call-to-action-cart :product-identifer="productIdentifer" :product-action-cart="productActionCart" :current-category="productIdentifer.category.nome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductActionCart, ProductIdentifer, DescriptionProductDetails } from "~~/types/product";

defineProps<{
  productActionCart: ProductActionCart,
  productIdentifer: ProductIdentifer,
  productDetailsInfo: DescriptionProductDetails,
}>();

</script>
