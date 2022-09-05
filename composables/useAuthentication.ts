export const useVerifyUserLogged = () => {
  // add to logic
  const isLogged = ref(false);

  onMounted(() => {
    isLogged.value = !!localStorage.getItem("accessToken");
  });

  return isLogged.value;
};
