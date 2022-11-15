<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7 relative">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <molecules-purchase-sucess-login
        v-if="useLoggedUser().user.isLogged"
        @on-click-button-edit-address="handleClickButtonEditAddress"
        @identification="handleClickNextStep('identification')"
      />
      <molecules-purchase-waiting-login v-else @on-click-button-auth="handleClickToLoginOrRegister" />
    </div>

    <atoms-modal :show="showModal">
      <template #btn-close-modal>
        <button class="close-btn p-3" @click="handleCloseModal">
          <XIcon class="h-6 w-6 text-current relative z-10" />
        </button>
      </template>
      <template #content-modal-category>
        <organisms-edit-user
          v-if="authName === 'editUser'"
          @on-click-button-cancel="handleChangesInfoAddressUser"
        />
        <organisms-user-login-register-wrapper
          v-else
          :auth-name="authName"
          @toggle-tab="toggleTab"
          @push-to-home="handleClickButtonLogin"
        />
      </template>
    </atoms-modal>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from "@heroicons/vue/solid";
import { getInfoUserProfile } from "~~/services/identification";
import { useLoggedUser } from "~~/stores/useLoggedUser";
import { StepsPurchase } from "~~/types/purchaseFlow";

const emitEventOnClickNextStep = defineEmits(["confirmAddress", "identification"]);

const authName = ref("logar");
const showModal = ref(false);
const isLogged = ref(false);
const storeUserLogged = useLoggedUser();

onMounted(() => {
  isLogged.value = getItemLocalStorage();
});

getInfoUserOnMounted();
async function getInfoUserOnMounted () {
  const { data: userInfo } = await getInfoUserProfile();

  if (!userInfo.value) {
    return;
  }

  storeUserLogged.setInfoUserAfterLogin(
    userInfo.value.data.nome,
    userInfo.value.data.email,
    userInfo.value.data.cpf,
    userInfo.value.data.celular,
    userInfo.value.data.enderecos,
    userInfo.value.data.tipo,
    userInfo.value.data.usuarioId
  );

  authName.value = "editUser";
}

function toggleTab (id: string) {
  authName.value = id;
}

function handleClickToLoginOrRegister (id: string) {
  toggleTab(id);
  showModal.value = true;
}

function handleClickButtonEditAddress () {
  authName.value = "editUser";
  showModal.value = true;
}

function handleChangesInfoAddressUser () {
  getInfoUserOnMounted();
  showModal.value = false;
}

function handleClickButtonLogin () {
  isLogged.value = getItemLocalStorage();
  if (isLogged.value) { showModal.value = false; }
}

function getItemLocalStorage () {
  return !!localStorage.getItem("accessToken");
}

function handleClickNextStep (stage: StepsPurchase) {
  emitEventOnClickNextStep("identification", stage);
}

function handleCloseModal () {
  showModal.value = !showModal.value;

  if (authName.value === "editUser") {
    handleChangesInfoAddressUser();
  }
}

</script>
