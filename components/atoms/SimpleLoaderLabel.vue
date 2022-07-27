<template>
  <Transition name="loader">
    <div v-if="isSimpleLoaderOpen" class="w-full flex items-center justify-center">
      <div class="rounded-lg p-4 flex items-center justify-center gap-6">
        <div
          class="w-4 h-4 relative z-10 loader-label
          before:content-[''] before:absolute before:rounded-full before:mix-blend-multiply before:bg-primary-olivia-dark before:w-4 before:h-4 before:z-10
          after:content-[''] after:absolute after:rounded-full after:mix-blend-multiply after:bg-primary-olivia-light after:w-4 after:h-4 after:z-10 after:delay-500
          "
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

const propsSimpleLoader = defineProps<{
  show: boolean,
}>();
const isSimpleLoaderOpen = ref(false);

watch(() => propsSimpleLoader.show, (show) => {
  isSimpleLoaderOpen.value = show;
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
    left: 13px;
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
