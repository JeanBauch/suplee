import { defineStore } from "pinia";

export const useRegisterStore = defineStore("user-register", () => {
  const user = reactive({
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    senha: "",
    confirmacaoSenha: ""
  });

  const isValid = reactive({
    nome: false,
    email: false,
    cpf: false,
    celular: false,
    senha: false,
    confirmacaoSenha: false
  });

  const isValidComputed = computed(() => ({
    name: (user.nome.length > 0 && useNotContainsNumber(user.nome)),
    email: (user.email.length > 0 && useValidateEmail(user.email)),
    cpf: (user.cpf.length > 0 && useValidateCPF(user.cpf)),
    celular: (user.celular.length > 0 && useValidateCellPhoneWithDDD(user.celular)),
    senha: !(user.senha.length < 0 || user.senha.length < 6),
    confirmacaoSenha: (user.confirmacaoSenha.length > 0 && (user.senha === user.confirmacaoSenha))
  }));

  const classValidateInputName = computed(() => ({
    nameBorderColor: isValidComputed.value.name
      ? "border-primary-green-dark"
      : user.nome.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    nameIconColor: isValidComputed.value.name
      ? "text-primary-green-dark"
      : user.nome.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidateInputEmail = computed(() => ({
    borderColor: isValidComputed.value.email
      ? "border-primary-green-dark"
      : user.email.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: isValidComputed.value.email
      ? "text-primary-green-dark"
      : user.email.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidadeInputCpf = computed(() => ({
    borderColor: isValidComputed.value.cpf
      ? "border-primary-green-dark"
      : user.cpf.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: isValidComputed.value.cpf
      ? "text-primary-green-dark"
      : user.cpf.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidateInputCellPhone = computed(() => ({
    borderColor: isValidComputed.value.celular
      ? "border-primary-green-dark"
      : user.celular.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: isValidComputed.value.celular
      ? "text-primary-green-dark"
      : user.celular.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidateInputPassword = computed(() => ({
    borderColor: isValidComputed.value.senha
      ? "border-primary-green-dark"
      : user.senha.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: isValidComputed.value.senha
      ? "text-primary-green-dark"
      : user.senha.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidateInputConfirmPassword = computed(() => ({
    borderColor: isValidComputed.value.confirmacaoSenha
      ? "border-primary-green-dark"
      : user.confirmacaoSenha.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: isValidComputed.value.confirmacaoSenha
      ? "text-primary-green-dark"
      : user.confirmacaoSenha.length > 0
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  watch(user, () => {
    if (isValidComputed.value.cpf || user.cpf.length === 11) {
      user.cpf = createMaskCPF(user.cpf);
    }
  });

  function createMaskCPF (cpf: string) {
    return cpf.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  return {
    user,
    isValid,
    isValidComputed,
    classValidateInputName,
    classValidateInputEmail,
    classValidadeInputCpf,
    classValidateInputCellPhone,
    classValidateInputPassword,
    classValidateInputConfirmPassword
  };
});
