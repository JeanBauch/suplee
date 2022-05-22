<template>
  <div class="bg-complement-background-soft min-h-screen xl:h-screen xl:overflow-hidden">
    <div class="container mx-auto xl:flex xl:items-center h-full">
      <main class="max-w-3xl 2xl:max-w-4xl mx-auto bg-complement-background-white rounded-2xl shadow-xl lg:p-12 2xl:p-16">
        <section class="flex flex-col-reverse xl:flex-row items-center xl:justify-around 2xl:justify-between">
          <div class="flex flex-col items-center gap-4 xl:gap-8">
            <h1 class="font-semibold text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-2xl text-primary-olivia-dark text-center">
              Bem vindo,
            </h1>
            <h3 class="font-medium text-xl xl:text-2xl 2xl:text-3xl drop-shadow-md text-secondary-green-gray-dark text-center w-[80%] xl:w-2/3">
              a tela de cadastro de produtos!
            </h3>
          </div>
          <div>
            <a href="https://storyset.com/data" target="_blank">
              <img src="/illustration/boas-vindas.svg" class="aspect-square xl:w-[280px] xl:h-[280px] 2xl:w-[380px] 2xl:h-[380px]" alt="Ilustração de boas vindas à tela de cadastro">
            </a>
          </div>
        </section>
        <section class="flex flex-col items-center lg:gap-4 xl:gap-6 2xl:gap-8 mt-8">
          <div class="w-[80%] sm:w-[70%] lg:w-full xl:px-28 2xl:px-10">
            <p class="font-medium xl:text-lg 2xl:text-xl text-dark-normal text-left sm:text-center leading-relaxed">
              Aqui você pode escolher se deseja cadastrar<br> seus produtos <span class="text-primary-olivia-dark font-semibold">manualmente</span> ou de <span class="text-primary-olivia-dark font-semibold">forma automatizada</span>
            </p>
          </div>
          <div class="w-full mt-4 mb-16 lg:mb-0">
            <div>
              <h4 class="font-bold text-lg xl:text-xl 2xl:text-2xl text-primary-olivia-dark text-center">
                Quero cadastrar de forma:
              </h4>
            </div>
            <div class="flex flex-col md:flex-row gap-4 xl:gap-0 justify-evenly items-center mt-2 xl:mt-5 xl:mb-4">
              <NuxtLink to="/register-admins/123">
                <button class="flex items-center justify-center  py-2 px-16 xl:py-3 xl:px-16 2xl:py-4 2xl:px-20 border border-primary-olivia-dark rounded-md shadow-md hover:bg-primary-olivia-dark group transition-colors max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[16rem]">
                  <h3 class="font-bold xl:text-lg 2xl:text-xl text-primary-olivia-dark group-hover:text-complement-background-white transition-colors">
                    Manual
                  </h3>
                </button>
              </NuxtLink>
              <NuxtLink to="/cadastro-produto/automatico/upload">
                <button class="flex items-center justify-center py-2 px-16 xl:py-3 xl:px-16 2xl:py-4 2xl:px-20 border border-primary-olivia-dark bg-primary-olivia-dark rounded-md shadow-lg hover:bg-opacity-80 group transition-colors max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[16rem]">
                  <h3 class="font-bold xl:text-lg 2xl:text-xl text-complement-background-white transition-colors">
                    Automatica
                  </h3>
                </button>
              </NuxtLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    useHead({
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "pt-br"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Página de boas vinda para o cadastro de seus produtos."
        }
      ]
      // bodyAttrs: {
      //   class: "test"
      // }
    });
    return { dynamic: ref(49) };
  },
  head: {
    title: "Suplee - Cadastro dos produtos"
  }
};
</script>
