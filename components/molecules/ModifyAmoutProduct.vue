<template>
  <div :class="classObjectButtonAmoutProduct.container" class="flex items-center">
    <button :class="classObjectButtonAmoutProduct.styleButtonQuantity" class="flex justify-center items-center rounded-tl-md rounded-bl-md" @click="decrementAmoutProduct">
      <atoms-button-decrease-amount :class-color-current-catergory="classColorCurrentCatergory" small-icon />
    </button>
    <input v-model.lazy="refCurrentAmoutProduct" type="number" :class="classObjectButtonAmoutProduct.inputNumber" class="appearance-none m-0 text-center font-semibold px-1">
    <button :class="classObjectButtonAmoutProduct.styleButtonQuantity" class="flex justify-center items-center rounded-tr-md rounded-br-md" @click="incrementAmoutProduct">
      <atoms-button-increase-amount :class-color-current-catergory="classColorCurrentCatergory" small-icon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";

const emitModifyAmoutProduct = defineEmits(["modifyAmoutProduct", "showRemainingAmount"]);
const propsPanelAmoutProduct = defineProps<{
  availableQuantity: number,
  classColorCurrentCatergory: string | false,
  isListProduct?: boolean,
  idProductInListProduct?: string
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
  if (verifyItemOnCartList()) {
    useCart().incrementAmoutProduct(verifyIdProduct());
    return;
  }
  if (currentAmoutProduct.value + 1 <= propsPanelAmoutProduct.availableQuantity) { currentAmoutProduct.value++; }
}

function decrementAmoutProduct () {
  if (verifyItemOnCartList()) {
    useCart().decrementAmoutProduct(verifyIdProduct());
    return;
  }
  if ((currentAmoutProduct.value > 1) && (currentAmoutProduct.value - 1 < propsPanelAmoutProduct.availableQuantity)) {
    currentAmoutProduct.value--;
  }
}

const classObjectButtonAmoutProduct = computed(() => ({
  container: propsPanelAmoutProduct.isListProduct ? "gap-3 md:gap-1 xl:gap-2" : "shadow rounded-md",
  styleButtonQuantity: propsPanelAmoutProduct.isListProduct
    ? "w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
    : "border border-secondary-green-gray-light w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14",
  inputNumber: propsPanelAmoutProduct.isListProduct
    ? "text-lg 2xl:text-xl w-8 h-10 lg:w-10 xl:w-12 xl:h-12 bg-secondary-green-gray-light bg-opacity-60 rounded-md"
    : "text-2xl 2xl:text-3xl w-16 md:w-20 2xl:w-24 h-10 xl:h-12 2xl:h-14 bg-complement-background-white border-t border-b border-secondary-green-gray-light"
}));

function verifyItemOnCartList () {
  return propsPanelAmoutProduct.isListProduct && propsPanelAmoutProduct.idProductInListProduct;
}

function verifyIdProduct () {
  if (propsPanelAmoutProduct.idProductInListProduct !== undefined) {
    return propsPanelAmoutProduct.idProductInListProduct;
  }
  return "";
}

const refCurrentAmoutProduct = computed(() => {
  return verifyItemOnCartList()
    ? useCart().getAmoutProductById(verifyIdProduct())
    : currentAmoutProduct.value;
});
</script>
