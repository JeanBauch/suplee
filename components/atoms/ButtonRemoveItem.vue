<template>
  <span class="flex flex-col items-center justify-center text-[#CC0000] cursor-pointer" @click="handleClickButtonRemoveItem">
    <TrashIcon class="h-7 w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10 relative z-10 stroke-[1]" />
    <p class="text-xs xl:text-sm select-none">Remover</p>
  </span>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/outline";
const emitClickButtonRemoveItem = defineEmits(["removeItem"]);

function handleClickButtonRemoveItem () {
  emitClickButtonRemoveItem("removeItem");
}

</script>
