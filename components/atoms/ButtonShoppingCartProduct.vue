<template>
  <div :class="theme" class="flex justify-center items-center absolute bottom-10 -right-6 w-12 h-12 rounded-full text-[#FFF]">
    <ShoppingCartIcon class="h-6 w-6 text-current relative z-10" />
  </div>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";

defineProps<{
  theme: string | boolean
}>();

</script>
