<template>
  <div class="relative cursor-pointer" @click="handleClickUserHeader">
    <ShoppingCartIcon class="h-10 w-10 text-current relative z-10" />
    <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-complement-background-normal z-0 md:hidden shadow-lg" />
    <!-- <span v-if="storeCart.totalQuantityItensOnProduct > 0" class="absolute z-20 -top-2 -right-2 bg-complement-background-normal rounded-full border border-primary-olivia-medium w-4 h-4 2xl:w-6 2xl:h-6 flex justify-center items-center shadow-sm">
      <strong>
        <p class="font-bold text-current text-base w-full h-full flex justify-center items-center">{{ storeCart.totalQuantityItensOnProduct }}</p>
      </strong>
    </span> -->
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/solid";

const emitClickActionsCartShoppingHeader = defineEmits(["CartShopping"]);

function handleClickUserHeader () {
  emitClickActionsCartShoppingHeader("CartShopping");
}

</script>
