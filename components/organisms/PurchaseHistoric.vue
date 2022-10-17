<template>
  <main class="md:container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 flex flex-col gap-16 justify-start items-center pt-12 pb-24 md:pb-0">
    <h1 class="font-semibold text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-primary-olivia-medium">
      Histórico de compras
    </h1>
    <div class="w-full">
      <molecules-purchase-historic-list-product v-for="item in historicProducts" :key="item.codigo" class="hidden sm:block sm:mb-16 sm:rounded-md">
        <tbody class="divide-y divide-secondary-green-gray-light">
          <tr v-for="(produto, index) in item.produtos" :key="index">
            <td scope="row" class="py-6 pl-4 pr-2 w-[40%] lg:w-[48%] xl:w-auto">
              <div class="flex items-center md:gap-3 lg:gap-4 xl:gap-8">
                <img :src="produto.imagens[0].urlImagemReduzida" width="62" height="94" class="w-[31px] h-[47px] lg:w-[62px] lg:h-[94px]" :alt="'Imagem do suplemento ' + produto.imagens[0].nomeImagem">
                <span class="flex flex-col md:gap-1 lg:gap-2">
                  <h4 class="font-semibold text-sm lg:text-base xl:text-lg text-dark-normal">{{ produto.nomeProduto }}</h4>
                  <p class="font-light text-xs text-secondary-green-gray-medium">categoria</p>
                </span>
              </div>
            </td>
            <td class="py-4">
              <div class="flex justify-center">
                <!-- <molecules-modify-amout-product
                  :available-quantity="product.availableQuantity"
                  :class-color-current-catergory="'text-dark-normal'"
                  is-list-product
                  :id-product-in-list-product="product.id"
                /> -->
                {{ produto.quantidade }}
              </div>
            </td>
            <td class="py-4">
              <span class="flex justify-center">
                <p class="font-semibold md:text-sm lg:text-lg xl:text-xl text-dark-normal">{{ priceFormated(produto.valorUnitario, produto.quantidade) }}</p>
              </span>
            </td>
            <td class="py-4 text-center">
              <p class="font-semibold md:text-sm lg:text-lg xl:text-xl text-dark-normal">
                {{ dateFormated(item.dataCadastro) }}
              </p>
            </td>
          </tr>
        </tbody>
      </molecules-purchase-historic-list-product>

      <div class="sm:hidden px-5 py-7 rounded-[0.625rem] bg-complement-background-white shadow-green-perso">
        <div class="flex flex-col gap-3 overflow-auto" style="max-height: calc(100vh - 87.5px - 375px);">
          <!-- <div v-for="product in storeCart.cart.products" :key="product.id" class="flex flex-col gap-3">
            <molecules-purchase-card-product-cart-shopping :id="product.id" />
            <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
          </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { getHistoricShopping } from "~~/services/purchase";
import { PurchaseHistoric } from "~~/types/purchaseHistoric";

const historicProducts = reactive<PurchaseHistoric[]>([]);

getHistoricShoppingUser();

async function getHistoricShoppingUser () {
  const dataResponse = await getHistoricShopping();
  const dataResponseFilter:PurchaseHistoric = dataResponse.data.value.data;

  historicProducts.push(...[dataResponseFilter].flat());
}

function dateFormated (data: string) {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const dateResponse = new Date(data);

  return ((dateResponse.getDate() + " " + meses[(dateResponse.getMonth())] + " " + dateResponse.getFullYear()));
}

function priceFormated (price: number, quantity: number) {
  return (useAccountBRL(price * quantity)).value;
}

</script>
