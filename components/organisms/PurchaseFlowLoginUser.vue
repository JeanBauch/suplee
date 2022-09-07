<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7 relative">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <molecules-purchase-sucess-login v-if="useLoggedUser().user.isLogged" />
      <molecules-purchase-waiting-login v-else @on-click-button-auth="handleClickToLoginOrRegister" />
    </div>

    <atoms-modal :show="showModal">
      <template #btn-close-modal>
        <button class="close-btn p-3" @click="showModal = !showModal">
          <XIcon class="h-6 w-6 text-current relative z-10" />
        </button>
      </template>
      <template #content-modal-category>
        <organisms-user-login-register-wrapper :auth-name="authName" @toggle-tab="toggleTab" @push-to-home="handleClickButtonLogin" />
      </template>
    </atoms-modal>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from "@heroicons/vue/solid";
import { useLoggedUser } from "~~/stores/useLoggedUser";

const authName = ref("logar");
const showModal = ref(false);
const isLogged = ref(false);

onMounted(() => {
  isLogged.value = getItemLocalStorage();
});

function toggleTab (id: string) {
  authName.value = id;
}

function handleClickToLoginOrRegister (id: string) {
  toggleTab(id);
  showModal.value = true;
}

function handleClickButtonLogin () {
  isLogged.value = getItemLocalStorage();
  if (isLogged.value) { showModal.value = false; }
}

function getItemLocalStorage () {
  return !!localStorage.getItem("accessToken");
}

</script>
