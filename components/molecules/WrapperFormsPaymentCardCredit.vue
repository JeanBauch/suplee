<template>
  <div class="flex flex-col gap-1 xl:gap-2 2xl:gap-4">
    <div class="flex flex-col md:flex-row gap-1 xl:gap-2 2xl:gap-4">
      <AtomsInputFieldPayment :id="'nameCardField'" class="w-full md:w-1/2" :label="'Nome impresso no cartão'" :type-input="'name'" />
      <AtomsInputFieldPayment :id="'cardNumberField'" class="w-full md:w-1/2" :label="'Número do cartão'" :type-input="'cardNumber'" />
    </div>
    <div class="flex flex-col md:flex-row gap-1 xl:gap-2 2xl:gap-4">
      <AtomsInputFieldPayment :id="'validateCardCreditField'" class="w-full md:w-1/3" :label="'Validade'" :type-input="'validate'" />
      <AtomsInputFieldPayment :id="'cvvField'" class="w-full md:w-1/3" :label="'CVV'" :type-input="'cvv'" />
      <AtomsInputFieldPayment :id="'cpfField'" class="w-full md:w-1/3" :label="'CPF'" :type-input="'cpf'" />
    </div>
  </div>
</template>
