<template>
  <div v-if="returnCurrentInputRegister.nome">
    <div class="w-full relative input-animate">
      <input
        id="name-register"
        v-model="userRegister.user.nome"
        type="text"
        required
        name="name-register"
        :class="userRegister.classValidateInputName.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent mt-4"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <UserIcon
          :class="userRegister.classValidateInputName.iconColor"
          class="h-8 w-8 relative z-[21] stroke-1"
        />
        <label
          for="name-register"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          Nome completo
        </label>
      </div>
    </div>
  </div>
  <div v-else-if="returnCurrentInputRegister.email">
    <div class="w-full relative input-animate">
      <input
        id="email-register"
        v-model="userRegister.user.email"
        type="text"
        required
        name="email-register"
        :class="userRegister.classValidateInputEmail.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <MailIcon
          :class="userRegister.classValidateInputEmail.iconColor"
          class="h-8 w-8 relative z-[21] stroke-1"
        />
        <label
          for="email-register"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          Email
        </label>
      </div>
    </div>
  </div>
  <div v-else-if="returnCurrentInputRegister.cpf">
    <div class="w-full relative input-animate">
      <input
        id="cpf-register"
        v-model="userRegister.user.cpf"
        type="text"
        required
        name="cpf-register"
        :class="userRegister.classValidadeInputCpf.borderColor"
        class="w-full py-4 pl-14 pr-4 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-1 md:gap-2">
        <UserCircleIcon
          :class="userRegister.classValidadeInputCpf.iconColor"
          class="h-8 w-8 relative z-[21] stroke-1"
        />
        <label
          for="cpf-register"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          CPF
        </label>
      </div>
    </div>
  </div>
  <div v-else-if="returnCurrentInputRegister.telefone">
    <div class="w-full relative input-animate">
      <input
        id="phone-register"
        v-model="userRegister.user.celular"
        type="text"
        required
        name="phone-register"
        :class="userRegister.classValidateInputCellPhone.borderColor"
        class="w-full py-4 pl-14 pr-4 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-1 md:gap-2">
        <PhoneIcon
          :class="userRegister.classValidateInputCellPhone.iconColor"
          class="h-8 w-8 relative z-[21] stroke-1"
        />
        <label
          for="phone-register"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          Telefone
        </label>
      </div>
    </div>
  </div>
  <div v-else-if="returnCurrentInputRegister.senha">
    <div class="w-full relative input-animate">
      <input
        id="password-register"
        v-model="userRegister.user.senha"
        type="password"
        required
        name="password-register"
        :class="userRegister.classValidateInputPassword.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-4 gap-2">
        <LockClosedIcon :class="userRegister.classValidateInputPassword.iconColor" class="h-8 w-8 relative z-[21] stroke-1" />
        <label for="password-register" class="transition-transform duration-300 text-xl text-secondary-green-gray-dark">Senha</label>
      </div>
      <button class="absolute bottom-4 right-4" @click="handleRevealPassword('password-register')">
        <EyeIcon v-if="!isRevealPassword" class="h-6 w-6 text-secondary-green-gray-dark relative z-[21]" />
        <EyeOffIcon v-else class="h-6 w-6 text-secondary-green-gray-dark relative z-[21]" />
      </button>
    </div>
  </div>
  <div v-else-if="returnCurrentInputRegister.confirmarSenha">
    <div class="w-full relative input-animate">
      <input
        id="confirmPassword-register"
        v-model="userRegister.user.confirmacaoSenha"
        type="password"
        required
        name="confirmPassword-register"
        :class="userRegister.classValidateInputConfirmPassword.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-4 gap-2">
        <LockClosedIcon :class="userRegister.classValidateInputConfirmPassword.iconColor" class="h-8 w-8 relative z-[21] stroke-1" />
        <label for="confirmPassword-register" class="transition-transform duration-300 text-base text-secondary-green-gray-dark">Confirmar senha</label>
      </div>
      <button class="absolute bottom-4 right-4" @click="handleRevealPassword('confirmPassword-register')">
        <EyeIcon v-if="!isRevealPassword" class="h-6 w-6 text-secondary-green-gray-dark relative z-[21]" />
        <EyeOffIcon v-else class="h-6 w-6 text-secondary-green-gray-dark relative z-[21]" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, MailIcon, UserCircleIcon, PhoneIcon, LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";
import { useRegisterStore } from "~~/stores/useRegisterStore.js";

type TypeInput = "nome" | "email" | "cpf" | "telefone" | "senha" | "confirmar-senha";

const propsInputRegister = defineProps<{
  typeInput: TypeInput,
}>();

const userRegister = useRegisterStore();
const isRevealPassword = ref(false);

const returnCurrentInputRegister = computed(() => ({
  nome: propsInputRegister.typeInput === "nome",
  email: propsInputRegister.typeInput === "email",
  cpf: propsInputRegister.typeInput === "cpf",
  telefone: propsInputRegister.typeInput === "telefone",
  senha: propsInputRegister.typeInput === "senha",
  confirmarSenha: propsInputRegister.typeInput === "confirmar-senha"
}));

function handleRevealPassword (id: string) {
  isRevealPassword.value = !isRevealPassword.value;
  const element = document.getElementById(id) as HTMLInputElement;
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
  @apply text-base -translate-y-[180%] -translate-x-14 mx-1 text-dark-normal
}
.input-animate input:focus ~ div > label {
  @apply font-semibold
}
</style>
