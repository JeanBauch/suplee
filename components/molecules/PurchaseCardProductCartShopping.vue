<template>
  <article v-if="product" class="w-full h-full bg-complement-background-white flex flex-col gap-2">
    <span class="flex flex-col">
      <p class="font-light text-secondary-green-gray-medium text-xs">{{ product.category.nome }}</p>
      <h3 class="font-semibold text-lg">{{ product.name }}</h3>
    </span>
    <div class="flex justify-between">
      <div class="flex pr-7">
        <img :src="product.image" width="72" height="110" alt="">
      </div>
      <div class="flex flex-1 flex-col justify-center gap-4">
        <span class="flex justify-between">
          <strong class="font-semibold text-base text-dark-light">Valor:</strong>
          <strong class="font-semibold text-lg text-dark-normal">{{ priceFormated }}</strong>
        </span>
        <div class="flex justify-between items-center">
          <atoms-button-remove-item @removeItem="handleClickRemoveItemToCart" />
          <div class="flex flex-col gap-1">
            <span class="text-center font-semibold text-sm text-primary-olivia-medium">Quantidade:</span>
            <molecules-modify-amout-product
              :available-quantity="product.availableQuantity"
              :class-color-current-catergory="'text-dark-normal'"
              is-list-product
              :id-product-in-list-product="id"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";

const propsProductInTheCart = defineProps<{
  id: string
}>();

const storeCart = useCart();

const product = computed(() => {
  return storeCart.getProductInCartById(propsProductInTheCart.id)[0];
});

const priceFormated = computed(() => {
  return (useAccountBRL(product.value.price * product.value.quantity)).value;
});

function handleClickRemoveItemToCart () {
  storeCart.removeProductToCart(propsProductInTheCart.id);
}

</script>
