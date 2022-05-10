<template>
  <div class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
    <atoms-bg-hero />
    <organisms-header />

    <section class="container mx-auto 2xl:px-20 mt-4 md:mt-20">
      <div class="flex flex-col md:flex-row md:gap-4 xl:gap-0">
        <aside class="flex justify-center md:justify-center items-center md:items-start md:w-[50%] relative">
          <div class="px-12 md:px-0">
            <h2 class="font-semibold text-5xl xl:text-6xl leading-tight text-primary-olivia-dark drop-shadow-sm text-center hidden md:block">
              All-in-one<br>Suplement for<br> Your Strength
            </h2>
            <h3 class="font-semibold text-2xl leading-tight text-primary-olivia-dark drop-shadow-sm text-left block md:hidden">
              Imunize-se!
            </h3>
          </div>
          <div class="hidden md:block">
            <div class="absolute -bottom-24 left-0 xl:left-36 z-[2] select-none">
              <div>
                <img src="/bg-complement/suplemento-example.svg" class="drop-shadow-2xl shadow-primary-green-dark img-flutante" alt="">
              </div>
            </div>
            <div class="absolute bottom-8 right-0 xl:left-72 z-[1] select-none">
              <div>
                <img src="/bg-complement/suplemento-example.svg" class="md:hidden lg:block drop-shadow-2xl shadow-primary-green-dark rotate-[50deg] scale-[0.65] img-flutante-invertido" alt="">
              </div>
            </div>
          </div>
          <div class="block md:hidden relative pr-10">
            <div class="relative z-[2]">
              <img src="/bg-complement/suplemento-example-mobile.svg" class="drop-shadow-2xl shadow-primary-green-dark img-flutante" alt="">
            </div>
            <div class="absolute -top-8 -right-6 z-[1]">
              <img src="/bg-complement/suplemento-example-mobile.svg" class="md:hidden lg:block drop-shadow-2xl shadow-primary-green-dark rotate-[50deg] scale-[0.65] img-flutante-invertido" alt="">
            </div>
          </div>
          <div class="absolute bottom-0 left-0 md:-bottom-60 md:-left-[21rem] z-[1] hidden md:block select-none">
            <div>
              <img src="/bg-complement/hand.svg" class="drop-shadow-2xl shadow-primary-green-dark" alt="">
            </div>
          </div>
        </aside>
        <main class="flex flex-col justify-center items-end lg:items-center md:w-[50%] gap-6 md:gap-8">
          <div class="self-start px-6 sm:px-8 md:px-0 md:self-center">
            <h2 class="text-2xl md:text-4xl xl:text-5xl font-semibold text-primary-green-dark drop-shadow-sm">
              Encontre o que precisa
            </h2>
          </div>

          <div class="md:w-[90%] lg:w-[80%] xl:w-2/3 hidden md:block">
            <div class="relative w-full">
              <input
                id="search-products"
                type="text"
                name="search-products"
                placeholder="Digite aqui o produto que procura"
                class="w-full pl-5 pr-28 lg:pr-36 py-7 bg-complement-background-white rounded-lg shadow-green-perso overflow-hidden"
              >
              <div class="absolute z-10 w-1/6 lg:w-1/5 h-full rounded-lg top-0 right-0 bg-primary-green-medium before:content-[''] before:absolute before:top-0 before:-left-8 before:z-[-1] before:h-full before:w-[60px] before:rounded-tl-full before:rounded-bl-full before:bg-primary-green-medium" />
              <SearchIcon class="absolute top-3 right-4 lg:right-6 w-14 h-14 text-complement-background-white z-10" />
            </div>
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { SearchIcon } from "@heroicons/vue/outline";

</script>

<style scoped>
@keyframes float{
  0%,100%{
    /* box-shadow:0 5px 15px 0 rgba(0,0,0,.6); */
    filter: drop-shadow(0 5px 25px rgb(0 0 0 / 0.3));
    transform:translatey(0)
  }
  50%{
    /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    transform:translatey(-20px)
  }
}
@keyframes float-mirror{
  0%,100%{
    /* box-shadow:0 5px 15px 0 rgba(0,0,0,.6); */
    filter: drop-shadow(0 5px 25px rgb(0 0 0 / 0.3));
    transform:translatey(0) rotate(50deg) scale(0.65);
  }
  50%{
    /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    transform:translatey(-10px) rotate(50deg) scale(0.65);
  }
}

@media (max-width: 768px) {
  @keyframes float{
  0%,100%{
    /* box-shadow:0 5px 15px 0 rgba(0,0,0,.6); */
    filter: drop-shadow(0 5px 25px rgb(0 0 0 / 0.3));
    transform:translatey(0)
  }
  50%{
    /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    transform:translatey(-16px)
  }
}
@keyframes float-mirror{
  0%,100%{
    /* box-shadow:0 5px 15px 0 rgba(0,0,0,.6); */
    filter: drop-shadow(0 5px 25px rgb(0 0 0 / 0.3));
    transform:translatey(0) rotate(50deg) scale(0.65);
  }
  50%{
    /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    transform:translatey(-8px) rotate(50deg) scale(0.65);
  }
}
}

.img-flutante {
  animation: float 6s ease-in-out infinite;
}
.img-flutante-invertido {
  animation: float-mirror 4s ease-in-out infinite;
}
</style>
