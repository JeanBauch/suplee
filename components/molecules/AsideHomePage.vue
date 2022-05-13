<template>
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
          <img src="/bg-complement/suplemento-example.svg" width="410" height="479" class="drop-shadow-2xl shadow-primary-green-dark img-flutante" alt="Ilustração de um suplemento alimentar">
        </div>
      </div>
      <div class="absolute bottom-8 right-0 xl:left-72 z-[1] select-none">
        <div>
          <img src="/bg-complement/suplemento-example.svg" width="400" height="400" class="md:hidden lg:block drop-shadow-2xl shadow-primary-green-dark rotate-[50deg] scale-[0.65] img-flutante-invertido" alt="">
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
        <img src="/bg-complement/hand.svg" width="955" height="262" class="drop-shadow-2xl shadow-primary-green-dark" alt="">
      </div>
    </div>
  </aside>
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
