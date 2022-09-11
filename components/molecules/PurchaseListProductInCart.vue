<template>
  <div class="flex w-full md:w-4/6 h-[60%] md:h-auto overflow-auto bg-complement-background-white rounded-[0.625rem] md:rounded-tr-none md:rounded-br-none md:rounded-tl-[0.625rem] md:rounded-bl-[0.625rem] shadow-green-perso md:shadow-none">
    <table class="w-full h-fit relative">
      <thead class="bg-complement-background-normal sticky top-0 z-30 shadow-sm">
        <tr class="font-semibold text-primary-olivia-light text-base xl:text-lg">
          <th scope="col" class="text-current py-3 lg:py-4">
            Produtos
          </th>
          <th scope="col" class="w-[10.625rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Quantidade
          </th>
          <th scope="col" class="w-[10.625rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Valor
          </th>
          <th scope="col" class="w-[8.75rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Remover
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-secondary-green-gray-light">
        <tr v-for="product in storeCart.cart.products" :key="product.id">
          <td scope="row" class="py-6 pl-4 pr-2 w-[40%] lg:w-[48%] xl:w-auto">
            <div class="flex items-center md:gap-3 lg:gap-4 xl:gap-8">
              <img :src="product.image" width="62" height="94" class="w-[31px] h-[47px] lg:w-[62px] lg:h-[94px]" :alt="'Imagem do suplemento ' + product.name">
              <span class="flex flex-col md:gap-1 lg:gap-2">
                <h4 class="font-semibold text-sm lg:text-base xl:text-lg text-dark-normal">{{ product.name }}</h4>
                <p class="font-light text-xs text-secondary-green-gray-medium">{{ product.category.nome }}</p>
              </span>
            </div>
          </td>
          <td class="py-4">
            <div class="flex justify-center">
              <molecules-modify-amout-product
                :available-quantity="product.availableQuantity"
                :class-color-current-catergory="'text-dark-normal'"
                is-list-product
                :id-product-in-list-product="product.id"
              />
            </div>
          </td>
          <td class="py-4">
            <span class="flex justify-center">
              <p class="font-semibold md:text-sm lg:text-lg xl:text-xl text-dark-normal">{{ priceFormated(product.price, product.quantity) }}</p>
            </span>
          </td>
          <td class="py-4">
            <atoms-button-remove-item @remove-item="handleClickButtonRemoveItem(product.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";

const storeCart = useCart();

function priceFormated (price: number, quantity: number) {
  return (useAccountBRL(price * quantity)).value;
}

function handleClickButtonRemoveItem (id: string) {
  storeCart.removeProductToCart(id);
}

</script>

<style scoped>
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #2b3e0f #f6f6f6;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #f6f6f6;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2b3e0f;
    border-radius: 10px;
    border: 3px solid #f6f6f6;
  }
</style>
