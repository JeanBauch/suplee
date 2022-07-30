<template>
  <div :class="classColorCurrentCatergory" class="relative">
    <PlusIcon class="w-6 h-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 text-current relative z-10" />
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/solid";

defineProps<{
  classColorCurrentCatergory: string | false,
}>();

</script>
