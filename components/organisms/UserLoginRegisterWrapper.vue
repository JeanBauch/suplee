<template>
  <main class="flex flex-col justify-between min-w-[100vw] md:min-w-0 min-h-screen md:min-h-0 md:max-w-[39rem] md:h-[50rem] lg:h-[48.75rem] pt-6 pb-6 md:pb-10 px-9 md:px-[4.5rem] bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <template v-if="responseRegisterStatus.status === 'waiting'">
      <div class="flex flex-col gap-4 md:gap-9">
        <div class="flex justify-center w-full relative">
          <nuxt-link to="/" aria-label="Voltar para tela inicial">
            <div>
              <img src="/illustration/suplement-suplee.svg" alt="Modelo SVG de suplemento da suplee">
            </div>
          </nuxt-link>
        </div>
        <molecules-tabs-wrapper :current-auth-name="authName" @toggle-tab="handleToggleTab">
          <atoms-content-tab title="logar" :current-auth-name="authName">
            <molecules-forms-user-login @redefine-password="handleIsRedefinePassword" />
          </atoms-content-tab>
          <atoms-content-tab title="registrar" :current-auth-name="authName">
            <molecules-forms-user-register />
          </atoms-content-tab>
        </molecules-tabs-wrapper>
      </div>
      <div v-show="authName" class="w-full flex flex-col gap-6 lg:gap-2 self-end justify-center items-center mt-7">
        <atoms-button-action-next-step-user :label-button="isRedefinePassword ? 'Enviar email' : authName" :pending="isPending" @next-step-user="handleSubmitForm" />

        <nuxt-link class="w-[80%]" to="/">
          <button class="w-full flex items-center justify-center py-4 px-2 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 border lg:border-none border-primary-olivia-dark bg-transparent rounded-md shadow lg:shadow-none hover:shadow-lg hover:bg-primary-olivia-medium group transition-all">
            <h2 class="font-semibold text-lg sm:text-base text-primary-olivia-medium group-hover:text-complement-background-white group-hover:tracking-[0.075rem] transition-all">
              Voltar para tela inicial
            </h2>
          </button>
        </nuxt-link>
      </div>
    </template>
    <template v-else-if="responseRegisterStatus.status === 'success'">
      <molecules-wrapper-register-user-send-email :data-response-register="responseRegisterStatus.data" :pending="isPending" @next-step-user="handleResendEmail" />
    </template>
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-24 right-0 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <atoms-custom-toast :show="createToast.show" :type="createToast.type" @is-show-toast="handleIsShowToast">
      <p>{{ createToast.message }}</p>
    </atoms-custom-toast>
  </main>
</template>

<script setup lang="ts">
import { useLoggedUser } from "~~/stores/useLoggedUser.js";
import { useLoginUserStore } from "~~/stores/useLoginUserStore";
import { useRegisterStore } from "~~/stores/useRegisterStore";
import { contentAcessToken } from "~~/types/userLogged.js";
import { TypeToast } from "~~/types/toast";
import { getAllInfoUser } from "~~/services/identification";
import { ProductOnCard, ProductsToSendRequest } from "~~/types/product";
import { postRegisterCartShopping } from "~~/services/purchase";

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

const isRedefinePassword = ref(false);
const responseRegisterStatus = reactive({
  status: "waiting" as StatusResponseRegisterUser,
  data: ""
});
const onResponseErrorMessage = ref("");
const isPending = ref(false);
const createToast = reactive({
  message: "",
  type: "" as TypeToast,
  show: false
});

function handleToggleTab (id: string) {
  emitToggleTabWrapper("toggleTab", id);
}

function handleSubmitForm () {
  if (propsUserLoginRegisterWrapper.authName === "registrar") {
    requestRegisterUser();
  } else if (propsUserLoginRegisterWrapper.authName === "logar" && !isRedefinePassword.value) {
    requestLoginUser();
  } else if (propsUserLoginRegisterWrapper.authName === "logar" && isRedefinePassword.value) {
    handleSendEmailToResetPassword();
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
    handleCreateToast("success", responseResendEmail.value.data);
  } catch (error) {
    if (error instanceof Error) {
      handleCreateToast("error", onResponseErrorMessage.value);
    }
  }
}

async function requestRegisterUser () {
  try {
    if (!((propsUserLoginRegisterWrapper.authName === "registrar") && userRegisterStore.validateAllFields())) {
      handleCreateToast("error", "Preencha todos os campos corretamente");
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
    handleCreateToast("success", "Sucesso!");
    return;
  } catch (error) {
    if (error instanceof Error) {
      handleCreateToast("error", onResponseErrorMessage.value);
    }
  }
}

async function requestLoginUser () {
  try {
    if (!userLoginStore.validateAllFields()) {
      handleCreateToast("error", "Preencha todos os campos");
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
    const userContent = responseLoginUser.value.data;
    saveToUserLoggedStore({ ...userContent, isLogged: true });
    currentUserLoggedStore.actionUserLogged(true);
    userLoginStore.resetState();
    localStorage.setItem("accessToken", responseLoginUser.value.data.accessToken);
    localStorage.setItem("userId", responseLoginUser.value.data.userToken.usuarioId);
    handleCreateToast("success", "sucesso!");
    saveInfoUserToStore();
    getCarShopping();
    handleSetTimeoutExpiredToken(responseLoginUser.value.data.expiresIn);
    emitToggleTabWrapper("pushToHome", "/");
    return;
  } catch (error) {
    if (error instanceof Error) {
      handleCreateToast("error", onResponseErrorMessage.value);
    }
  }
}

async function handleSendEmailToResetPassword () {
  try {
    if (!(userLoginStore.isValidComputed.cpf)) {
      handleCreateToast("error", "Preencha o CPF corretamente");
      return;
    }
    isPending.value = true;
    const { data: responseSendEmailToResetPassword, pending } = await useFetch<ResponseRegisterUser>(`/Identidade/recuperar-senha/${userLoginStore.user.cpf}`, {
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
    handleCreateToast("success", responseSendEmailToResetPassword.value.data);
    return;
  } catch (error) {
    if (error instanceof Error) {
      handleCreateToast("error", onResponseErrorMessage.value);
    }
  }
}

function saveToUserLoggedStore (user: contentAcessToken) {
  user.userToken.address = [];
  currentUserLoggedStore.$patch({ user });
}

async function saveInfoUserToStore () {
  const { data: userInfo } = await getAllInfoUser();
  currentUserLoggedStore.setInfoUserAfterLogin(
    userInfo.value.data.usuario.nome,
    userInfo.value.data.usuario.email,
    userInfo.value.data.usuario.cpf,
    userInfo.value.data.usuario.celular,
    userInfo.value.data.usuario.enderecos
  );
}

async function getCarShopping () {
  let cartShopping:ProductOnCard[] = [];
  let cartShoppingSendToRequest:ProductsToSendRequest[] = [];

  if (localStorage.getItem("products")) {
    const products = localStorage.getItem("products");

    if (products !== null) {
      cartShopping = JSON.parse(products);
      cartShoppingSendToRequest = cartShopping.map((item) => {
        return { produtoId: item.id, nomeProduto: item.name, quantidade: item.quantity, valorUnitario: item.price };
      });
      await postRegisterCartShopping(cartShoppingSendToRequest);
    }
  }
}

function handleIsRedefinePassword (value: boolean) {
  isRedefinePassword.value = value;
}

function handleCreateToast (type: TypeToast, message: string) {
  createToast.show = true;
  createToast.type = type;
  createToast.message = message;
}

function handleIsShowToast (show: boolean) {
  createToast.show = show;
}

function handleSetTimeoutExpiredToken (timeToExpireToken: number) {
  setTimeout(function () {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    console.log("local storage limpo!");
  }, (timeToExpireToken * 100));
}
</script>
