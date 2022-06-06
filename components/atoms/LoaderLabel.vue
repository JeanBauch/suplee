<template>
  <Transition name="loader">
    <div v-if="isLoaderOpen" class="absolute z-30 w-full flex items-center justify-center">
      <div class="rounded-lg bg-primary-olivia-dark p-2 flex items-center justify-center gap-6">
        <div
          class="w-2 h-2 relative z-10 loader-label
          before:content-[''] before:absolute before:rounded-full before:mix-blend-multiply before:bg-complement-background-normal before:w-2 before:h-2 before:z-10
          after:content-[''] after:absolute after:rounded-full after:mix-blend-multiply after:bg-secondary-green-yellow-medium after:w-2 after:h-2 after:z-10 after:delay-500
          "
        />

        <p class="text-complement-background-white">
          <slot name="content-label" />
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

const propsLoader = defineProps<{
  show: boolean
}>();
const isLoaderOpen = ref(false);

watch(() => propsLoader.show, (show) => {
  isLoaderOpen.value = show;
});

</script>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition: all 0.25s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.loader-label::before,
.loader-label::after {
  animation: loading 1s infinite
  cubic-bezier(0.77, 0, 0.175, 1);
}
.loader-label::after {
  animation-delay: 500ms;
}
@keyframes loading {
  0%,100% {
    left: 6px;
  }
  25% {
    transform: scale(.3);
  }
  50% {
    left: 0;
  }
  75% {
    transform: scale(1);
  }
}
</style>
