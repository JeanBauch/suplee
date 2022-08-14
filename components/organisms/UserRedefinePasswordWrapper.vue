<template>
  <main class="flex flex-col justify-between w-full max-w-[39rem] h-[50rem] lg:h-[46.875rem] pt-6 pb-6 md:pb-10 px-9 md:px-[4.5rem] bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <div class="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <div class="flex justify-center w-full relative">
          <nuxt-link to="/" aria-label="Voltar para tela inicial">
            <div>
              <img src="/illustration/suplement-suplee.svg" alt="Modelo SVG de suplemento da suplee">
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col justify-between flex-1 w-full">
        <molecules-wrapper-user-redefine-password>
          <template #content-new-password>
            <div class="flex flex-col gap-7">
              <div>
                <h1 class="text-lg lg:text-xl xl:text-2xl font-bold text-center text-primary-olivia-dark">
                  Redefinir senha
                </h1>
              </div>
              <atoms-input-user-register
                :type-input="'senha'"
              />
              <atoms-input-user-register
                :type-input="'confirmar-senha'"
              />
            </div>
          </template>
          <template #content-button>
            <div class="w-full flex justify-center">
              <atoms-button-action-next-step-user
                :label-button="'Redefinir senha'"
                :pending="isPendingRedefinePassword"
                @next-step-user="handleAuthRedefinePassword"
              />
            </div>
          </template>
        </molecules-wrapper-user-redefine-password>
      </div>
    </div>
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-14 right-2 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <atoms-custom-toast :show="createToast.show" :type="createToast.type" @is-show-toast="handleIsShowToast">
      <p>{{ createToast.message }}</p>
    </atoms-custom-toast>
  </main>
</template>

<script setup lang="ts">
import { useRegisterStore } from "~~/stores/useRegisterStore";
import { TypeToast } from "~~/types/toast.js";

type ResponseRedefinePassword = {
  success: boolean,
  data: string[]
}

const emitSuccessRedefinePassword = defineEmits(["SuccessRedefinePassword"]);
const propsUserRedefinePassword = defineProps<{
  usuarioId: string,
  codigoConfirmacao: string,
}>();
const userRegisterStore = useRegisterStore();

const createToast = reactive({
  message: "",
  type: "" as TypeToast,
  show: false
});
const isPendingRedefinePassword = ref(false);
const onResponseErrorMessage = ref("");
const responseDoneRedefinePassword = reactive({
  success: false as boolean,
  data: [] as string[]
});

async function handleAuthRedefinePassword () {
  try {
    if (!(userRegisterStore.validateFieldsPassword())) {
      handleCreateToast("error", "Preencha todos os campos corretamente");
      return;
    }
    isPendingRedefinePassword.value = true;
    const { data: responseRedefinePassword, pending } = await useFetch<ResponseRedefinePassword>("/Identidade/alterar-senha", {
      baseURL: useBaseURL(),
      method: "POST",
      body: {
        usuarioId: propsUserRedefinePassword.usuarioId,
        codigoConfirmacao: propsUserRedefinePassword.codigoConfirmacao,
        senha: userRegisterStore.user.senha,
        confirmacaoSenha: userRegisterStore.user.confirmacaoSenha
      },
      parseResponse: JSON.parse,
      // eslint-disable-next-line require-await
      async onResponseError ({ response }) {
        onResponseErrorMessage.value = response._data.data[0];
        throw new Error(response._data.data[0]);
      }
    });
    isPendingRedefinePassword.value = pending.value;
    responseDoneRedefinePassword.data = responseRedefinePassword.value.data;
    handleCreateToast("success", "Senha alterada com sucesso!");
    setTimeout(() => {
      handleSuccessRedefinePassword();
    }, 500);
    return;
  } catch (error) {
    if (error instanceof Error) {
      handleCreateToast("error", onResponseErrorMessage.value);
    }
  }
}

function handleSuccessRedefinePassword () {
  emitSuccessRedefinePassword("SuccessRedefinePassword");
}

function handleCreateToast (type: TypeToast, message: string) {
  createToast.show = true;
  createToast.type = type;
  createToast.message = message;
}

function handleIsShowToast (show: boolean) {
  createToast.show = show;
}

</script>
