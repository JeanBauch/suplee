<template>
  <div class="relative" @click="handleClickUserHeader">
    <UserIconSolid v-if="isUserLogged" class="h-10 w-10 text-current relative z-10" />
    <UserIcon v-else class="h-10 w-10 text-current relative z-10" />
    <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-complement-background-normal z-0 md:hidden shadow-lg" />
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/outline";
import { UserIcon as UserIconSolid } from "@heroicons/vue/solid";

const emitClickActionsUserHeader = defineEmits(["user"]);
const propsButtonUser = defineProps<{
  isLogged: boolean,
}>();

const isUserLogged = ref(false);
watch(() => propsButtonUser.isLogged, (value) => {
  isUserLogged.value = value;
});

function handleClickUserHeader () {
  emitClickActionsUserHeader("user");
}

</script>
