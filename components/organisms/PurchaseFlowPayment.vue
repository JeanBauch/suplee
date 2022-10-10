<template>
  <div class="w-full h-full flex justify-center items-start mt-4 2xl:mt-7 relative">
    <div class="w-full h-full xl:max-h-[624px] 2xl:max-h-[636px] flex flex-1 pb-4 xl:pb-6 2xl:pb-9">
      <MoleculesPurchasePaymentWrapper @statusPayment="handleClickFinishPayment" />
    </div>
    <atoms-custom-toast :show="createToast.show" :type="createToast.type" @is-show-toast="handleIsShowToast">
      <p>{{ createToast.message }}</p>
    </atoms-custom-toast>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~~/stores/useCart";
import { StepsPurchase } from "~~/types/purchaseFlow";
import { TypeToast } from "~~/types/toast";

const emitHandleClickFinishPayment = defineEmits(["payment"]);

const storeCart = useCart();

const createToast = reactive({
  message: "",
  type: "" as TypeToast,
  show: false
});

function handleIsShowToast (show: boolean) {
  createToast.show = show;
}

function handleClickFinishPayment (status: boolean, stage: StepsPurchase) {
  if (status) {
    setConfigToast("Sucesso no pagamento!", "success");
    emitHandleClickFinishPayment("payment", stage);
    storeCart.cleanCart();
    localStorage.removeItem("products");
  } else {
    setConfigToast("Erro no pagamento!", "error");
  }
  handleIsShowToast(true);
}

function setConfigToast (message: string, type:TypeToast) {
  createToast.message = message;
  createToast.type = type;
}

</script>
