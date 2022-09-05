<template>
  <div class="flex-1 md:flex-none flex justify-between px-8 sm:px-24 md:px-0 md:w-28 xl:w-36 text-primary-olivia-medium">
    <atoms-button-shopping-car @cart-shopping="handleClickCartShoppingHeader" />
    <atoms-button-user :is-logged="isLogged" @user="handleClickUserHeader" />
  </div>
</template>

<script setup lang="ts">
const emitClickActionsUserHeader = defineEmits(["user", "cartShopping"]);
defineProps<{
  isLogged: boolean,
}>();

function handleClickUserHeader () {
  emitClickActionsUserHeader("user");
}
function handleClickCartShoppingHeader () {
  emitClickActionsUserHeader("cartShopping");
}
</script>
