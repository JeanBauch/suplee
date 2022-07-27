<template>
  <div class="flex flex-col justify-between w-full xl:w-[40%] bg-complement-background-white rounded-tr-xl rounded-tl-xl rounded-bl-[1.875rem] rounded-br-[1.875rem] xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-tl-none xl:rounded-bl-none px-5 pt-5 pb-9 xl:px-6 2xl:px-8 xl:py-9 2xl:py-11 xl:border-l xl:border-l-secondary-green-gray-medium shadow-green-perso relative z-20">
    <div class="flex flex-col xl:gap-4 2xl:gap-5">
      <div class="flex md:hidden flex-row xl:flex-col xl:gap-4 2xl:gap-5 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-start gap-1 w-full">
          <h3 class="font-semibold text-3xl text-dark-normal">
            Green Tea Long Jin
          </h3>
          <h4 class="font-medium text-base text-secondary-green-gray-dark">
            Categoria: <strong class="font-semibold ml-2">Vitaminas</strong>
          </h4>
        </div>
      </div>

      <div class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 pt-4 md:pt-0 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-center xl:items-start gap-1 w-1/2 xl:w-full">
          <h5 class="font-semibold text-lg 2xl:text-xl text-secondary-green-gray-dark">
            Valor total
          </h5>
          <h3 class="font-semibold text-3xl md:text-2xl 2xl:text-3xl">
            R$12,90
          </h3>
        </div>

        <div class="flex flex-col w-1/2 xl:w-full xl:gap-2 2xl:gap-3 xl:pb-4 2xl:pb-5 relative after:content-[''] after:xl:w-full after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
          <h5 class="font-semibold text-center xl:text-left xl:text-lg 2xl:text-xl text-secondary-green-gray-dark">
            Quantidade
          </h5>
          <div class="flex justify-center items-center">
            <molecules-modify-amout-product />
          </div>
        </div>
      </div>

      <div class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 py-4 xl:py-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-center xl:items-start xl:gap-4 2xl:gap-5 w-1/2 xl:w-full">
          <atoms-input-cep />
        </div>

        <div class="flex flex-col items-start gap-1 xl:gap-2 w-1/2 xl:w-full pl-7 md:pl-0">
          <div class="flex w-full flex-col md:flex-row justify-between">
            <p class="font-semibold text-primary-olivia-dark text-sm">
              Entrega padrão:
            </p>
            <p class="font-medium text-primary-olivia-dark text-sm">
              prazo de 2 semanas
            </p>
          </div>

          <div>
            <span class="font-semibold text-secondary-green-gray-dark text-sm">
              Valor: R$ 5,99
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-9 xl:pt-0 w-[80%] xl:w-full self-center">
      <atoms-button-add-to-cart />
    </div>
  </div>
</template>
