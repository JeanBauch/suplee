<template>
  <button
    class="w-[80%] py-4 rounded-md flex justify-center items-center bg-primary-green-dark relative overflow-hidden transition-all duration-300
          before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)]
          before:transition-all before:duration-700 before:z-[2] before:-translate-x-56 before:-skew-x-12
          hover:before:translate-x-[420px] hover:bg-primary-olivia-medium
        "
    @click="handleClickButtonStepUser"
  >
    <div
      v-show="isPending"
      class="w-3 h-3 absolute z-10 loader-label right-12
              before:content-[''] before:absolute before:rounded-full before:mix-blend-multiply before:bg-complement-background-normal before:w-3 before:h-3 before:z-10
              after:content-[''] after:absolute after:rounded-full after:mix-blend-multiply after:bg-secondary-green-yellow-medium after:w-3 after:h-3 after:z-10 after:delay-500
            "
    />
    <h2 class="font-semibold text-xl text-complement-background-white capitalize">
      {{ labelButton }}
    </h2>
  </button>
</template>

<script setup lang="ts">

const emitClickButtonStepUser = defineEmits(["NextStepUser"]);
const propsButtonNextStepUser = defineProps<{
  labelButton: string,
  pending: boolean,
}>();

const isPending = ref(false);

watch(() => propsButtonNextStepUser.pending, (value) => {
  isPending.value = value;
});

function handleClickButtonStepUser () {
  emitClickButtonStepUser("NextStepUser");
}
</script>

<style scoped>
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
    left: 10px;
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
