<template>
  <div class="w-full h-full flex flex-col md:flex-row shadow-green-perso-desktop gap-5 md:gap-0">
    <div class="w-full md:w-1/2 h-full flex flex-col gap-2 xl:gap-4 2xl:gap-6 justify-center items-center bg-complement-background-white rounded-tl-[0.625rem] rounded-bl-[0.625rem] px-8 py-8 md:px-0 md:py-0 shadow-green-perso md:shadow-none">
      <div class="flex flex-row md:flex-col self-start md:self-center items-center gap-8 md:gap-2 xl:gap-4 2xl:gap-6">
        <div class="max-w-[4rem] md:w-full md:max-w-[10rem] xl:max-w-[12rem] 2xl:max-w-[16rem] h-auto aspect-square rounded-full bg-[#912f3c] flex justify-center items-center">
          <atoms-anim-checked class="w-full max-w-[13.5rem]" :icon-name="'ExclamationIcon'" />
        </div>
        <h3 class="text-dark-normal font-semibold text-base lg:text-lg">
          Você não está logado!
        </h3>
      </div>
      <span class="w-full md:max-w-[14rem] lg:max-w-sm mt-6 2xl:mt-8">
        <p class="font-semibold text-base lg:text-lg text-dark-light text-center">Entre em sua conta ou se registre na Suplee para prosseguir!</p>
      </span>
    </div>
    <div class="w-full md:w-1/2 h-full flex flex-col justify-between bg-complement-background-normal rounded-tr-[0.625rem] rounded-br-[0.625rem] px-8 py-8 md:px-14 md:py-8 lg:px-16 lg:py-10 xl:px-20 2xl:px-24 xl:py-12 2xl:py-14 shadow-green-perso md:shadow-none relative before:hidden before:md:block before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-secondary-green-gray-medium">
      <span class="flex flex-col justify-between gap-4 xl:gap-6 2xl:gap-8">
        <h3 class="text-center font-bold text-xl lg:text-2xl text-primary-olivia-medium hidden md:block">
          Entre em sua conta para continuar
        </h3>
      </span>
      <span>
        <h5 class="font-semibold text-lg lg:text-xl text-dark-light lg:leading-loose text-center">
          Ainda não possui uma <span class="text-primary-olivia-dark text-xl lg:text-2xl font-semibold">conta</span> na Suplee?
          <br>
          Se <span class="text-primary-olivia-dark text-xl lg:text-2xl font-semibold">registre</span> agora mesmo!
        </h5>
      </span>
      <div class="flex justify-center flex-col-reverse gap-2 xl:gap-4 2xl:gap-6 mt-8">
        <button class="w-full flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border border-primary-olivia-dark bg-primary-olivia-dark rounded-md shadow-lg hover:bg-opacity-80 group transition-colors" @click="onHandlerClickButtons('registrar')">
          <h4 class="font-semibold text-xs sm:text-sm 2xl:text-base text-complement-background-white transition-colors">
            Registrar-se na Suplee
          </h4>
        </button>

        <button class="w-full flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border border-primary-olivia-dark bg-transparent rounded-md shadow hover:shadow-lg hover:bg-primary-olivia-medium group transition-all" @click="onHandlerClickButtons('logar')">
          <h4 class="font-semibold text-xs sm:text-sm 2xl:text-base text-primary-olivia-medium group-hover:text-complement-background-white group-hover:tracking-[0.075rem] transition-all">
            Logar com minha conta Suplee
          </h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emitterOnClickToAuthentication = defineEmits(["onClickButtonAuth"]);

function onHandlerClickButtons (id: string) {
  emitterOnClickToAuthentication("onClickButtonAuth", id);
}

</script>
