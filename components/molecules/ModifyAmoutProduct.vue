<template>
  <div class="flex shadow rounded-md">
    <button class="flex justify-center items-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 border border-secondary-green-gray-light rounded-tl-md rounded-bl-md" @click="decrementAmoutProduct">
      <atoms-button-decrease-amount :class-color-current-catergory="classColorCurrentCatergory" />
    </button>
    <input v-model.lazy="currentAmoutProduct" type="number" class="appearance-none m-0 text-2xl 2xl:text-3xl text-center font-semibold w-16 md:w-20 2xl:w-24 xl:h-12 2xl:h-14 px-1 bg-complement-background-white border-t border-b border-secondary-green-gray-light">
    <button class="flex justify-center items-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 border border-secondary-green-gray-light rounded-tr-md rounded-br-md" @click="incrementAmoutProduct">
      <atoms-button-increase-amount :class-color-current-catergory="classColorCurrentCatergory" />
    </button>
  </div>
</template>

<script setup lang="ts">

const emitModifyAmoutProduct = defineEmits(["modifyAmoutProduct", "showRemainingAmount"]);
const propsPanelAmoutProduct = defineProps<{
  availableQuantity: number,
  classColorCurrentCatergory: string | false,
}>();

const currentAmoutProduct = ref(1);
let isShow = false;

if (propsPanelAmoutProduct.availableQuantity <= 10) { emitModifyAmoutProduct("showRemainingAmount", true); }

watch(currentAmoutProduct, () => {
  emitModifyAmoutProduct("modifyAmoutProduct", currentAmoutProduct.value);

  if (currentAmoutProduct.value >= (propsPanelAmoutProduct.availableQuantity - 10)) {
    emitModifyAmoutProduct("showRemainingAmount", true);
    isShow = true;
  } else if (isShow) { emitModifyAmoutProduct("showRemainingAmount", false); isShow = false; }
});

function incrementAmoutProduct () {
  if (currentAmoutProduct.value + 1 <= propsPanelAmoutProduct.availableQuantity) { currentAmoutProduct.value++; }
}

function decrementAmoutProduct () {
  if ((currentAmoutProduct.value > 1) && (currentAmoutProduct.value - 1 < propsPanelAmoutProduct.availableQuantity)) {
    currentAmoutProduct.value--;
  }
}

</script>
