<template>
  <div class="flex w-full md:w-8/12 2xl:w-7/12">
    <div class="flex flex-1 w-full flex-col-reverse xl:flex-row">
      <molecules-card-description-product :product-details-info="productDetailsInfo" :current-category="productIdentifer.category.nome" />

      <molecules-card-call-to-action-cart
        :product-identifer="productIdentifer"
        :product-action-cart="productActionCart"
        :current-category="productIdentifer.category.nome"
        @addProductToCart="handleClickButtonAddProductOnCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useCart } from "~~/stores/useCart";
import { useCart } from "~~/stores/useCart";
import { ProductActionCart, ProductIdentifer, DescriptionProductDetails, ProductOnCard } from "~~/types/product";

const propsProductSelected = defineProps<{
  productActionCart: ProductActionCart,
  productIdentifer: ProductIdentifer,
  productDetailsInfo: DescriptionProductDetails,
}>();

const product: ProductOnCard = {
  id: propsProductSelected.productIdentifer.id,
  name: propsProductSelected.productIdentifer.name,
  category: propsProductSelected.productIdentifer.category,
  price: propsProductSelected.productActionCart.price,
  quantity: 1,
  availableQuantity: propsProductSelected.productActionCart.availableQuantity,
  image: propsProductSelected.productIdentifer.images[0].urlImagemReduzida
};

function handleClickButtonAddProductOnCart (quantity: number) {
  product.quantity = quantity;

  const stringProducts = localStorage.getItem("products");
  let productArray = [];

  if (stringProducts !== null) {
    productArray = JSON.parse(stringProducts);
  }

  /* if ((productArray.filter((item:ProductOnCard) => item.id === product.id)).length > 0) {
    productArray.push(product);
  } */

  localStorage.setItem("products", JSON.stringify(productArray));
  useCart().addProductToCart(product);
}

</script>
