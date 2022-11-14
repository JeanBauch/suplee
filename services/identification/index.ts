import { Address, EditAllInfoUser } from "~~/types/userAddress";

function getToken () {
  const token = useGetTokenUserLogged().trim();
  return token;
}

export const getInfoUserProfile = async () => {
  return await useFetchWithBaseURL("/Identidade/recuperar-informacoes-usuario", {
    headers: {
      Authorization: getToken(),
      "Cache-Control": "no-cache"
    },
    initialCache: false
  }).then((data) => {
    return data;
  }).catch((err) => {
    return err;
  });
};

export const getAllInfoUser = async () => {
  return await useFetchWithBaseURL("/Identidade/recuperar-usuario-completo", {
    headers: {
      Authorization: getToken()
    },
    retry: 3
  }).then((data) => {
    return data;
  }).catch((err) => {
    return err;
  });
};

export const postAddressUser = async (payload: Address, infoAdicional?: string, addressDefault?: boolean) => {
  const bodyRequest = {
    nomeDestinatario: payload.recipient,
    cep: payload.cep,
    estado: payload.state,
    cidade: payload.city,
    bairro: payload.district,
    rua: payload.street,
    numero: payload.number,
    complemento: payload.complement,
    tipoLocal: payload.local,
    telefone: payload.cellphone,
    informacaoAdicional: infoAdicional || "",
    enderecoPadrao: !!addressDefault
  };
  try {
    return await useFetchWithBaseURL("/Identidade/cadastrar-endereco", {
      headers: {
        Authorization: getToken()
      },
      method: "POST",
      body: bodyRequest
    });
  } catch (err) {
    return err;
  }
};

export const deleteAddressUser = async (addressId:string) => {
  try {
    return await useFetchWithBaseURL(`/Identidade/excluir-endereco/${addressId}`, {
      headers: {
        Authorization: getToken()
      },
      method: "DELETE"
    });
  } catch (err) {
    return err;
  }
};

export const putSetNewAddressToDefault = async (addressId:string) => {
  try {
    return await useFetchWithBaseURL(`/Identidade/marcar-endereco-como-padrao/${addressId}`, {
      headers: {
        Authorization: getToken()
      },
      method: "PUT"
    });
  } catch (err) {
    return err;
  }
};

export const putEditUser = async (payload: EditAllInfoUser) => {
  const bodyRequest = {} as EditAllInfoUser;
  Object.assign(bodyRequest, payload);

  try {
    return await useFetchWithBaseURL("/Identidade/editar-usuario", {
      headers: {
        Authorization: getToken()
      },
      method: "PUT",
      body: bodyRequest
    });
  } catch (err) {
    return err;
  }
};
