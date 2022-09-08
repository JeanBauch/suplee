<template>
  <div v-if="!isRedefinePassword" class="flex flex-col w-full gap-10">
    <atoms-input-user-login :type-input="'email-cpf'" />
    <atoms-input-user-login :type-input="'senha'" @redefine-password="handleClickRedefinePassword" />
  </div>
  <div v-else class="flex flex-col w-full gap-10">
    <atoms-input-user-login :type-input="'redefinir-senha'" />
  </div>
</template>

<script setup>
import { useLoginUserStore } from "~~/stores/useLoginUserStore";

const emitRedefinePassword = defineEmits(["redefinePassword"]);
const isRedefinePassword = ref(false);

function handleClickRedefinePassword () {
  emitRedefinePassword("redefinePassword", true);
  isRedefinePassword.value = true;
  useLoginUserStore().resetState();
}

onUnmounted(() => {
  emitRedefinePassword("redefinePassword", false);
  isRedefinePassword.value = false;
  useLoginUserStore().resetState();
});

</script>
