<template>
  <div class="bg-complement-background-soft min-h-screen xl:h-screen xl:overflow-hidden">
    <div class="container mx-auto xl:flex xl:items-center h-full">
      <main class="max-w-3xl 2xl:max-w-4xl mx-auto bg-complement-background-white rounded-2xl shadow-xl p-10 lg:p-12 2xl:p-16">
        <section class="flex flex-col justify-center items-center">
          <div>
            <h1 class="font-semibold text-3xl text-primary-olivia-dark">
              Cadastro de produtos por automação RPA
            </h1>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-center">
            <div class="flex items-center gap-4">
              <span class="text-complement-background-white font-bold text-4xl font flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-full bg-primary-olivia-medium">
                1
              </span>
              <h2 class="text-primary-olivia-medium text-xl font-semibold">
                Prepare uma planilha com os produtos que deseje cadastrar!
              </h2>
            </div>
            <div>
              <img src="/illustration/planilha.svg" width="280" height="280" class="aspect-square" alt="Ilustração de planilha">
            </div>
          </div>
          <div class="flex w-full flex-col-reverse md:flex-row md:justify-between">
            <div class="flex items-center gap-4 order-2">
              <span class="text-complement-background-white font-bold text-4xl font flex flex-shrink-0 order-2 items-center justify-center w-20 h-20 rounded-full bg-primary-olivia-medium">
                2
              </span>
              <h2 class="text-primary-olivia-medium text-xl font-semibold text-right order-2 md:order-1">
                Salve a planilha como .CSV
              </h2>
            </div>
            <div class="flex self-center justify-center items-center order-1 relative w-[320px] h-[256px]">
              <img src="/illustration/palheta-planilha.svg" width="320" height="256" class="aspect-auto absolute left-0" alt="Complemento de composição">
              <img src="/illustration/planilha-csv.webp" width="260" height="200" class="aspect-auto relative hover:scale-125 transition-transform duration-500" alt="Ilustração de planilha">
            </div>
          </div>
          <div class="flex w-full flex-col md:flex-row justify-between mt-16">
            <div class="flex items-center gap-4">
              <span class="text-complement-background-white font-bold text-4xl font flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-full bg-primary-olivia-medium">
                3
              </span>
              <h2 class="text-primary-olivia-medium text-xl font-semibold">
                De o upload da sua planilha aqui:
              </h2>
            </div>
            <div class="flex flex-1 justify-center items-center">
              <NuxtLink to="/cadastro-produto/automatico/sucesso">
                <button class="py-6 px-8 rounded-md bg-primary-green-dark shadow-md text-complement-background-white font-medium text-xl">
                  Escolher arquivo
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
          content: "Upload da planilha com os produtos para que o robô cadestre de forma automatica os produtos"
        }
      ]
    });
    return { dynamic: ref(49) };
  },
  head: {
    title: "Suplee - Upload da Planilha"
  }
};
</script>
