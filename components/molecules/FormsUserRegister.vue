<template>
  <div class="flex flex-col w-full gap-8">
    <atoms-input-user-register :type-input="'nome'" />
    <atoms-input-user-register :type-input="'email'" />
    <div class="flex w-full gap-4">
      <atoms-input-user-register :type-input="'cpf'" />
      <atoms-input-user-register :type-input="'telefone'" />
    </div>
    <div class="flex w-full gap-8 md:gap-4 flex-col md:flex-row">
      <atoms-input-user-register :type-input="'senha'" />
      <atoms-input-user-register :type-input="'confirmar-senha'" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
