<template>
  <button class="flex flex-col md:flex-row gap-2 lg:gap-4 justify-center items-center" @click="handleClickStep">
    <div :class="classObjectButtonStep.background" class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20 rounded-full flex justify-center items-center">
      <span v-if="status === 'done'">
        <CheckIcon class="w-6 h-6 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10 text-complement-background-white relative z-10" />
      </span>
      <span v-else class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] text-complement-background-white">
        {{ step }}
      </span>
    </div>
    <h3 :class="classObjectButtonStep.textColor" class="font-semibold text-xs sm:text-lg xl:text-xl">
      {{ titleStep }}
    </h3>
  </button>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/solid";
import { StatusButtonStep } from "~~/types/purchaseFlow";

const propsButtonStep = defineProps<{
  titleStep: string,
  status: StatusButtonStep,
  step: number,
}>();

const emitClickToggleTab = defineEmits(["toggleTab"]);

const classObjectButtonStep = computed(() => ({
  background: propsButtonStep.status === "current"
    ? "bg-primary-olivia-medium"
    : propsButtonStep.status === "disable"
      ? "bg-secondary-green-gray-light"
      : propsButtonStep.status === "done" &&
        "bg-primary-olivia-medium bg-opacity-80",

  textColor: propsButtonStep.status === "current"
    ? "text-primary-olivia-medium"
    : propsButtonStep.status === "disable"
      ? "text-secondary-green-gray-light"
      : propsButtonStep.status === "done" &&
        "text-primary-olivia-medium text-opacity-80"
}));

function handleClickStep () {
  emitClickToggleTab("toggleTab", propsButtonStep.step);
}

</script>
