<template>
  <div class="bg-complement-background-soft xl:h-screen xl:overflow-hidden">
    <div class="container mx-auto xl:flex xl:items-center h-full">
      <main class="max-w-3xl 2xl:max-w-4xl mx-auto bg-complement-background-white rounded-2xl shadow-xl lg:p-12 2xl:p-16 pt-4 pb-16">
        <section class="flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between">
          <div class="flex flex-col items-center xl:items-start gap-4 xl:gap-16 w-full xl:max-w-[50%] mt-10">
            <h1 class="font-semibold text-2xl xl:text-3xl 2xl:text-4xl drop-shadow-2xl text-primary-olivia-dark text-center">
              Agora é com a gente!
            </h1>
            <h2 class="xl:self-end text-center xl:text-right font-medium text-xl lg:text-2xl xl:text-3xl leading-loose px-8">
              Fique tranquilo<br class="hidden xl:block"> <span class="text-primary-green-dark font-semibold">nossos robôs</span> já<br> estão <span class="text-primary-green-dark font-semibold">cuidando</span> de<br class="hidden xl:block"> seus <span class="text-primary-green-dark font-semibold">cadastros</span>
            </h2>
          </div>
          <div>
            <a href="https://storyset.com/technology" target="_blank">
              <img src="/illustration/working-in-progress.svg" class="aspect-square w-4/5 mx-auto 2xl:w-[380px] 2xl:h-[380px]" alt="Ilustração de boas vindas à tela de cadastro">
            </a>
          </div>
        </section>
        <section class="flex flex-col items-center lg:gap-4 xl:gap-6 2xl:gap-8 mt-10">
          <div class="flex flex-col justify-center items-center gap-2 xl:gap-4">
            <MailIcon class="h-16 w-16 lg:h-24 lg:w-24 text-primary-olivia-dark relative z-10" />
            <h3 class="text-xl lg:text-2xl text-center font-semibold text-primary-olivia-dark leading-relaxed">
              Avisaremos via email<br> quando o processo finalizar!
            </h3>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { MailIcon } from "@heroicons/vue/solid";

export default {
  components: {
    MailIcon
  },
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
          content: "Página de sucesso para cadastro de produto automatizado."
        }
      ]
      // bodyAttrs: {
      //   class: "test"
      // }
    });
    return { dynamic: ref(49), MailIcon };
  },
  head: {
    title: "Suplee - Cadastro automatizado em progresso"
  }
};
</script>
