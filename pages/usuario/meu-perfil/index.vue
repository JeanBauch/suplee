<template>
  <section class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden flex flex-col">
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - Meu perfil</Title>
        <Meta name="description" content="Página dedicada ao usuário cadastrar ou logar com uma conta existente na Suplee!" />
      </Head>
    </Html>
    <h1 class="text-center font-semibold text-3xl text-primary-olivia-dark py-8 border-b border-primary-olivia-dark">
      Meu perfil
    </h1>
    <main class="flex flex-col justify-between" style="height: calc(100vh - 200px)">
      <ul class="grid grid-cols-2 justify-center items-center py-8">
        <li class="p-6 flex flex-col self-center gap-3 justify-center items-center text-primary-olivia-dark" @click="handleClickButtonEditUser('NavigateToEditUser')">
          <button class="p-6 bg-complement-background-white rounded-full shadow-md">
            <PencilAltIcon class="h-16 w-16 text-current relative z-10" />
          </button>

          <h3 class="text-dark-normal text-xl text-center">
            Editar meu perfil
          </h3>
        </li>

        <li class="p-6 flex flex-col gap-3 justify-center items-center text-primary-olivia-dark" @click="handleClickButtonEditUser('NavigateToHistoricPurchase')">
          <button class="p-6 bg-complement-background-white rounded-full shadow-md">
            <ShoppingBagIcon class="h-16 w-16 text-current relative z-10" />
          </button>

          <h3 class="text-dark-normal text-xl text-center">
            Histórico de compras
          </h3>
        </li>
      </ul>

      <button class="flex justify-center items-center gap-6 text-[#912f3c] py-6" @click="handleClickLogoutUser">
        <span>
          <LogoutIcon class="h-10 w-10 text-current relative z-10" />
        </span>
        <span class="text-current text-xl">
          Deslogar da conta
        </span>
      </button>
    </main>
  </section>
</template>

<script setup lang="ts">
import { PencilAltIcon, ShoppingBagIcon, LogoutIcon } from "@heroicons/vue/outline";
import { useLoggedUser } from "~~/stores/useLoggedUser";
import { TypeEventsToPushRoute } from "~~/types/pushRouteEvents";

function handleClickButtonEditUser (section: TypeEventsToPushRoute) {
  usePushToRouteOnEvents(section);
}

function handleClickLogoutUser () {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  useLoggedUser().resetAtrr();
  usePushToRouteOnEvents("ViewTopPage");
}

</script>
