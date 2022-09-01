<template>
  <main class="md:container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 flex flex-col justify-start items-center" style="height: calc(100vh - 6.5rem)">
    <molecules-purchase-tabs-wrapper :list-of-steps="listOfSteps" @toggle-tab="handleToggleTab" />

    <organisms-purchase-flow-car-shopping v-if="selectTab === 1" />
  </main>
</template>

<script setup lang="ts">
import { TabStepCarShopping } from "~~/types/purchaseFlow";

const listOfSteps = reactive<TabStepCarShopping[]>([
  {
    stepTitle: "Produtos",
    status: "done"
  },
  {
    stepTitle: "Identificação",
    status: "current"
  },
  {
    stepTitle: "Pagamento",
    status: "disable"
  },
  {
    stepTitle: "Conclusão",
    status: "disable"
  }
]);
const selectTab = ref(1);

function handleToggleTab (i: number) {
  if (listOfSteps[i - 1].status !== "disable") { selectTab.value = i; }
}

</script>
