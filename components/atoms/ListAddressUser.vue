<template>
  <div v-if="storeUserLogged.userContainAddress" class="w-full flex items-center pb-1 relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-primary-olivia-dark after:rounded-full">
    <h3 class="font-semibold text-lg text-primary-olivia-dark w-16">
      {{ storeUserLogged.user.userToken.address[indexAddress].local === 0 ? 'Casa' : 'Trabalho' }}
    </h3>
    <p class="text-dark-normal ml-4 pr-6 md:pr-0">
      {{ storeUserLogged.user.userToken.address[indexAddress].street }}, {{ storeUserLogged.user.userToken.address[indexAddress].number }} -
      {{ storeUserLogged.user.userToken.address[indexAddress].complement }} - {{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].city }}/{{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].state }} -
      {{ storeUserLogged.user.userToken.address[propsListAddressUser.indexAddress].cep }}
    </p>
    <TrashIcon class="absolute right-0 h-6 w-6 text-[#912f3c] z-10 cursor-pointer" @click="storeUserLogged.removeAddressToUser" />
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/outline";
import { useLoggedUser } from "~~/stores/useLoggedUser";

const propsListAddressUser = defineProps<{
  indexAddress: number;
}>();

const storeUserLogged = useLoggedUser();

</script>
