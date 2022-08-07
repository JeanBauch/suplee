<template>
  <div class="flex flex-col gap-20 justify-center items-center w-full h-full">
    <div>
      <h1 class="font-semibold text-primary-olivia-dark text-xl lg:text-2xl xl:text-3xl text-center">
        {{ dataResponseRegister }}
      </h1>
    </div>
    <div class="w-full flex flex-col gap-10">
      <div class="w-full flex flex-col gap-1">
        <h3 class="text-lg xl:text-xl font-semibold text-primary-olivia-dark text-center">
          Não recebeu o email de confirmação?
        </h3>
        <h4 class="text-sm xl:text-base font-light text-dark-normal text-center">
          Clique no botão abaixo para reenviar o email de confirmação.
        </h4>
      </div>
      <div class="flex justify-center items-center">
        <atoms-button-action-next-step-user :label-button="'Reenviar email'" :pending="pending" @next-step-user="handleResendEmail" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emitClickButtonStepUserOnMolecule = defineEmits(["NextStepUser"]);
defineProps<{
  dataResponseRegister: string,
  pending: boolean,
}>();

function handleResendEmail () {
  emitClickButtonStepUserOnMolecule("NextStepUser");
}

</script>
