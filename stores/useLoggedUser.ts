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
      usuarioId: ""
    },
    isLogged: false
  });

  function resetAtrr () {
    user.accessToken = "";
    user.expiresIn = 0;
    user.userToken = {
      email: "",
      nome: "",
      tipoUsuario: "",
      usuarioId: ""
    };
    user.isLogged = false;
  }

  return {
    user,
    resetAtrr
  };
});
