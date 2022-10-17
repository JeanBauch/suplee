import { defineStore } from "pinia";
import { AddressOnResponse } from "~~/types/userAddress";
import { contentAcessToken } from "~~/types/userLogged.js";

export const useLoggedUser = defineStore("current-user-logged", () => {
  const user = reactive<contentAcessToken>({
    accessToken: "",
    expiresIn: 0,
    userToken: {
      email: "",
      nome: "",
      cpf: "",
      celular: "",
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
      cpf: "",
      celular: "",
      tipoUsuario: "",
      usuarioId: "",
      address: []
    };
    user.isLogged = false;
  }

  function setInfoUserAfterLogin (nome:string, email: string, cpf:string, celular:string, address: AddressOnResponse[]) {
    user.userToken = {
      nome,
      email,
      cpf,
      celular,
      address,
      tipoUsuario: user.userToken.tipoUsuario,
      usuarioId: user.userToken.usuarioId
    };
  }

  return {
    user,
    userContainAddress,
    actionUserLogged,
    removeAddressToUser,
    resetAtrr,
    setInfoUserAfterLogin
  };
});
