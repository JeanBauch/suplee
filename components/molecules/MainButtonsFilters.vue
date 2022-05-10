<template>
  <main class="flex flex-col justify-center items-end lg:items-center md:w-[50%] gap-6 md:gap-8">
    <div class="self-start px-6 sm:px-8 md:px-0 md:self-center">
      <h2 class="text-2xl md:text-4xl xl:text-5xl font-semibold text-primary-green-dark drop-shadow-sm">
        Encontre o que precisa
      </h2>
    </div>

    <div class="md:w-[90%] lg:w-[80%] xl:w-2/3 hidden md:block">
      <molecules-search-product call-to-action />
    </div>

    <div class="w-full px-6 sm:px-8 md:px-0 md:w-[90%] lg:w-[80%] xl:w-2/3 flex flex-col gap-6 md:gap-8 relative">
      <div class="group relative cursor-pointer shadow-green-perso rounded-lg bg-[#FBFFFA] before:content-[''] before:absolute before:transition-all before:duration-500 before:w-2 before:h-full before:bg-secondary-orange-dark before:rounded-tl-lg before:rounded-bl-lg hover:before:w-full hover:before:rounded-lg">
        <div class="relative flex items-center h-full py-3 px-5">
          <div class="relative min-w-[48px]">
            <img src="/icons/icon-bone.svg" alt="icone da categoria de minerais - fortificação óssea">
          </div>
          <div class="ml-7">
            <h3 class="font-light text-2xl text-secondary-orange-dark transition-colors duration-500 group-hover:text-[#FFF]">
              Minerais
            </h3>
            <p class="font-light text-sm text-[#898989] transition-colors duration-500 group-hover:text-[#FBFFFA]">
              Ajuda na fortificação óssea
            </p>
          </div>
        </div>
      </div>

      <div class="group relative cursor-pointer shadow-green-perso rounded-lg bg-[#FBFFFA] before:content-[''] before:absolute before:transition-all before:duration-500 before:w-2 before:h-full before:bg-primary-lemon-dark before:rounded-tl-lg before:rounded-bl-lg hover:before:w-full hover:before:rounded-lg">
        <div class="relative flex items-center h-full py-3 px-5">
          <div class="relative min-w-[48px] text-[#FFF]">
            <img src="/icons/icon-muscle.svg" alt="icone da categoria Muscular - Auxilia na reconstrução do tecido muscular">
          </div>
          <div class="ml-7">
            <h3 class="font-light text-2xl text-primary-lemon-dark duration-500 group-hover:text-[#FFF]">
              Muscular - Proteínas
            </h3>
            <p class="font-light text-sm text-[#898989] transition-colors duration-500 group-hover:text-[#FBFFFA]">
              Auxilia na reconstrução do tecido muscular
            </p>
          </div>
        </div>
      </div>

      <div class="group relative cursor-pointer shadow-green-perso rounded-lg bg-[#FBFFFA] before:content-[''] before:absolute before:transition-all before:duration-500 before:w-2 before:h-full before:bg-primary-green-dark before:rounded-tl-lg before:rounded-bl-lg hover:before:w-full hover:before:rounded-lg">
        <div class="relative flex items-center h-full py-3 px-5">
          <div class="relative min-w-[48px] text-[#FFF]">
            <img src="/icons/icon-imunity.svg" alt="icone da categoria de Vitaminas - Ajuda na regularização do organismo">
          </div>
          <div class="ml-7">
            <h3 class="font-light text-2xl text-primary-green-dark duration-500 group-hover:text-[#FFF]">
              Vitaminas
            </h3>
            <p class="font-light text-sm text-[#898989] transition-colors duration-500 group-hover:text-[#FBFFFA]">
              Ajuda na regularização do organismo
            </p>
          </div>
        </div>
      </div>

      <div class="group relative cursor-pointer shadow-green-perso rounded-lg bg-[#FBFFFA] before:content-[''] before:absolute before:transition-all before:duration-500 before:w-2 before:h-full before:bg-primary-olivia-dark before:rounded-tl-lg before:rounded-bl-lg hover:before:w-full hover:before:rounded-lg">
        <div class="relative flex items-center h-full py-3 px-5">
          <div class="relative min-w-[48px] text-[#FFF]">
            <img src="/icons/icon-brain.svg" alt="icone da categoria Ômega-3 e DHA - Ajuda no combate de declínio cerebral">
          </div>
          <div class="ml-7">
            <h3 class="font-light text-2xl text-primary-olivia-dark duration-500 group-hover:text-[#FFF]">
              Ômega-3 e DHA
            </h3>
            <p class="font-light text-sm text-[#898989] transition-colors duration-500 group-hover:text-[#FBFFFA]">
              Ajuda no combate de declínio cerebral
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
