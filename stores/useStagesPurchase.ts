import { defineStore } from "pinia";
import { StepsPurchase, TabStepCarShopping } from "~~/types/purchaseFlow";

export const useStagesPurchase = defineStore("stages-purchase", () => {
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

  function nextStep (stage: StepsPurchase) {
    listOfSteps.forEach((step, index) => {
      if (step.cod === stage) {
        step.status = "done";
        listOfSteps[index + 1].status = "current";
        toggleSelectTab(index + 1);
      }
    });
  }

  function toggleSelectTab (tab: number) {
    selectTab.value = tab;
  }

  return {
    listOfSteps,
    selectTab,
    nextStep,
    toggleSelectTab
  };
});
