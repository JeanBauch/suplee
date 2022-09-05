<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <div class="w-full h-full flex flex-col md:flex-row shadow-green-perso-desktop gap-5 md:gap-0">
        <molecules-purchase-list-product-in-cart class="hidden sm:block" />
        <div class="sm:hidden px-5 py-7 rounded-[0.625rem] bg-complement-background-white shadow-green-perso">
          <div class="flex flex-col gap-3 overflow-auto" style="max-height: calc(100vh - 87.5px - 375px);">
            <molecules-purchase-card-product-cart-shopping />
            <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
            <molecules-purchase-card-product-cart-shopping />
            <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
            <molecules-purchase-card-product-cart-shopping />
            <div class="w-full h-[1px] rounded-full bg-complement-background-soft" />
            <molecules-purchase-card-product-cart-shopping />
          </div>
        </div>
        <molecules-purchase-card-resume />
      </div>
    </div>
  </div>
</template>
