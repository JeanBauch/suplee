<template>
  <div class="flex w-full max-w-[14rem] xl:max-w-none relative rounded-md">
    <input type="number" placeholder="Digite seu CEP" class="flex w-full h-full py-3 2xl:py-[0.875rem] pl-8 md:pl-9 2xl:pl-[2.625rem] rounded-md border border-secondary-green-gray-medium bg-complement-background-white text-primary-olivia-dark placeholder:text-secondary-green-gray-light placeholder:text-sm placeholder:sm:text-base">

    <div class="absolute w-9 2xl:w-[2.625rem] text-secondary-green-gray-light h-full flex justify-center items-center">
      <LocationMarkerIcon class="h-6 w-6 2xl:h-8 2xl:w-8 text-current relative z-10 stroke-1" />
    </div>

    <button class="absolute top-0 right-0 w-11 2xl:w-12 h-11 2xl:h-12 flex justify-center items-center bg-primary-olivia-dark rounded-tr-md rounded-br-md">
      <SearchIcon class="h-6 2xl:h-7 w-6 2xl:w-7 text-complement-background-white relative z-10 stroke-2" />
    </button>
  </div>
</template>

<script setup>
import { LocationMarkerIcon, SearchIcon } from "@heroicons/vue/outline";

</script>
