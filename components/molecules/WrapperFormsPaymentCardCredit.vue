<template>
  <div class="flex flex-col gap-1 xl:gap-2 2xl:gap-4">
    <div class="flex flex-col md:flex-row gap-1 xl:gap-2 2xl:gap-4">
      <AtomsInputFieldPayment
        :id="'nameCardField'"
        class="w-full md:w-1/2"
        :label="'Nome impresso no cartão'"
        :type-input="'name'"
        :icon-input="'UserCircleIcon'"
      />
      <AtomsInputFieldPayment
        :id="'cardNumberField'"
        class="w-full md:w-1/2"
        :label="'Número do cartão'"
        :type-input="'cardNumber'"
        :icon-input="'CreditCardIcon'"
      />
    </div>
    <div class="flex flex-col md:flex-row gap-1 xl:gap-2 2xl:gap-4">
      <AtomsInputFieldPayment
        :id="'validateCardCreditField'"
        class="w-full md:w-1/3"
        :label="'Validade'"
        :type-input="'validate'"
        :icon-input="'CalendarIcon'"
      />
      <AtomsInputFieldPayment
        :id="'cvvField'"
        class="w-full md:w-1/3"
        :label="'CVV'"
        :type-input="'cvv'"
        :icon-input="'CreditCardIcon'"
      />
      <AtomsInputFieldPayment
        :id="'cpfField'"
        class="w-full md:w-1/3"
        :label="'CPF'"
        :type-input="'cpf'"
        :icon-input="'UserCircleIcon'"
      />
    </div>
  </div>
</template>
