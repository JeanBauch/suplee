<template>
  <main class="flex flex-col justify-between w-full max-w-[39rem] h-[50rem] lg:h-[46.875rem] pt-6 pb-6 md:pb-10 px-9 md:px-[4.5rem] bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <!-- <div v-if="!isActiveUser" class="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <h1 class="font-light text-primary-olivia-dark text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center">
          <strong class="font-semibold text-xl lg:text-2xl xl:text-3xl">Clique no botão abaixo para ativar sua conta!</strong>
        </h1>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          class="w-[60%] py-4 rounded-md flex justify-center items-center bg-primary-green-dark relative overflow-hidden transition-all duration-300
              before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)]
              before:transition-all before:duration-700 before:z-[2] before:-translate-x-56 before:-skew-x-12
              hover:before:translate-x-[420px] hover:bg-primary-olivia-medium
            "
          @click="handleAuthConfirmEmail"
        >
          <h2 class="font-semibold text-base lg:text-lg xl:text-xl text-complement-background-white capitalize">
            Ativar conta
          </h2>
        </button>
      </div>
    </div>
    <div v-else class="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <h1 class="font-light text-primary-olivia-dark text-lg lg:text-xl xl:text-2xl text-center">
          <strong class="font-semibold text-xl lg:text-2xl xl:text-3xl">Email verificado!</strong><br>sua conta foi ativada com sucesso.
        </h1>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          class="w-[60%] py-4 rounded-md flex justify-center items-center bg-primary-green-dark relative overflow-hidden transition-all duration-300
              before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)]
              before:transition-all before:duration-700 before:z-[2] before:-translate-x-56 before:-skew-x-12
              hover:before:translate-x-[420px] hover:bg-primary-olivia-medium
            "
          @click="handleLoginAfterActiveUser"
        >
          <h2 class="font-semibold text-base lg:text-lg xl:text-xl text-complement-background-white capitalize">
            Logar
          </h2>
        </button>
      </div>
    </div> -->
    <molecules-wrapper-register-user-confirm-email>
      <template #content-title>
        <h1 v-if="!isActiveUser" class="font-light text-primary-olivia-dark text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center">
          <strong class="font-semibold text-xl lg:text-2xl xl:text-3xl">Clique no botão abaixo para ativar sua conta!</strong>
        </h1>
        <h1 v-else class="font-light text-primary-olivia-dark text-lg lg:text-xl xl:text-2xl text-center">
          <strong class="font-semibold text-xl lg:text-2xl xl:text-3xl">Email verificado!</strong><br>sua conta foi ativada com sucesso.
        </h1>
      </template>
      <template #content-button>
        <atoms-button-action-next-step-user v-if="!isActiveUser" :label-button="'Ativar conta'" :pending="isPending" @next-step-user="handleAuthConfirmEmail" />
        <atoms-button-action-next-step-user v-else :label-button="'Logar'" :pending="false" @next-step-user="handleLoginAfterActiveUser" />
      </template>
    </molecules-wrapper-register-user-confirm-email>
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-14 right-2 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
  </main>
</template>

<script setup lang="ts">
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

type ResponseConfirmRegisterUser = {
  success: boolean,
  data: string[]
}

const emitClickButtonPushToLogin = defineEmits(["NextStepUserPushToLogin"]);
const propsUserLoginConfirmEmailWrapper = defineProps<{
  usuarioId: string,
  codigoConfirmacao: string,
}>();

const baseURLConfirmRegister:string = useBaseURL();
const isActiveUser = ref(false);
const isPending = ref(false);
const responseConfirmRegisterUserState = reactive({
  success: false as boolean,
  data: [] as string[]
});
const onResponseErrorMessage = ref("");

async function handleAuthConfirmEmail () {
  try {
    isPending.value = true;
    const { data: responseAuthConfirmEmail, pending } = await useFetch<ResponseConfirmRegisterUser>(`/Identidade/confirmar-cadastro/${propsUserLoginConfirmEmailWrapper.usuarioId}` + `/${propsUserLoginConfirmEmailWrapper.codigoConfirmacao}`, {
      baseURL: baseURLConfirmRegister,
      method: "POST",
      parseResponse: JSON.parse,
      // eslint-disable-next-line require-await
      async onResponseError ({ response }) {
        onResponseErrorMessage.value = response._data.data[0];
        throw new Error(response._data.data[0]);
      }
    });
    isPending.value = pending.value;
    isActiveUser.value = true;
    responseConfirmRegisterUserState.data = responseAuthConfirmEmail.value.data;
    createToast("Sucesso", {
      type: "success"
    });
    return;
  } catch (error) {
    if (error instanceof Error) {
      createToast(onResponseErrorMessage.value, {
        type: "danger"
      });
    }
  }
}

function handleLoginAfterActiveUser () {
  emitClickButtonPushToLogin("NextStepUserPushToLogin");
}
</script>
