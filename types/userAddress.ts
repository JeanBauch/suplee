export type Address = {
  cep: string,
  recipient: string,
  state: string,
  city: string,
  district: string,
  number: string,
  street: string,
  cellphone: string,
  local: 0 | 1,
  complement: string
}

export type AddressOnResponse = {
  enderecoId: string,
  nomeDestinatario: string,
  cep: string,
  estado: string,
  cidade: string,
  bairro: string,
  rua: string,
  numero: string,
  complemento: string,
  tipoLocal: 0 | 1,
  telefone: string,
  informacaoAdicional: string,
  enderecoPadrao: boolean
}

export type EditAllInfoUser = {
    usuarioId: string,
    nome: string,
    celular: string,
    enderecos: AddressOnResponse[]
}
