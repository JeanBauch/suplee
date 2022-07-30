<template>
  <button :class="classColorCurrentCatergory" class="flex justify-center items-center w-full px-5 py-3 rounded-lg shadow">
    <h4 class="font-semibold text-[#FFF] text-xl">
      Adicionar ao carrinho
    </h4>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  classColorCurrentCatergory: string | false,
}>();
</script>
