<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7 relative">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <molecules-purchase-sucess-login v-if="false" />
      <molecules-purchase-waiting-login v-else @on-click-button-auth="handleClickToLoginOrRegister" />
    </div>

    <atoms-modal :show="showModal">
      <template #header-modal>
        <h3 class="text-primary-olivia-dark font-semibold text-base lg:text-lg 2xl:text-xl">
          Entre com sua conta Suplee
        </h3>
      </template>
      <template #btn-close-modal>
        <button class="close-btn p-3" @click="showModal = !showModal">
          <XIcon class="h-6 w-6 text-current relative z-10" />
        </button>
      </template>
      <template #content-modal-category>
        <organisms-user-login-register-wrapper :auth-name="authName" @toggle-tab="toggleTab" />
      </template>
    </atoms-modal>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from "@heroicons/vue/solid";

const authName = ref("logar");
const showModal = ref(false);

function toggleTab (id: string) {
  authName.value = id;
}

function handleClickToLoginOrRegister (id: string) {
  toggleTab(id);
  showModal.value = true;
}

</script>
