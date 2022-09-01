<template>
  <article class="w-full h-full bg-complement-background-white flex flex-col gap-2">
    <span class="flex flex-col">
      <p class="font-light text-secondary-green-gray-medium text-xs">Categoria</p>
      <h3 class="font-semibold text-lg">Green Tea Long Jin</h3>
    </span>
    <div class="flex justify-between">
      <div class="flex pr-7">
        <img src="/bg-complement/item-example.svg" width="72" height="110" alt="">
      </div>
      <div class="flex flex-1 flex-col justify-center gap-4">
        <span class="flex justify-between">
          <strong class="font-semibold text-base text-dark-light">Valor:</strong>
          <strong class="font-semibold text-lg text-dark-normal">R$ 12,90</strong>
        </span>
        <div class="flex justify-between">
          <atoms-button-remove-item />
          <molecules-modify-amout-product :available-quantity="30" :class-color-current-catergory="'text-dark-normal'" is-list-product />
        </div>
      </div>
    </div>
  </article>
</template>
