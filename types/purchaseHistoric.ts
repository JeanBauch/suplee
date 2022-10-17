import { ImagesProduct } from "./product";

type ProductsInPurchaseHistoric = {
  nomeProduto: string,
  quantidade: number,
  valorUnitario: number,
  imagens: ImagesProduct[]
}

export type PurchaseHistoric = {
  codigo: string,
  status: string,
  valorTotal: number
  dataCadastro: string,
  produtos: ProductsInPurchaseHistoric[]
}
