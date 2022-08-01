<template>
  <div class="flex w-full max-w-[14rem] xl:max-w-none relative rounded-md">
    <input
      id="CEPInput"
      v-model.lazy.trim="currentCEP"
      type="number"
      placeholder="Digite seu CEP"
      maxlength="8"
      autocomplete="off"
      class="flex w-full h-full py-3 2xl:py-[0.875rem] pl-8 md:pl-9 2xl:pl-[2.625rem] rounded-md border border-secondary-green-gray-medium bg-complement-background-white text-primary-olivia-dark placeholder:text-secondary-green-gray-light placeholder:text-sm placeholder:sm:text-base"
      @focusin="emitEventOnFocusInput(true)"
      @focusout="emitEventOnFocusInput(false)"
    >

    <div class="absolute w-9 2xl:w-[2.625rem] text-secondary-green-gray-light h-full flex justify-center items-center">
      <LocationMarkerIcon class="h-6 w-6 2xl:h-8 2xl:w-8 text-current relative z-10 stroke-1" />
    </div>

    <button :class="classColorCurrentCatergory" class="absolute top-0 right-0 w-11 2xl:w-12 h-full flex justify-center items-center rounded-tr-md rounded-br-md">
      <SearchIcon class="h-6 2xl:h-7 w-6 2xl:w-7 text-complement-background-white relative z-10 stroke-2" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { LocationMarkerIcon, SearchIcon } from "@heroicons/vue/outline";

const emitModifyCurrentCep = defineEmits(["modifyCurrentCep", "onClickInput", "inputInvalidValue"]);
const currentCEP = ref();

defineProps<{
  classColorCurrentCatergory: string | false,
}>();

watch(currentCEP, () => {
  if (currentCEP.value.toString().length === 0) { return; }
  if ((currentCEP.value.toString().length < 8 || currentCEP.value.toString().length > 8) || (currentCEP.value.toString().includes("-"))) {
    emitModifyCurrentCep("inputInvalidValue");
  } else {
    emitModifyCurrentCep("modifyCurrentCep", currentCEP.value);
  }
});

function emitEventOnFocusInput (isEmitter: boolean) {
  emitModifyCurrentCep("onClickInput", isEmitter);
}

</script>
