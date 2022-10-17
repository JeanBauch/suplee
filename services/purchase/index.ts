import { ProductsToSendRequest, UpdateQunatityProductRequest } from "~~/types/product";

function getToken () {
  const token = useGetTokenUserLogged().trim();
  return token;
}

export const postRegisterCartShopping = async (payload:ProductsToSendRequest[]) => {
  const bodyRequest = {
    produtos: payload
  };
  try {
    return await useFetchWithBaseURL("/Vendas/cadastrar-carrinho", {
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

export const postAddProductToCartShopping = async (payload:ProductsToSendRequest) => {
  try {
    return await useFetchWithBaseURL("/Vendas/inserir-produto-carrinho", {
      headers: {
        Authorization: getToken()
      },
      method: "POST",
      body: payload
    });
  } catch (err) {
    return err;
  }
};

export const putUpdateProductInCartShopping = async (payload:UpdateQunatityProductRequest) => {
  try {
    return await useFetchWithBaseURL("/Vendas/atualizar-produto-carrinho", {
      headers: {
        Authorization: getToken()
      },
      method: "PUT",
      body: payload
    });
  } catch (err) {
    return err;
  }
};

export const deleteProductInsideCartShopping = async (payload:string) => {
  const bodyRequest = {
    produtoId: payload
  };
  try {
    return await useFetchWithBaseURL("/Vendas/excluir-produto-carrinho", {
      headers: {
        Authorization: getToken()
      },
      method: "DELETE",
      body: bodyRequest
    });
  } catch (err) {
    return err;
  }
};

export const postPayment = async (payload:boolean) => {
  const requestBody = {
    sucesso: payload
  };
  try {
    return await useFetchWithBaseURL("/Vendas/realizar-pagamento", {
      headers: {
        Authorization: getToken()
      },
      method: "POST",
      body: requestBody
    });
  } catch (err) {
    return err;
  }
};

export const getCartShopping = async () => {
  try {
    return await useFetchWithBaseURL("/Vendas/realizar-pagamento", {
      headers: {
        Authorization: getToken()
      }
    });
  } catch (err) {
    return err;
  }
};

export const getHistoricShopping = async () => {
  return await useFetchWithBaseURL("/Vendas/recuperar-historico", {
    headers: {
      Authorization: getToken()
    }
  }).then((data) => {
    return data;
  }).catch((err) => {
    return err;
  });
};
