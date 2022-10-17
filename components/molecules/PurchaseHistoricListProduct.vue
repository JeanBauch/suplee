<template>
  <div class="flex w-full h-[60%] md:h-auto overflow-auto bg-complement-background-white rounded-[0.625rem] md:rounded-tr-none md:rounded-br-none md:rounded-tl-[0.625rem] md:rounded-bl-[0.625rem] shadow-green-perso md:shadow-md">
    <table class="w-full h-fit relative">
      <thead class="bg-complement-background-normal sticky top-0 z-30 shadow-sm">
        <tr class="font-semibold text-primary-olivia-light text-base xl:text-lg">
          <th scope="col" class="text-current py-3 lg:py-4">
            Produtos
          </th>
          <th scope="col" class="w-[14.625rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Quantidade
          </th>
          <th scope="col" class="w-[14.625rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Valor
          </th>
          <th scope="col" class="w-[14.625rem] text-current py-3 lg:py-4 px-2 xl:px-0">
            Data da compra
          </th>
        </tr>
      </thead>
      <slot />
    </table>
  </div>
</template>

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
