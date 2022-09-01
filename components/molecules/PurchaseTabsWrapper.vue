<template>
  <div class="flex flex-col w-full gap-2 xl:gap-3 2xl:gap-5 mt-2 xl:mt-0 2xl:mt-3">
    <atoms-title-page :title-page="'Carrinho de compras'" />

    <nav>
      <ul class="flex w-full justify-between">
        <li v-for="(step, index) in listOfSteps" :key="index">
          <AtomsButtonStep :step="index+1" :title-step="step.stepTitle" :status="step.status" @toggle-tab="handleClickStep" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { TabStepCarShopping } from "~~/types/purchaseFlow";

const emitClickToggleTab = defineEmits(["toggleTab"]);
defineProps<{
  listOfSteps: TabStepCarShopping[]
}>();

function handleClickStep (i: number) {
  emitClickToggleTab("toggleTab", i);
}
</script>
