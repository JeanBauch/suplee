<template>
  <div v-if="returnCurrentInputRegister.nome">
    <div class="w-full relative input-animate">
      <input
        id="name-register"
        v-model="user.name"
        type="text"
        required
        name="name-register"
        :class="classValidateInputName.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent mt-4"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <UserIcon
          :class="classValidateInputName.iconColor"
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
        v-model="user.email"
        type="text"
        required
        name="email-register"
        :class="classValidateInputEmail.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <MailIcon
          :class="classValidateInputEmail.iconColor"
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
        v-model="user.cpf"
        type="text"
        required
        name="cpf-register"
        :class="classValidadeInputCpf.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <UserCircleIcon
          :class="classValidadeInputCpf.iconColor"
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
        v-model="user.telefone"
        type="text"
        required
        name="phone-register"
        :class="classValidateInputCellPhone.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-[0.8125rem] left-4 gap-2">
        <PhoneIcon
          :class="classValidateInputCellPhone.iconColor"
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
        v-model="user.senha"
        type="password"
        required
        name="password-register"
        :class="classValidateInputPassword.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-4 gap-2">
        <LockClosedIcon :class="classValidateInputPassword.iconColor" class="h-8 w-8 relative z-[21] stroke-1" />
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
        v-model="user.confirmarSenha"
        type="password"
        required
        name="confirmPassword-register"
        :class="classValidateInputConfirmPassword.borderColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-4 gap-2">
        <LockClosedIcon :class="classValidateInputConfirmPassword.iconColor" class="h-8 w-8 relative z-[21] stroke-1" />
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

type TypeInput = "nome" | "email" | "cpf" | "telefone" | "senha" | "confirmar-senha";

const propsInputRegister = defineProps<{
  typeInput: TypeInput,
  password?: string,
}>();

const emitUserRegister = defineEmits(["nameValid", "passwordValid"]);

const user = reactive({
  name: "",
  email: "",
  cpf: "",
  telefone: "",
  senha: "",
  confirmarSenha: ""
});

const isRevealPassword = ref(false);

const isNameValid = ref<boolean>(false);
const isEmailValid = ref(false);
const isCpfValid = ref(false);
const isCellPhoneValid = ref(false);
const isPasswordValid = ref(false);
const isConfirmPasswordValid = ref(false);

const returnCurrentInputRegister = computed(() => ({
  nome: propsInputRegister.typeInput === "nome",
  email: propsInputRegister.typeInput === "email",
  cpf: propsInputRegister.typeInput === "cpf",
  telefone: propsInputRegister.typeInput === "telefone",
  senha: propsInputRegister.typeInput === "senha",
  confirmarSenha: propsInputRegister.typeInput === "confirmar-senha"
}));

const classValidateInputName = computed(() => ({
  borderColor: (isNameValid.value)
    ? "border-primary-green-dark"
    : user.name.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isNameValid.value && true)
    ? "text-primary-green-dark"
    : user.name.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

const classValidateInputEmail = computed(() => ({
  borderColor: (isEmailValid.value)
    ? "border-primary-green-dark"
    : user.email.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isEmailValid.value && true)
    ? "text-primary-green-dark"
    : user.email.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

const classValidadeInputCpf = computed(() => ({
  borderColor: (isCpfValid.value)
    ? "border-primary-green-dark"
    : user.cpf.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isCpfValid.value && true)
    ? "text-primary-green-dark"
    : user.cpf.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

const classValidateInputCellPhone = computed(() => ({
  borderColor: (isCellPhoneValid.value)
    ? "border-primary-green-dark"
    : user.telefone.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isCellPhoneValid.value && true)
    ? "text-primary-green-dark"
    : user.telefone.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

const classValidateInputPassword = computed(() => ({
  borderColor: (isPasswordValid.value)
    ? "border-primary-green-dark"
    : user.senha.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isPasswordValid.value && true)
    ? "text-primary-green-dark"
    : user.senha.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

const classValidateInputConfirmPassword = computed(() => ({
  borderColor: (isConfirmPasswordValid.value)
    ? "border-primary-green-dark"
    : user.confirmarSenha.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: (isConfirmPasswordValid.value && true)
    ? "text-primary-green-dark"
    : user.confirmarSenha.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

watch(user, () => {
  isNameValid.value = handleValidateNameUser(user.name);
  isEmailValid.value = (user.email.length > 0 && useValidateEmail(user.email));
  isCpfValid.value = (user.cpf.length > 0 && useValidateCPF(user.cpf));
  if (isCpfValid.value || user.cpf.length === 11) {
    user.cpf = createMaskCPF(user.cpf);
  }
  isCellPhoneValid.value = (user.telefone.length > 0 && useValidateCellPhoneWithDDD(user.telefone));
  isPasswordValid.value = handleValidatePasswordLength(user.senha);
  isConfirmPasswordValid.value = handleValidatePasswordWithConfirmPassword(propsInputRegister.password, user.confirmarSenha);
});

function createMaskCPF (cpf: string) {
  return cpf.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

function handleRevealPassword (id: string) {
  isRevealPassword.value = !isRevealPassword.value;
  const element = document.getElementById(id) as HTMLInputElement;
  if (isRevealPassword.value) {
    element.type = "text";
    return;
  }
  element.type = "password";
}

function handleValidateNameUser (name: string) {
  if (name.length > 0 && useNotContainsNumber(name)) {
    emitUserRegister("nameValid", name);
  }
  return name.length > 0 && useNotContainsNumber(name);
}

function handleValidatePasswordLength (password: string) {
  if (password.length > 0 && password.length >= 6) {
    emitUserRegister("passwordValid", password);
  }
  return password.length > 0 && password.length >= 6;
}

function handleValidatePasswordWithConfirmPassword (password?: string, confirmPassword?: string) {
  return password === confirmPassword;
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
