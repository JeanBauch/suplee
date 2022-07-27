<template>
  <div class="w-full xl:w-[60%] pb-5 pt-20 xl:pt-6 xl:p-6 2xl:p-8 -mt-16 mb-20 md:mb-0 xl:mt-0 bg-primary-olivia-dark rounded-b-3xl xl:rounded-tl-3xl xl:rounded-bl-3xl xl:rounded-br-none shadow-green-perso relative z-10">
    <div class="w-full h-full flex flex-1 flex-col px-5">
      <div class="flex flex-col gap-3 2xl:gap-4 pb-4 2xl:pb-5 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full after:bg-secondary-green-gray-dark">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Descrição do Produto
        </h4>
        <p class="font-light text-base xl:text-sm 2xl:text-base text-complement-background-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada est purus nunc ac sed. Ut scelerisque condimentum pharetra curabitur tristique. Tortor tincidunt odio semper cras phasellus sapien, scelerisque maecenas.
        </p>
      </div>
      <div class="flex flex-col gap-3 2xl:gap-4 py-4 2xl:py-5 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full after:bg-secondary-green-gray-dark">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Efeito
        </h4>
        <div class="flex items-center justify-between">
          <div class="flex flex-col justify-start items-center w-full max-w-[33%] h-full gap-1 group">
            <div class="bg-complement-background-white rounded-full flex items-center justify-center shadow p-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14">
              <img src="/icons/icon-imunity.svg" class="transition-all grayscale group-hover:grayscale-0" alt="">
            </div>
            <p class="font-light xl:text-sm 2xl:text-base text-complement-background-white text-center flex items-center justify-center flex-1">
              Imunidade
            </p>
          </div>

          <div class="flex flex-col justify-center items-center w-full max-w-[33%] h-full gap-1 group">
            <div class="bg-complement-background-white rounded-full flex items-center justify-center shadow p-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14">
              <img src="/icons/icon-bone.svg" class="transition-all grayscale group-hover:grayscale-0" alt="">
            </div>
            <p class="font-light xl:text-sm 2xl:text-base text-complement-background-white text-center flex items-center justify-center flex-1">
              Fortalecimento dos ossos
            </p>
          </div>

          <div class="flex flex-col justify-center items-center w-full max-w-[33%] h-full gap-1 group">
            <div class="bg-complement-background-white rounded-full flex items-center justify-center shadow p-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14">
              <img src="/icons/icon-muscle.svg" class="transition-all grayscale group-hover:grayscale-0" alt="">
            </div>
            <p class="font-light xl:text-sm 2xl:text-base text-complement-background-white text-center flex items-center justify-center flex-1">
              Fortalecimento muscular
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 2xl:gap-4 pt-4 2xl:pt-5 relative">
        <h4 class="font-semibold text-xl 2xl:text-2xl text-complement-background-white">
          Composição
        </h4>
        <ul class="px-6">
          <li class="font-light xl:text-sm 2xl:text-base text-complement-background-white list-disc">
            Vitamina D
          </li>
          <li class="font-light xl:text-sm 2xl:text-base text-complement-background-white list-disc">
            Vitamina C
          </li>
          <li class="font-light xl:text-sm 2xl:text-base text-complement-background-white list-disc">
            Ômega 3
          </li>
          <li class="font-light xl:text-sm 2xl:text-base text-complement-background-white list-disc">
            Substrato X
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
