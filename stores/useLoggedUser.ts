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
    }
  });

  return {
    user
  };
});
