import { Address } from "./userAddress";

type userToken = {
  email: string,
  nome: string,
  tipoUsuario: string,
  usuarioId: string,
  address: Address[]
}

export type contentAcessToken = {
  accessToken: string,
  expiresIn: number,
  userToken: userToken,
  isLogged: boolean,
}
