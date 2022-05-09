<template>
  <div class="flex flex-1 md:hidden px-16 sm:px-24 py-10 mt-6 relative z-10">
    <div class="relative w-full">
      <input id="search-products" type="text" name="search-products" placeholder="Digite aqui o produto que procura" class="w-full pl-14 pr-2 py-3 border border-primary-green-dark rounded-lg">
      <SearchIcon class="absolute top-2 left-2 w-9 h-9 text-primary-green-dark" />
    </div>
  </div>
</template>

<script setup>
import { SearchIcon } from "@heroicons/vue/outline";

</script>
