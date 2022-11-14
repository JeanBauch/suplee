import { defineStore } from "pinia";
import { deleteAddressUser, putSetNewAddressToDefault } from "~~/services/identification";
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

  async function removeAddressToUser (addressId: string) {
    if (user.isLogged) {
      await deleteAddressUser(addressId);
    }
    user.userToken.address.splice(getIndexOfById(addressId), 1);
  }

  function getAddressInProfileById (id: string) {
    return user.userToken.address.filter(address => address.enderecoId === id);
  }

  function getIndexOfById (id: string) {
    return user.userToken.address.indexOf(getAddressInProfileById(id)[0]);
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

  function setInfoUserAfterLogin (nome:string, email: string, cpf:string, celular:string, address: AddressOnResponse[], tipoUsuario: string, usuarioId: string) {
    user.userToken = {
      nome,
      email,
      cpf,
      celular,
      address,
      tipoUsuario,
      usuarioId
    };
  }

  async function setAddressIsDefault (id: string) {
    user.userToken.address.forEach((address) => {
      address.enderecoPadrao = false;
    });

    user.userToken.address[getIndexOfById(id)].enderecoPadrao = true;
    await putSetNewAddressToDefault(id);
  }

  return {
    user,
    userContainAddress,
    actionUserLogged,
    removeAddressToUser,
    resetAtrr,
    setInfoUserAfterLogin,
    setAddressIsDefault
  };
});
