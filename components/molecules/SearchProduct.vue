<template>
  <div>
    <div v-if="callToAction" class="relative w-full">
      <input
        id="search-products-call-to-action"
        v-model="nameProductToSearch"
        type="text"
        name="search-products"
        placeholder="Digite aqui o produto que procura"
        class="w-full pl-5 pr-28 lg:pr-36 py-7 bg-complement-background-white rounded-lg shadow-green-perso overflow-hidden"
      >
      <span class="cursor-pointer" @click="$emit('searchProduct', nameProductToSearch)">
        <div class="absolute z-10 w-1/6 lg:w-1/5 h-full rounded-lg top-0 right-0 bg-primary-green-medium before:content-[''] before:absolute before:top-0 before:-left-8 before:z-[-1] before:h-full before:w-[60px] before:rounded-tl-full before:rounded-bl-full before:bg-primary-green-medium" />
        <SearchIcon class="absolute top-3 right-4 lg:right-6 w-14 h-14 text-complement-background-white z-10" />
      </span>
    </div>
    <div v-else-if="productListing" class="relative w-full">
      <input
        id="search-products-product-listing"
        v-model="nameProductToSearch"
        type="text"
        name="search-products"
        placeholder="Digite aqui o produto que procura"
        class="w-full p-4 bg-[#FFF] rounded-lg shadow-green-perso overflow-hidden"
      >
      <span class="cursor-pointer" @click="$emit('searchProduct', nameProductToSearch)">
        <div class="absolute z-10 w-20 h-full rounded-lg top-0 right-0 bg-primary-green-medium" />
        <SearchIcon class="absolute top-2 right-5 w-10 h-10 text-complement-background-white z-10" />
      </span>
    </div>
    <div v-else class="flex flex-1 md:hidden px-16 sm:px-24 py-10 mt-6 relative z-10">
      <div class="relative w-full">
        <input
          id="search-products"
          v-model="nameProductToSearch"
          type="text"
          name="search-products"
          placeholder="Digite aqui o produto que procura"
          class="w-full pl-14 pr-2 py-3 border border-primary-green-dark rounded-lg"
          @keyup.enter="$emit('searchProduct', nameProductToSearch)"
        >
        <SearchIcon class="absolute top-2 left-2 w-9 h-9 text-primary-green-dark" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";

defineProps<{
  callToAction?: boolean;
  productListing?: boolean;
}>();
defineEmits(["searchProduct"]);

const nameProductToSearch = ref("");

</script>
