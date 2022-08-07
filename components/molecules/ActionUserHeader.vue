<template>
  <div class="flex-1 md:flex-none flex justify-between px-8 sm:px-24 md:px-0 md:w-28 xl:w-36 text-primary-olivia-medium">
    <atoms-button-shopping-car />
    <atoms-button-user :is-logged="isLogged" @user="handleClickUserHeader" />
  </div>
</template>

<script setup lang="ts">
const emitClickActionsUserHeader = defineEmits(["user", "cart"]);
defineProps<{
  isLogged: boolean,
}>();

function handleClickUserHeader () {
  emitClickActionsUserHeader("user");
}
</script>
