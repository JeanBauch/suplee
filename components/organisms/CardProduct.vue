<template>
  <div class="w-full h-80 flex items-end">
    <div class="w-[90%] h-[80%] pl-4 pr-6 bg-[#FFF] relative z-20 rounded-xl shadow-md">
      <div class="flex justify-center relative -top-1/4">
        <img src="/bg-complement/item-example.svg" class="drop-shadow-xl" alt="">
      </div>
      <div class="absolute top-6 left-3">
        <img src="/icons/icon-imunity.svg" class="-rotate-12 opacity-80" width="28" height="28" alt="Icone para representar que o produto selecionado se trate da categoria Imunidade">
      </div>
      <article class="relative z-30 -top-1/4">
        <h4 class="text-base text-dark-normal font-semibold mb-4">
          Green Tea Long
        </h4>

        <div class="flex flex-col gap-2 w-[85%]">
          <div class="flex justify-between text-sm">
            <span class="text-secondary-green-gray-dark font-normal">Caterogia:</span>
            <p class="text-dark-normal font-light">
              Imunity
            </p>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-secondary-green-gray-dark font-normal">Efeito:</span>
            <p class="text-dark-normal font-light">
              Imunity
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center mt-4">
          <h4 class="text-lg text-dark-normal font-semibold mb-4">
            R$12,90
          </h4>
        </div>
      </article>

      <div class="absolute z-20 bottom-2 left-0 w-full h-8 bg-[#FFF] rounded-b-xl" />
      <div class="absolute z-10 bottom-0 left-0 w-full h-8 bg-primary-green-dark rounded-b-xl" />

      <atoms-button-shopping-cart-product />
      <atoms-button-quick-view-product />
    </div>
  </div>
</template>
