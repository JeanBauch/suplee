export const useAccountBRL = (val: number) => {
  const accountBRL = computed(() => {
    const valor = val.toFixed(2).toString();
    return ("R$ " + valor.replace(".", ","));
  });

  return accountBRL;
};
