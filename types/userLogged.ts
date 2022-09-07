type userToken = {
  email: string,
  nome: string,
  tipoUsuario: string,
  usuarioId: string,
}

export type contentAcessToken = {
  accessToken: string,
  expiresIn: number,
  userToken: userToken,
  isLogged: boolean
}
