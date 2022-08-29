<template>
  <div class="relative">
    <Html lang="pt-br">
      <Head>
        <Title>Meu carrinho</Title>
      </Head>
    </Html>

    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />

    <div class="w-screen min-h-screen bg-complement-background-soft">
      <organisms-header class="hidden md:block" />
      <main class="md:container mx-auto px-8 md:px-10 2xl:px-20 flex justify-center items-center mb-8" style="height: calc(100% - 6.5rem)">
        <div class="flex flex-1 flex-col justify-center">
          <div class="flex flex-col gap-2 xl:gap-3 2xl:gap-5 mt-2 xl:mt-3 2xl:mt-6">
            <atoms-title-page :title-page="'Carrinho de compras'" />

            <nav>
              <ul class="flex w-full justify-between">
                <li v-for="(step, index) in listOfSteps" :key="index">
                  <AtomsButtonStep :step="index+1" :title-step="step.stepTitle" :status="step.status" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StatusButtonStep } from "~~/types/purchaseFlow";

type TabStepCarShopping = {
  stepTitle: string,
  status: StatusButtonStep
}

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

function scrollToSection (section: string) {
  return section;
}

</script>
