<template>
  <div class="border border-complement-background-gray p-2 rounded mt-4 cursor-pointer">
    <div class="bg-primary-olivia-dark text-complement-background-white font-bold px-3 py-3 rounded" @click="isOpen = !isOpen">
      {{ title }}
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="my-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  titleAccordion?: string
}>();
const isOpen = ref(false);
const title = ref(props.titleAccordion);
</script>
