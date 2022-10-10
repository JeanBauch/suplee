import { defineStore } from "pinia";
import { contentAcessToken } from "~~/types/userLogged.js";

export const useLoggedUser = defineStore("current-user-logged", () => {
  const user = reactive<contentAcessToken>({
    accessToken: "",
    expiresIn: 0,
    userToken: {
      email: "",
      nome: "",
      tipoUsuario: "",
      usuarioId: "",
      address: []
    },
    isLogged: false
  });

  const userContainAddress = computed(() => {
    return user.userToken.address.length > 0;
  });

  function actionUserLogged (state: boolean) {
    user.isLogged = state;
  }

  function removeAddressToUser () {
    user.userToken.address.pop();
  }

  function resetAtrr () {
    user.accessToken = "";
    user.expiresIn = 0;
    user.userToken = {
      email: "",
      nome: "",
      tipoUsuario: "",
      usuarioId: "",
      address: []
    };
    user.isLogged = false;
  }

  return {
    user,
    userContainAddress,
    actionUserLogged,
    removeAddressToUser,
    resetAtrr
  };
});
