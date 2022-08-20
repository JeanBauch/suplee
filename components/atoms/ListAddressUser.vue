<template>
  <div class="w-full flex items-center pb-1 relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-primary-olivia-dark after:rounded-full">
    <h3 class="font-semibold text-lg text-primary-olivia-dark w-14">
      Casa:
    </h3>
    <p class="text-dark-normal ml-4 pr-6 md:pr-0">
      Rua Demercia Alves, 250 - Torre B Apto. 61 - Sorocaba/SP - 18016085
    </p>
    <TrashIcon class="absolute right-0 h-6 w-6 text-[#912f3c] z-10 cursor-pointer" />
  </div>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/outline";

</script>
