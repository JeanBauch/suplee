<template>
  <div class="flex-1 md:flex-none flex justify-between px-8 sm:px-24 md:px-0 md:w-28 xl:w-36 text-primary-olivia-medium">
    <atoms-button-shopping-car @cart-shopping="handleClickUserHeader('cartShopping')" />
    <atoms-button-user
      :is-logged="isUserLogged"
      @user="handleClickUserHeader('user')"
      @user-edit-profile="handleClickUserHeader('userEditProfile')"
      @logout="handleClickUserHeader('logout')"
    />
  </div>
</template>

<script setup lang="ts">

type TypeEventsOnClick = "cartShopping" | "user" | "userEditProfile" | "logout";

const emitClickActionsUserHeader = defineEmits(["user", "cartShopping", "userEditProfile", "logout"]);
const propsActionUser = defineProps<{
  isLogged: boolean,
}>();

const isUserLogged = ref(false);
watch(() => propsActionUser.isLogged, (value) => {
  isUserLogged.value = value;
});

function handleClickUserHeader (event: TypeEventsOnClick) {
  emitClickActionsUserHeader(event);
}
</script>
