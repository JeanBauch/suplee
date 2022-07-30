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

type ImageProduct = {
  id: string,
  name: string,
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

export type ProductActionCart = {
  price: number,
  availableQuantity: number,
};

export type ProductIdentifer = {
  id: string,
  name: string,
  category: categoryProduct,
};

export type Product = {
  name: string,
  category: categoryProduct,
  composition: string,
  description: string,
  effects: Array<EffectsDetails>,
  id: string,
  images: Array<ImageProduct>,
  nutritionalInformation: Array<ItemNutritional>,
  price: number,
  availableQuantity: number,
};
