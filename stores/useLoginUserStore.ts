import { defineStore } from "pinia";

export const useLoginUserStore = defineStore("user-login", () => {
  const user = reactive({
    email: "",
    cpf: "",
    senha: ""
  });

  const isValidComputed = computed(() => ({
    email: (user.email.length > 0 && useValidateEmail(user.email)),
    cpf: (user.cpf.length > 0 && useValidateCPF(user.cpf)),
    senha: !(user.senha.length < 0 || user.senha.length < 6)
  }));

  const classValidateInputEmailCpf = computed(() => ({
    borderColor: ((isValidComputed.value.email || isValidComputed.value.cpf) && (user.email.length > 0 || user.cpf.length > 0))
      ? "border-primary-green-dark"
      : (user.email.length > 0 || user.cpf.length > 0)
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: ((isValidComputed.value.email || isValidComputed.value.cpf) && (user.email.length > 0 || user.cpf.length > 0))
      ? "text-primary-green-dark"
      : (user.email.length > 0 || user.cpf.length > 0)
        ? "text-[#912f3c]"
        : "text-secondary-green-gray-dark"
  }));

  const classValidateInputPassword = computed(() => ({
    borderColor: (isValidComputed.value.senha && user.senha.length > 0)
      ? "border-primary-green-dark"
      : user.senha.length > 0
        ? "border-[#912f3c]"
        : "border-primary-olivia-dark",

    iconColor: (isValidComputed.value.senha && user.senha.length > 0)
      ? "text-primary-green-dark"
      : user.senha.length > 0
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

  function validateAllFields () {
    return (isValidComputed.value.email || isValidComputed.value.cpf) && isValidComputed.value.senha;
  }

  return {
    user,
    isValidComputed,
    classValidateInputEmailCpf,
    classValidateInputPassword,
    validateAllFields,
    createMaskCPF
  };
});
