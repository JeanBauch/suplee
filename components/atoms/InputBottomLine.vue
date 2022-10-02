<template>
  <div class="w-full pb-1 relative flex items-center after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-primary-olivia-dark after:rounded-full">
    <label
      :for="propsInputButtomLine.inputKey"
      :class="small ? 'text-base' : 'text-lg lg:text-xl'"
      class="font-semibold text-primary-olivia-dark"
    >
      {{ propsInputButtomLine.label }}:
    </label>
    <input
      :id="propsInputButtomLine.inputKey"
      v-model.lazy.trim="valueField"
      type="text"
      :name="propsInputButtomLine.inputKey"
      :class="[
        propsInputButtomLine.isModified ? 'text-dark-normal' : 'text-secondary-green-gray-dark',
        propsInputButtomLine.small ? 'text-base' : 'text-base lg:text-lg',
        propsInputButtomLine.small ? 'text-right' : 'text-left',
        propsInputButtomLine.small ? 'mr-0' : 'mr-8',
      ]"
      class="bg-transparent outline-none ml-4 w-full"
      :disabled="!propsInputButtomLine.isModified"
    >
    <PencilIcon v-if="(propsInputButtomLine.isModified && !small)" class="absolute right-0 h-6 w-6 text-primary-olivia-dark z-10" />
  </div>
</template>

<script setup lang="ts">
import { PencilIcon } from "@heroicons/vue/outline";
import { useLoggedUser } from "~~/stores/useLoggedUser";

const emitModifyValueBottomLine = defineEmits(["modifyValueInput"]);

const propsInputButtomLine = defineProps<{
  isModified: boolean;
  label: string;
  inputKey: string;
  small?: boolean;
}>();

const valueField = ref("");
const storeUser = useLoggedUser();

if (propsInputButtomLine.inputKey === "name-user") {
  valueField.value = storeUser.user.userToken.nome;
}

watch(valueField, () => {
  emitModifyValueBottomLine("modifyValueInput", valueField.value, propsInputButtomLine.inputKey);
});

/* const userComputed = computed(() => ({
  value: propsInputButtomLine.label === "Nome"
    ? "Jean Augusto Bauch"
    : propsInputButtomLine.label === "CPF"
      ? "468.675.618-96"
      : propsInputButtomLine.label === "Email"
        ? "jean.bauch06@gmail.com"
        : propsInputButtomLine.label === "Celular"
          ? "11 99999-9999"
          : ""
})); */

</script>
