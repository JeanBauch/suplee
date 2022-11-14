<template>
  <div v-if="storeUserLogged.userContainAddress" class="w-full flex items-center pb-1 relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-primary-olivia-dark after:rounded-full">
    <div class="mr-4">
      <input
        :id="valueTypeLocal"
        type="radio"
        name="typeAddress"
        class="accent-primary-olivia-dark"
        :v-model="storeUserLogged.user.userToken.address[indexAddress].enderecoPadrao"
        :checked="storeUserLogged.user.userToken.address[indexAddress].enderecoPadrao"
        @click="setNewAddressDefault()"
      >
    </div>
    <h3 class="font-semibold text-lg text-primary-olivia-dark w-28 mr-3">
      {{ storeUserLogged.user.userToken.address[indexAddress].tipoLocal === 0 ? 'Casa' : 'Trabalho' }}
    </h3>
    <p class="text-dark-normal pr-6 md:pr-0">
      {{ storeUserLogged.user.userToken.address[indexAddress].rua }}, {{ storeUserLogged.user.userToken.address[indexAddress].numero }} -
      {{ storeUserLogged.user.userToken.address[indexAddress].complemento }} - {{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].cidade }}/{{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].estado }} -
      {{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].cep }}
    </p>
    <TrashIcon class="absolute right-0 h-6 w-6 text-[#912f3c] z-10 cursor-pointer" @click="storeUserLogged.removeAddressToUser(storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].enderecoId)" />
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/outline";
import { useLoggedUser } from "~~/stores/useLoggedUser";

const propsListAddressUser = defineProps<{
  indexAddress: number;
}>();

const storeUserLogged = useLoggedUser();
const valueTypeLocal = computed(() => {
  return storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].tipoLocal === 0 ? "Casa" : "Trabalho";
});

function setNewAddressDefault () {
  storeUserLogged.setAddressIsDefault(storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].enderecoId);
}

</script>
