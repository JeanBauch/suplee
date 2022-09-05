<template>
  <main class="md:container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 flex flex-col justify-start items-center main-content-full-height pb-24 md:pb-0">
    <molecules-purchase-tabs-wrapper :list-of-steps="listOfSteps" @toggle-tab="handleToggleTab" />

    <organisms-purchase-flow-car-shopping v-if="selectTab === 0" @cart-shopping="nextStep" />
    <organisms-purchase-flow-login-user v-else-if="selectTab === 1" />
  </main>
</template>

<script setup lang="ts">
import { StepsPurchase, TabStepCarShopping } from "~~/types/purchaseFlow";

const listOfSteps = reactive<TabStepCarShopping[]>([
  {
    stepTitle: "Produtos",
    status: "current",
    cod: "cartShopping"
  },
  {
    stepTitle: "Identificação",
    status: "disable",
    cod: "identification"
  },
  {
    stepTitle: "Pagamento",
    status: "disable",
    cod: "payment"
  },
  {
    stepTitle: "Conclusão",
    status: "disable",
    cod: "conclusion"
  }
]);
const selectTab = ref(0);

function handleToggleTab (i: number) {
  if (listOfSteps[i].status !== "disable") { selectTab.value = i; }
}

function nextStep (stage: StepsPurchase) {
  // add logic
  listOfSteps.forEach((step, index) => {
    if (step.cod === stage) {
      step.status = "done";
      listOfSteps[index + 1].status = "current";
      selectTab.value = index + 1;
    }
  });
}

</script>
