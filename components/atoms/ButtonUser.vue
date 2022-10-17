<template>
  <div class="relative group">
    <div class="relative cursor-pointer" @click="handleClickUser('user')">
      <UserIconSolid v-if="useLoggedUser().user.isLogged" class="h-10 w-10 text-current relative z-10" />
      <UserIcon v-else class="h-10 w-10 text-current relative z-10" />
      <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-complement-background-normal z-0 md:hidden shadow-lg" />
    </div>
    <div v-if="useLoggedUser().user.isLogged" class="group-hover:flex hidden absolute flex-col right-0 bg-complement-background-normal rounded-md w-[180px] overflow-hidden z-[100] transition-all">
      <span class="cursor-pointer flex w-full justify-end p-3 border-b-[1px] border-secondary-green-gray-medium bg-complement-background-normal hover:bg-primary-olivia-medium hover:text-complement-background-white" @click="handleClickUser('userEditProfile')">
        Editar meu perfil
      </span>
      <span class="cursor-pointer flex w-full justify-end p-3 border-b-[1px] border-secondary-green-gray-medium bg-complement-background-normal hover:bg-primary-olivia-medium hover:text-complement-background-white" @click="handleClickUser('userPurchaseHistoric')">
        Histórico de compras
      </span>
      <span class="cursor-pointer flex w-full justify-end p-3 bg-complement-background-normal hover:bg-primary-olivia-medium hover:text-complement-background-white" @click="handleClickUser('logout')">
        Sair
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/outline";
import { UserIcon as UserIconSolid } from "@heroicons/vue/solid";
import { useLoggedUser } from "~~/stores/useLoggedUser";

type TypeEventsOnClick = "user" | "userEditProfile" | "logout" | "userPurchaseHistoric";

const emitClickActionsUserHeader = defineEmits(["user", "userEditProfile", "logout", "userPurchaseHistoric"]);

function handleClickUser (event: TypeEventsOnClick) {
  emitClickActionsUserHeader(event);
}

</script>
