import { AddressOnResponse } from "./userAddress";

type userToken = {
  email: string,
  nome: string,
  cpf: string,
  celular: string,
  tipoUsuario: string,
  usuarioId: string,
  address: AddressOnResponse[]
}

export type contentAcessToken = {
  accessToken: string,
  expiresIn: number,
  userToken: userToken,
  isLogged: boolean,
}
