<template>
  <main class="flex flex-col justify-between w-full max-w-[39rem] h-[50rem] lg:h-[46.875rem] pt-6 pb-6 md:pb-10 px-9 md:px-[4.5rem] bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <template v-if="responseRegisterStatus.status === 'waiting'">
      <div class="flex flex-col gap-4 md:gap-9">
        <div class="flex justify-center w-full relative">
          <div>
            <img src="/illustration/suplement-suplee.svg" alt="Modelo SVG de suplemento da suplee">
          </div>
        </div>
        <molecules-tabs-wrapper :current-auth-name="authName" @toggle-tab="handleToggleTab">
          <atoms-content-tab title="logar" :current-auth-name="authName">
            <molecules-forms-user-login />
          </atoms-content-tab>
          <atoms-content-tab title="registrar" :current-auth-name="authName">
            <molecules-forms-user-register />
          </atoms-content-tab>
        </molecules-tabs-wrapper>
      </div>
      <div v-show="authName" class="w-full flex self-end justify-center items-center">
        <atoms-button-action-next-step-user :label-button="authName" :pending="isPending" @next-step-user="handleSubmitForm" />
      </div>
    </template>
    <template v-else-if="responseRegisterStatus.status === 'success'">
      <molecules-wrapper-register-user-send-email :data-response-register="responseRegisterStatus.data" :pending="isPending" @next-step-user="handleResendEmail" />
    </template>
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-14 right-2 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
  </main>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useLoggedUser } from "~~/stores/useLoggedUser.js";
import { useLoginUserStore } from "~~/stores/useLoginUserStore";
import { useRegisterStore } from "~~/stores/useRegisterStore";
import { contentAcessToken } from "~~/types/userLogged.js";

type StatusResponseRegisterUser = "waiting" | "success" | "error";

type ResponseRegisterUser = {
  success: boolean,
  data: string
}

type ResponseLoginUser = {
  success: boolean,
  data: contentAcessToken
}

const userRegisterStore = useRegisterStore();
const userLoginStore = useLoginUserStore();
const currentUserLoggedStore = useLoggedUser();
const baseURL:string = useBaseURL();

const emitToggleTabWrapper = defineEmits(["toggleTab", "pushToHome"]);
const propsUserLoginRegisterWrapper = defineProps<{
  authName: string,
}>();

const responseRegisterStatus = reactive({
  status: "waiting" as StatusResponseRegisterUser,
  data: ""
});
const onResponseErrorMessage = ref("");
const isPending = ref(false);
const toast = useToast();

function handleToggleTab (id: string) {
  emitToggleTabWrapper("toggleTab", id);
}

function handleSubmitForm () {
  if (propsUserLoginRegisterWrapper.authName === "registrar") {
    requestRegisterUser();
  } else if (propsUserLoginRegisterWrapper.authName === "logar") {
    requestLoginUser();
  }
}

async function handleResendEmail () {
  try {
    isPending.value = true;
    const { data: responseResendEmail, pending } = await useFetch<ResponseRegisterUser>(`Identidade/reenviar-email-confirmar-cadastro/${userRegisterStore.user.cpf}`, {
      baseURL,
      method: "POST",
      parseResponse: JSON.parse,
      // eslint-disable-next-line require-await
      async onResponseError ({ response }) {
        onResponseErrorMessage.value = response._data.data[0];
        throw new Error(response._data.data[0]);
      }
    });
    isPending.value = pending.value;
    // CREATE TOASTFY
    toast.success(responseResendEmail.value.data);
  } catch (error) {
    if (error instanceof Error) {
      // CREATE TOASTFY ERROR
      toast.error(onResponseErrorMessage.value);
    }
  }
}

async function requestRegisterUser () {
  try {
    if (!((propsUserLoginRegisterWrapper.authName === "registrar") && userRegisterStore.validateAllFields())) {
      // CREATE TOASTFY ERROR
      toast.error("Verifique se todos os campos estão corretos!");
      return;
    }
    isPending.value = true;
    const { data: responseRegisterUser, pending } = await useFetch<ResponseRegisterUser>("/Identidade/cadastrar-usuario", {
      baseURL,
      method: "POST",
      body: userRegisterStore.user,
      parseResponse: JSON.parse,
      // eslint-disable-next-line require-await
      async onResponseError ({ response }) {
        onResponseErrorMessage.value = response._data.data[0];
        throw new Error(response._data.data[0]);
      }
    });
    isPending.value = pending.value;
    responseRegisterStatus.data = responseRegisterUser.value.data;
    responseRegisterStatus.status = "success";
    // CREATE TOASTFY SUCESSO
    toast.success("Sucesso!");
    return;
  } catch (error) {
    if (error instanceof Error) {
      // CREATE TOASTFY ERROR
      toast.error(onResponseErrorMessage.value);
    }
  }
}

async function requestLoginUser () {
  try {
    if (!userLoginStore.validateAllFields()) {
      // CREATE TOASTFY ERROR
      console.log(toast);
      toast.error("Verifique se todos os campos estão corretos!");
      return;
    }
    const currentEndPoint = userLoginStore.isValidComputed.email ? "/Autenticacao/login-email" : "/Autenticacao/login-cpf";
    const currentBodyToResquest = userLoginStore.isValidComputed.email ? { email: userLoginStore.user.email, senha: userLoginStore.user.senha } : { cpf: userLoginStore.user.cpf, senha: userLoginStore.user.senha };
    isPending.value = true;
    const { data: responseLoginUser, pending } = await useFetch<ResponseLoginUser>(currentEndPoint, {
      baseURL,
      method: "POST",
      body: currentBodyToResquest,
      parseResponse: JSON.parse,
      // eslint-disable-next-line require-await
      async onResponseError ({ response }) {
        onResponseErrorMessage.value = response._data.data[0];
        throw new Error(response._data.data[0]);
      }
    });
    isPending.value = pending.value;
    if (responseLoginUser.value === null) {
      throw new Error("Usuário não encontrado");
    }
    saveToUserLoggedStore(responseLoginUser.value.data);
    localStorage.setItem("accessToken", responseLoginUser.value.data.accessToken);
    localStorage.setItem("userId", responseLoginUser.value.data.userToken.usuarioId);
    // CREATE TOASTFY SUCESSO
    toast.success("Login efetuado com sucesso!");
    emitToggleTabWrapper("pushToHome", "/");
    return;
  } catch (error) {
    if (error instanceof Error) {
      // CREATE TOASTFY ERROR
      toast.error(onResponseErrorMessage.value);
    }
  }
}

function saveToUserLoggedStore (user: contentAcessToken) {
  currentUserLoggedStore.$patch({ user });
}

</script>
