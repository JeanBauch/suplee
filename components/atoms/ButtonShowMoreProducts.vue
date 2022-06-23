<template>
  <button
    class="
      flex justify-center items-center gap-1 text-primary-olivia-dark relative py-2 group
      before:content-[''] before:absolute before:w-full before:h-1 before:rounded before:bg-primary-olivia-dark before:bottom-0 before:left-0 before:origin-right
      before:scale-x-0 before:transition-transform before:duration-300
      hover:before:origin-left hover:before:scale-x-100
    "
    @click="$emit('handleClickSeeMoreProduct')"
  >
    <PlusSmIcon class="h-6 w-6 text-lg text-current relative z-10" />
    <h3 class="font-bold text-lg text-dark-normal">
      Ver mais produtos
    </h3>
  </button>
</template>

<script setup>
import { PlusSmIcon } from "@heroicons/vue/solid";

defineEmits(["handleClickSeeMoreProduct"]);

</script>
