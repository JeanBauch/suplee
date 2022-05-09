<template>
  <div class="bg-complement-background-soft relative z-0 h-screen overflow-hidden">
    <atoms-bg-hero />
    <organisms-header />

    <section class="container mx-auto 2xl:px-20 mt-4 md:mt-20">
      <div class="flex flex-col md:flex-row">
        <aside class="flex justify-start md:justify-center md:w-[50%] relative">
          <div class="px-12 md:px-0 py-20 md:py-0">
            <h2 class="font-semibold text-6xl leading-tight text-primary-olivia-dark drop-shadow-sm text-center hidden md:block">
              All-in-one<br>Suplement for<br> Your Strength
            </h2>
            <h3 class="font-semibold text-2xl leading-tight text-primary-olivia-dark drop-shadow-sm text-left block md:hidden">
              Imunize-se!
            </h3>
          </div>
          <div class="absolute -bottom-[31rem] left-0 xl:left-36 z-[2] select-none">
            <div>
              <img src="/bg-complement/suplemento-example.svg" class="drop-shadow-2xl shadow-primary-green-dark img-flutante" alt="">
            </div>
          </div>
          <div class="absolute -bottom-[24rem] right-0 xl:left-72 z-[1] select-none">
            <div>
              <img src="/bg-complement/suplemento-example.svg" class="md:hidden lg:block drop-shadow-2xl shadow-primary-green-dark rotate-[50deg] scale-[0.65] img-flutante-invertido" alt="">
            </div>
          </div>
          <div class="absolute bottom-0 left-0 md:-bottom-[39rem] md:-left-[21rem] z-[1] hidden md:block select-none">
            <div>
              <img src="/bg-complement/hand.svg" class="drop-shadow-2xl shadow-primary-green-dark" alt="">
            </div>
          </div>
        </aside>
        <main class="md:w-[50%]">
          <h1>main</h1>
        </main>
      </div>
    </section>
  </div>
</template>

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

.img-flutante {
  animation: float 6s ease-in-out infinite;
}
.img-flutante-invertido {
  animation: float-mirror 4s ease-in-out infinite;
}
</style>
