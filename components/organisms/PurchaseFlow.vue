<template>
  <main class="md:container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 flex flex-col justify-start items-center main-content-full-height pb-24 md:pb-0">
    <molecules-purchase-tabs-wrapper :list-of-steps="listOfSteps" @toggle-tab="handleToggleTab" />

    <organisms-purchase-flow-car-shopping v-if="storeStagesPurchase.selectTab === 0" @cart-shopping="nextStep" />
    <organisms-purchase-flow-login-user v-else-if="storeStagesPurchase.selectTab === 1" @identification="nextStep" />
    <organisms-purchase-flow-payment v-else-if="storeStagesPurchase.selectTab === 2" @payment="nextStep" />
    <organisms-purchase-flow-conclusion v-else-if="storeStagesPurchase.selectTab === 3" />
  </main>
</template>

<script setup lang="ts">
import { useStagesPurchase } from "~~/stores/useStagesPurchase";
import { StepsPurchase } from "~~/types/purchaseFlow";

const storeStagesPurchase = useStagesPurchase();
const listOfSteps = storeStagesPurchase.listOfSteps;

function handleToggleTab (i: number) {
  if (listOfSteps[i].status !== "disable") {
    storeStagesPurchase.toggleSelectTab(i);
  }
}

function nextStep (stage: StepsPurchase) {
  storeStagesPurchase.nextStep(stage);
}

</script>
