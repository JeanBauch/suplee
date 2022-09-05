<template>
  <div class="relative cursor-pointer" @click="handleClickUserHeader">
    <ShoppingCartIcon class="h-10 w-10 text-current relative z-10" />
    <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-complement-background-normal z-0 md:hidden shadow-lg" />
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/solid";

const emitClickActionsCartShoppingHeader = defineEmits(["CartShopping"]);

function handleClickUserHeader () {
  emitClickActionsCartShoppingHeader("CartShopping");
}

</script>
