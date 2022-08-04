<template>
  <div class="flex flex-col w-full gap-8">
    <atoms-input-user-register :type-input="'nome'" @name-valid="handleIsValidName" />
    <atoms-input-user-register :type-input="'email'" />
    <div class="flex w-full gap-4">
      <atoms-input-user-register :type-input="'cpf'" />
      <atoms-input-user-register :type-input="'telefone'" />
    </div>
    <div class="flex w-full gap-8 md:gap-4 flex-col md:flex-row">
      <atoms-input-user-register :type-input="'senha'" @password-valid="handleIsValidPassword" />
      <atoms-input-user-register :type-input="'confirmar-senha'" :password="currentPassword" />
    </div>
  </div>
</template>

<script setup lang="ts">

// const emitUserRegister = defineEmits(["user-register"]);

const currentPassword = ref("");

const user = reactive({
  nome: "",
  email: "",
  cpf: "",
  celular: "",
  senha: "",
  confirmacaoSenha: ""
});

function handleIsValidName (name: string) {
  user.nome = name;
}

function handleIsValidPassword (password:string) {
  currentPassword.value = password;
}

</script>
