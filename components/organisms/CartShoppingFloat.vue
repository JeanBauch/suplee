<template>
  <div :class="isOpenCarShopping ? 'fixed top-0 left-0 min-w-[100vw] min-h-[100vh] z-50' : ''" style="background-color: rgba(0,0,0, 0.5);">
    <div class="hidden md:block fixed bottom-4 right-4 xl:bottom-8 xl:right-20 z-30">
      <div
        ref="componentRef"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        class="flex flex-col items-end gap-5 relative"
        tabindex="0"
      >
        <transition>
          <main v-if="isOpenCarShopping" class="p-9 rounded-3xl bg-complement-background-white shadow-green-perso relative">
            <h2 class="font-semibold text-dark-normal text-base lg:text-lg 2xl:text-xl">
              Seu carrinho
            </h2>
            <div class="flex flex-col gap-3 overflow-auto mt-6 min-w-[400px]" style="max-height: calc(100vh - 6.5rem - 250px);">
              <molecules-purchase-card-product-cart-shopping />
              <div class="w-full h-[1px] p-[1px] rounded-full bg-complement-background-soft" />
              <molecules-purchase-card-product-cart-shopping />
              <div class="w-full h-[1px] p-[1px] rounded-full bg-complement-background-soft" />
              <molecules-purchase-card-product-cart-shopping />
              <div class="w-full h-[1px] p-[1px] rounded-full bg-complement-background-soft" />
              <molecules-purchase-card-product-cart-shopping />
            </div>
            <div class="flex justify-between mt-6">
              <button class="flex justify-center items-center gap-2 font-medium text-primary-lemon-dark text-base">
                <p>Mais detalhes</p>
                <ChevronRightIcon class="text-current w-4 h-4" />
              </button>
              <button class="px-6 py-4 rounded-[0.625rem] bg-primary-lemon-dark">
                <h3 class="text-center text-complement-background-white font-medium text-base">
                  Finalizar carrinho
                </h3>
              </button>
            </div>
            <div class="absolute w-0 h-0 -bottom-3 right-6" style="border-style: solid;  border-width: 24px 24px 0 24px; border-color: rgb(246 246 246) transparent transparent transparent;" />
          </main>
        </transition>
        <span class="pr-4">
          <button class="flex justify-center items-center relative cursor-pointer w-14 h-14 2xl:w-16 2xl:h-16 bg-complement-background-white rounded-full shadow-green-perso" @click="isOpenCarShopping = !isOpenCarShopping">
            <span class="relative">
              <ShoppingCartIcon class="h-9 w-9 2xl:h-10 2xl:w-10 text-primary-olivia-dark relative z-10 stroke-[1px]" />
              <span class="absolute z-20 -top-1 -right-1 bg-primary-green-dark rounded-full w-4 h-4 2xl:w-5 2xl:h-5 flex justify-center items-center shadow-sm">
                <p class="font-semibold text-complement-background-white text-sm">1</p>
              </span>
            </span>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon, ChevronRightIcon } from "@heroicons/vue/outline";

const isOpenCarShopping = ref(false);
const componentRef = ref();

useClickOutside(componentRef, () => {
  if (isOpenCarShopping.value) { isOpenCarShopping.value = false; }
});

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
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    background: #f6f6f6;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2b3e0f;
    border-radius: 10px;
    border: 3px solid #f6f6f6;
  }

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(24px);
}
</style>
