<template>
  <div v-if="returnCurrentInput.email">
    <div class="w-full relative input-animate">
      <input
        id="email-cpf-login"
        v-model="userLogin.user.inputLogin"
        type="text"
        required
        name="email-cpf-login"
        :class="userLogin.classValidateInputEmailCpf.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg mt-10 bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-8">
        <UserCircleIcon
          :class="userLogin.classValidateInputEmailCpf.iconColor"
          class="h-8 w-8 relative -left-4 z-[21] stroke-1"
        />
        <label
          for="email-cpf-login"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          Email ou CPF
        </label>
      </div>
    </div>
  </div>

  <div v-else-if="returnCurrentInput.senha">
    <div class="w-full relative input-animate">
      <input
        id="senha-login"
        v-model="userLogin.user.senha"
        type="password"
        required
        name="senha-login"
        :class="userLogin.classValidateInputPassword.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-8">
        <LockClosedIcon :class="userLogin.classValidateInputPassword.iconColor" class="h-8 w-8 relative -left-4 z-[21] stroke-1" />
        <label for="senha-login" class="transition-transform duration-300 text-xl text-secondary-green-gray-dark">Senha</label>
      </div>
      <button class="absolute bottom-3 right-4" @click="handleRevealPassword">
        <EyeIcon v-if="!isRevealPassword" class="h-8 w-8 text-secondary-green-gray-dark relative z-[21]" />
        <EyeOffIcon v-else class="h-8 w-8 text-secondary-green-gray-dark relative z-[21]" />
      </button>
    </div>
    <div class="w-full flex justify-end mt-3">
      <button>
        <span class="text-base font-semibold text-secondary-green-gray-dark">Esqueci minha senha</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon, LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";
import { useLoginUserStore } from "~~/stores/useLoginUserStore.js";

type TypeInput = "email-cpf" | "senha";

const propsInput = defineProps<{
  typeInput: TypeInput,
}>();
const userLogin = useLoginUserStore();
const isRevealPassword = ref(false);

const returnCurrentInput = computed(() => ({
  email: propsInput.typeInput === "email-cpf",
  senha: propsInput.typeInput === "senha"
}));

function handleRevealPassword () {
  isRevealPassword.value = !isRevealPassword.value;
  const element = document.getElementById("senha-login") as HTMLInputElement;
  if (isRevealPassword.value) {
    element.type = "text";
    return;
  }
  element.type = "password";
}

</script>

<style scoped lang="postcss">
.input-animate input:valid ~ div > label,
.input-animate input:focus ~ div > label,
.input-animate input:active ~ div > label {
  @apply text-base -translate-y-[180%] -translate-x-16 mx-1 text-dark-normal
}
.input-animate input:focus ~ div > label {
  @apply font-semibold
}
</style>
