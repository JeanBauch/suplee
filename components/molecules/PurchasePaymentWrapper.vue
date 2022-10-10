<template>
  <div class="w-full h-full flex flex-col md:flex-row shadow-green-perso-desktop gap-5 md:gap-0 relative">
    <div class="w-full md:w-1/4 h-full flex flex-col gap-2 xl:gap-4 2xl:gap-6 justify-center items-center bg-complement-background-white rounded-tl-[0.625rem] rounded-bl-[0.625rem] px-8 py-8 md:px-0 md:py-0 shadow-green-perso md:shadow-none">
      <div class="flex flex-col gap-8">
        <h3 class="text-center font-bold text-xl lg:text-2xl text-primary-olivia-medium">
          Formas de pagamento
        </h3>
        <div class="flex flex-col gap-4">
          <button
            :class="selectTypePayment === 'cardCredit' ? 'border-primary-olivia-medium bg-primary-olivia-medium' : 'border-primary-olivia-medium bg-transparent'"
            class="w-full flex items-center justify-start gap-6 py-4 px-2 xl:py-3 xl:px-4 2xl:py-4 2xl:px-6 border rounded-md shadow-lg hover:bg-opacity-80 group transition-colors"
            @click="toggleTypePayment('cardCredit')"
          >
            <CreditCardIcon
              :class="selectTypePayment === 'cardCredit' ? 'text-complement-background-white' : 'text-primary-olivia-medium'"
              class="h-10 w-10 text-complement-background-white relative z-10 stroke-2"
            />
            <h4
              :class="selectTypePayment === 'cardCredit' ? 'text-complement-background-white' : 'text-primary-olivia-medium'"
              class="font-semibold text-xs sm:text-sm 2xl:text-base transition-colors"
            >
              Cartão de crédito
            </h4>
          </button>
          <button
            :class="selectTypePayment === 'cardSuplee' ? 'border-primary-olivia-medium bg-primary-olivia-medium' : 'border-primary-olivia-medium bg-transparent'"
            class="w-full flex items-center justify-start gap-6 py-4 px-2 xl:py-3 xl:px-4 2xl:py-4 2xl:px-6 border border-primary-olivia-dark bg-primary-olivia-dark rounded-md shadow-lg hover:bg-opacity-80 group transition-colors"
            @click="toggleTypePayment('cardSuplee')"
          >
            <CreditCardIcon
              :class="selectTypePayment === 'cardSuplee' ? 'text-complement-background-white' : 'text-primary-olivia-medium'"
              class="h-10 w-10 text-complement-background-white relative z-10 stroke-2"
            />
            <h4
              :class="selectTypePayment === 'cardSuplee' ? 'text-complement-background-white' : 'text-primary-olivia-medium'"
              class="font-semibold text-xs sm:text-sm 2xl:text-base text-complement-background-white transition-colors"
            >
              Cartão Suplee
            </h4>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full md:w-3/4 h-full flex flex-col justify-between bg-complement-background-normal rounded-tr-[0.625rem] rounded-br-[0.625rem] px-8 py-8 md:px-14 md:py-8 lg:px-16 lg:py-10 xl:px-20 2xl:px-24 xl:py-12 2xl:py-14 shadow-green-perso md:shadow-none relative before:hidden before:md:block before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-secondary-green-gray-medium">
      <div class="flex flex-col gap-4 xl:gap-6 2xl:gap-8">
        <h3 class="text-center font-bold text-xl lg:text-2xl text-primary-olivia-medium">
          Pagamento com {{ titlePayment }}
        </h3>
        <MoleculesWrapperFormsPaymentCardCredit v-if="selectTypePayment === 'cardCredit'" />
        <AtomsInputFieldPayment v-else :id="'cardSupleeNumberField'" :label="'Número do cartão Suplee'" :type-input="'cardNumber'" />
      </div>
      <div class="flex justify-center flex-row-reverse md:flex-col-reverse lg:flex-row-reverse gap-2 xl:gap-4 2xl:gap-6 mt-8">
        <button
          class="w-[70%] md:w-full lg:w-[70%] flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border border-primary-olivia-dark bg-primary-olivia-dark rounded-md shadow-lg hover:bg-opacity-80 group transition-colors"
          @click="handleClickButtonFinishPayment('payment')"
        >
          <h4 class="font-semibold text-xs sm:text-sm 2xl:text-base text-complement-background-white transition-colors">
            Pagar
          </h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CreditCardIcon } from "@heroicons/vue/outline";
import { StepsPurchase } from "~~/types/purchaseFlow";

type TypePayment = "cardCredit" | "cardSuplee";

const emitFnishPayment = defineEmits(["statusPayment"]);

const selectTypePayment = ref<TypePayment>("cardCredit");

const titlePayment = computed(() => {
  return selectTypePayment.value === "cardCredit"
    ? "cartão de crédito"
    : selectTypePayment.value === "cardSuplee"
      ? "cartão Suplee"
      : "";
});

function toggleTypePayment (type: TypePayment) {
  selectTypePayment.value = type;
}

function handleClickButtonFinishPayment (stage: StepsPurchase) {
  emitFnishPayment("statusPayment", selectTypePayment.value === "cardSuplee", stage);
}

</script>
