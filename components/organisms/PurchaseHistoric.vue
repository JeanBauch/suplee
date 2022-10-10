<template>
  <main class="md:container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 flex flex-col gap-16 justify-start items-center main-content-full-height pt-12 pb-24 md:pb-0">
    <h1 class="font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-primary-olivia-medium">
      Histórico de compras
    </h1>
    <div class="w-full h-10 bg-complement-background-white">
      <molecules-purchase-historic-list-product class="hidden sm:block" />
      <div class="sm:hidden px-5 py-7 rounded-[0.625rem] bg-complement-background-white shadow-green-perso">
        <div class="flex flex-col gap-3 overflow-auto" style="max-height: calc(100vh - 87.5px - 375px);">
          <div v-for="product in storeCart.cart.products" :key="product.id" class="flex flex-col gap-3">
            <molecules-purchase-card-product-cart-shopping :id="product.id" />
            <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";

const storeCart = useCart();

</script>
