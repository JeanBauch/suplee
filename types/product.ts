type EffectsDetails = {
  id: string,
  nome: string,
};

type NutritionalInformation = {
  composition: string,
  order: number,
  portion: string,
  dailyValue: string,
};

type ItemNutritional = {
  header: string,
  nutritionalCompounds: Array<NutritionalInformation>,
  legends: string,
};

type categoryProduct = {
  id: string,
  nome: string,
};

export type DescriptionProductDetails = {
  description: string,
  effects: Array<EffectsDetails>,
  composition: string,
  nutritionalInformation: NutritionalInformation,
};

export type ImagesProduct = {
  nomeImagem: string,
  urlImagemOriginal: string,
  urlImagemReduzida: string,
  urlImagemMaior: string
};

export type ProductActionCart = {
  price: number,
  availableQuantity: number,
};

export type ProductIdentifer = {
  id: string,
  name: string,
  category: categoryProduct,
  images: Array<ImagesProduct>
};

export type Product = {
  name: string,
  category: categoryProduct,
  composition: string,
  description: string,
  effects: Array<EffectsDetails>,
  id: string,
  images: Array<ImagesProduct>,
  nutritionalInformation: Array<ItemNutritional>,
  price: number,
  availableQuantity: number,
};

export type ProductOnCard = {
  id: string,
  name: string,
  category: categoryProduct,
  price: number,
  quantity: number,
  availableQuantity: number,
  image: string,
}
