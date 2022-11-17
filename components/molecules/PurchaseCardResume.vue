<template>
  <article class="flex flex-col justify-between w-full md:w-2/6 h-[60%] md:h-auto py-6 xl:py-8 2xl:py-16 px-4 sm:px-7 xl:px-14 2xl:px-[4.5rem] bg-complement-background-normal rounded-[0.625rem] md:rounded-tl-none md:rounded-bl-none md:rounded-tr-[0.625rem] md:rounded-br-[0.625rem] shadow-green-perso md:shadow-none relative before:hidden before:md:block before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-complement-background-soft">
    <div class="flex flex-col gap-3 xl:gap-6 2xl:gap-11">
      <div class="flex gap-6 items-center">
        <img src="/icons/icon-resume-carshopping.svg" width="56px" height="56px" class="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" alt="Icone para ilustrar card de resumo dos itens do carrinho">
        <h3 class="font-semibold text-lg xl:text-xl 2xl:text-2xl text-dark-light">
          Resumo
        </h3>
      </div>
      <div class="flex flex-col gap-2 xl:gap-3 2xl:gap-4 w-full">
        <span class="flex justify-between font-semibold">
          <p class="text-sm 2xl:text-base text-dark-light">Itens no carrinho:</p>
          <p class="text-base 2xl:text-lg text-dark-normal"><b>{{ storeCart.totalQuantityItensOnProduct }}</b></p>
        </span>
        <hr class="text-complement-background-gray">
        <span class="flex justify-between font-semibold">
          <p class="text-sm 2xl:text-base text-dark-light">Valor total:</p>
          <p class="text-base 2xl:text-lg text-dark-normal"><b>{{ totalPrice }}</b></p>
        </span>
      </div>
    </div>
    <div class="flex justify-center flex-row-reverse md:flex-col gap-3 sm:gap-4 xl:gap-3 2xl:gap-4 mt-4 md:mt-0">
      <button
        class="w-[55%] md:w-full flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border border-primary-olivia-dark bg-primary-olivia-dark rounded-md shadow-lg hover:bg-opacity-80 group transition-colors disabled:opacity-40 disabled:hover:opacity-40 disabled:transition-none disabled:cursor-not-allowed"
        :disabled="storeCart.totalQuantityItensOnProduct === 0"
        @click="handleClickNextStep"
      >
        <h4 class="font-semibold text-xs sm:text-sm 2xl:text-base text-complement-background-white transition-colors">
          Prosseguir para o pagamento
        </h4>
      </button>

      <a href="/#sessaoDeSuplementos" class="w-[45%] md:w-full">
        <button class="w-full flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border border-primary-olivia-dark bg-transparent rounded-md shadow hover:shadow-lg hover:bg-primary-olivia-medium group transition-all">
          <h4 class="font-semibold text-xs sm:text-sm 2xl:text-base text-primary-olivia-medium group-hover:text-complement-background-white group-hover:tracking-[0.075rem] transition-all">
            Continuar comprando
          </h4>
        </button>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";
import { StepsPurchase } from "~~/types/purchaseFlow";

const emitEventOnClickNextStep = defineEmits(["cartShopping"] as StepsPurchase[]);

const storeCart = useCart();

const totalPrice = computed(() => {
  return (useAccountBRL(storeCart.totalPrice)).value;
});

function handleClickNextStep () {
  emitEventOnClickNextStep("cartShopping");
}

</script>
