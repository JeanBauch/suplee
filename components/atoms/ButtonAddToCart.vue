<template>
  <button
    :class="classColorCurrentCatergory"
    class="flex justify-center items-center w-full px-5 py-3 rounded-lg shadow"
    @click="handleClickButton"
  >
    <h4 class="font-semibold text-[#FFF] text-xl">
      Adicionar ao carrinho
    </h4>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  classColorCurrentCatergory: string | false,
}>();
const emitClickButtonAdd = defineEmits(["addProductToCart"]);

function handleClickButton () {
  emitClickButtonAdd("addProductToCart");
}
</script>
