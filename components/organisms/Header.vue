<template>
  <div class="w-full bg-primary-olivia-light md:bg-transparent transition-colors duration-700 relative rounded-b-[5.5rem] sm:rounded-b-[7rem] drop-shadow-2xl shadow-primary-olivia-dark z-50">
    <div class="absolute inset-0 block md:hidden w-full h-full z-0">
      <div class="bg-[url('/bg-complement/bg-header-vital.svg')] bg-center bg-contain bg-no-repeat absolute w-full h-full" />
    </div>
    <div class="md:container mx-auto md:px-10 2xl:px-20 py-6 xl:py-8">
      <div class="flex flex-1 justify-between items-center relative">
        <nuxt-link to="/" aria-label="Voltar para página inicial">
          <div class="text-5xl md:text-4xl font-semibold text-complement-background-normal md:text-primary-olivia-medium md:w-28 xl:w-36 absolute md:relative md:inset-0 move-logo transition-transform duration-500">
            <h2 class="drop-shadow-2xl">
              Suplee
            </h2>
          </div>
        </nuxt-link>

        <molecules-list-section-header />

        <molecules-action-user-header
          @user="pushToPageUser"
          @cart-shopping="pushToPurchaseFlow"
          @user-edit-profile="pushToEditProfile"
          @logout="logoutUser"
          @user-purchase-historic="userPurchaseHistoric"
        />
      </div>
    </div>
    <molecules-search-product @search-product="searchProductName" />
  </div>
</template>

<script setup>
import { useLoggedUser } from "~~/stores/useLoggedUser";

const emit = defineEmits(["searchProduct"]);
const router = useRouter();

onMounted(() => {
  useLoggedUser().actionUserLogged(!!localStorage.getItem("accessToken"));
});

function pushToPageUser () {
  if (useLoggedUser().user.isLogged) {
    router.push("/");
  } else {
    router.push({
      name: "usuario-group-id",
      params: {
        group: "autenticacao",
        id: "logar"
      }
    });
  }
}

function pushToPurchaseFlow () {
  router.push("/finalizar-compra");
}

function pushToEditProfile () {
  router.push("/usuario/editar-perfil");
}

function logoutUser () {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  useLoggedUser().resetAtrr();
}

function userPurchaseHistoric () {
  router.push("/historico-de-compras");
}

function searchProductName (productName) {
  emit("searchProduct", productName);
}

</script>
