<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <div class="w-full h-full flex flex-col md:flex-row shadow-green-perso-desktop gap-5 md:gap-0">
        <molecules-purchase-list-product-in-cart class="hidden sm:block" />
        <div class="sm:hidden px-5 py-7 rounded-[0.625rem] bg-complement-background-white shadow-green-perso">
          <div class="flex flex-col gap-3 overflow-auto" style="max-height: calc(100vh - 87.5px - 375px);">
            <div v-for="product in storeCart.cart.products" :key="product.id" class="flex flex-col gap-3">
              <molecules-purchase-card-product-cart-shopping :id="product.id" />
              <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
            </div>

            <div v-if="storeCart.totalQuantityItensOnProduct === 0" class="w-full flex flex-col justify-center py-10 px-5 relative" style="height: calc(100% - 60px);">
              <h3 class="font-semibold text-primary-olivia-medium text-lg">
                Seu <strong>carrinho</strong> de compras<br>está <strong>vazio!</strong>
              </h3>
              <img src="/illustration/emptyCart.svg" width="670" height="364" alt="Ilustração de carrinho de compras vazia" class="h-auto aspect-[670/364]">
            </div>
          </div>
        </div>
        <molecules-purchase-card-resume @cart-shopping="handleClickNextStep('cartShopping')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";
import { StepsPurchase } from "~~/types/purchaseFlow";

const emitEventOnClickNextStep = defineEmits(["cartShopping"]);
const storeCart = useCart();

function handleClickNextStep (stage: StepsPurchase) {
  emitEventOnClickNextStep("cartShopping", stage);
}
</script>
