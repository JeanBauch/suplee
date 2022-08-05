<template>
  <main class="flex flex-col justify-between w-full max-w-[39rem] h-[50rem] lg:h-[46.875rem] pt-6 pb-6 md:pb-10 px-9 md:px-[4.5rem] bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <div class="flex flex-col gap-4 md:gap-9">
      <div class="flex justify-center w-full relative">
        <div>
          <img src="/illustration/suplement-suplee.svg" alt="Modelo SVG de suplemento da suplee">
        </div>
      </div>
      <molecules-tabs-wrapper :current-auth-name="authName" @toggle-tab="HandleToggleTab">
        <atoms-content-tab title="logar" :current-auth-name="authName">
          <molecules-forms-user-login />
        </atoms-content-tab>
        <atoms-content-tab title="registrar" :current-auth-name="authName">
          <molecules-forms-user-register />
        </atoms-content-tab>
      </molecules-tabs-wrapper>
    </div>
    <div v-show="authName" class="w-full flex self-end px-12">
      <button
        class="w-full py-4 rounded-md flex justify-center items-center bg-primary-green-dark relative overflow-hidden transition-all duration-300
          before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)]
          before:transition-all before:duration-700 before:z-[2] before:-translate-x-56 before:-skew-x-12
          hover:before:translate-x-[420px] hover:bg-primary-olivia-medium
        "
      >
        <h2 class="font-semibold text-xl text-complement-background-white capitalize">
          {{ authName }}
        </h2>
      </button>
    </div>

    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-14 right-2 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
  </main>
</template>

<script setup lang="ts">
const emitToggleTabWrapper = defineEmits(["toggleTab"]);
defineProps<{
  authName: string,
}>();

function HandleToggleTab (id: string) {
  emitToggleTabWrapper("toggleTab", id);
}
</script>
