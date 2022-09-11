<template>
  <div class="flex flex-col justify-between w-full xl:w-[40%] bg-complement-background-white rounded-tr-xl rounded-tl-xl rounded-bl-[1.875rem] rounded-br-[1.875rem] xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-tl-none xl:rounded-bl-none px-5 pt-5 pb-9 xl:px-6 2xl:px-8 xl:py-9 2xl:py-11 xl:border-l xl:border-l-secondary-green-gray-medium shadow-green-perso relative z-20">
    <div class="flex flex-col xl:gap-4 2xl:gap-5">
      <div class="flex md:hidden flex-row xl:flex-col xl:gap-4 2xl:gap-5 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-start gap-1 w-full">
          <h3 class="font-semibold text-3xl text-dark-normal">
            {{ productName }}
          </h3>
          <h4 class="font-medium text-base text-secondary-green-gray-dark">
            Categoria: <strong class="font-semibold ml-2">{{ productCategory }}</strong>
          </h4>
        </div>
      </div>

      <div class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 pt-4 md:pt-0 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-center xl:items-start gap-1 w-1/2 xl:w-full">
          <h5 class="font-semibold xl:text-lg 2xl:text-xl text-secondary-green-gray-dark">
            Valor total
          </h5>
          <h3 class="font-semibold text-3xl md:text-2xl 2xl:text-3xl">
            {{ price }}
          </h3>
        </div>

        <div class="flex flex-col w-1/2 xl:w-full xl:gap-2 2xl:gap-3 xl:pb-4 2xl:pb-5 relative after:content-[''] after:xl:w-full after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
          <div class="flex flex-col xl:flex-row items-center w-full justify-between">
            <h5 class="font-semibold text-center xl:text-left xl:text-lg 2xl:text-xl text-secondary-green-gray-dark">
              Quantidade
            </h5>
            <span v-if="showRemainingAmount" class="text-[#912f3c] text-sm font-medium hidden xl:block">
              restam {{ productActionCart.availableQuantity - currentAmoutProduct }}
            </span>
          </div>
          <div class="flex justify-center items-center">
            <molecules-modify-amout-product
              :available-quantity="productActionCart.availableQuantity"
              :class-color-current-catergory="classObject.textColorCategory"
              @modify-amout-product="handleModifyAmoutProduct"
              @show-remaining-amount="handleShowRemainingAmount"
            />
          </div>
          <span v-if="showRemainingAmount" class="text-[#912f3c] text-sm font-medium text-center block xl:hidden">
            restam {{ productActionCart.availableQuantity - currentAmoutProduct }}
          </span>
        </div>
      </div>

      <div class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 py-4 xl:py-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-secondary-green-gray-medium after:rounded-full">
        <div class="flex flex-col justify-center items-center xl:items-start xl:gap-4 2xl:gap-5 w-1/2 xl:w-full px-0 md:px-7 lg:px-0">
          <atoms-input-cep
            :class-color-current-catergory="classObject.themeCategory"
            @modify-current-cep="handleModifyCep"
            @input-invalid-value="handleInvalidInputCep"
            @on-click-input="onClickInput"
          />
        </div>

        <div v-if="dataResponseShipping.status.success" class="flex flex-col items-start gap-1 xl:gap-2 w-1/2 xl:w-full pl-7 md:pl-0">
          <div class="flex w-full flex-col md:flex-row justify-between">
            <p class="font-semibold text-primary-olivia-dark text-sm">
              Entrega padrão:
            </p>
            <p class="font-medium text-primary-olivia-dark text-sm">
              prazo de 2 semanas
            </p>
          </div>

          <div>
            <span class="font-semibold text-secondary-green-gray-dark text-sm">
              Valor: R$ {{ dataResponseShipping.content.preco.toFixed(2).toString().replace(".", ",") }}
            </span>
          </div>
        </div>

        <div v-else-if="dataResponseShipping.status.error" class="flex flex-col items-start gap-1 xl:gap-2 w-1/2 xl:w-full pl-7 md:pl-0">
          <p class="font-semibold text-[#912f3c] text-sm">
            {{ dataResponseShipping.status.message }}
          </p>
        </div>

        <div v-else-if="dataResponseShipping.status.waiting" class="flex flex-col items-start justify-center gap-1 xl:gap-2 w-1/2 xl:w-full pl-7 md:pl-0">
          <p class="font-semibold text-primary-olivia-dark text-sm">
            Digite apenas número!
          </p>
        </div>

        <div v-else-if="dataResponseShipping.status.pending" class="flex items-center justify-center gap-6 w-1/2 xl:w-full p-2 relative">
          <div
            class="w-3 h-3 relative z-10 loader-label
            before:content-[''] before:absolute before:rounded-full before:mix-blend-multiply before:bg-primary-olivia-light before:w-2 before:h-2 before:z-10
            after:content-[''] after:absolute after:rounded-full after:mix-blend-multiply after:bg-primary-olivia-dark after:w-2 after:h-2 after:z-10 after:delay-500
            "
          />
          <p class="font-semibold text-primary-olivia-dark text-sm">
            Calculando seu frete...
          </p>
        </div>
      </div>
    </div>

    <div class="pt-9 xl:pt-0 w-[80%] xl:w-full self-center">
      <atoms-button-add-to-cart :class-color-current-catergory="classObject.themeCategory" @addProductToCart="handleReceiveEventToButtonAddProductOnCart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductActionCart, ProductIdentifer } from "~~/types/product";

const baseURL:string = useBaseURL();
const propsCardToActionCart = defineProps<{
  productActionCart: ProductActionCart,
  productIdentifer: ProductIdentifer,
  currentCategory: string,
}>();
const emitClickButtonAdd = defineEmits(["addProductToCart"]);

const currentAmoutProduct = ref(1);
const showRemainingAmount = ref(false);
const price = ref(useAccountBRL(propsCardToActionCart.productActionCart.price));
const productName = ref(propsCardToActionCart.productIdentifer.name);
const productCategory = ref(propsCardToActionCart.productIdentifer.category.nome);
const dataResponseShipping = reactive({ content: { preco: 0 }, status: { success: false, error: false, waiting: false, pending: false, message: "" } });

type PriceShipping = {
  preco: number
}

type ResponseShipping = {
  success: boolean,
  data: PriceShipping
}

const classObject = computed(() => ({
  themeCategory: propsCardToActionCart.currentCategory === "Vitaminas"
    ? "bg-primary-green-dark"
    : propsCardToActionCart.currentCategory === "Proteínas"
      ? "bg-primary-lemon-dark"
      : propsCardToActionCart.currentCategory === "Minerais" ? "bg-secondary-orange-dark" : propsCardToActionCart.currentCategory === "Ômega-3" && "bg-primary-olivia-dark",

  textColorCategory: propsCardToActionCart.currentCategory === "Vitaminas"
    ? "text-primary-green-dark"
    : propsCardToActionCart.currentCategory === "Proteínas"
      ? "text-primary-lemon-dark"
      : propsCardToActionCart.currentCategory === "Minerais" ? "text-secondary-orange-dark" : propsCardToActionCart.currentCategory === "Ômega-3" && "text-primary-olivia-dark"
}));

function handleModifyAmoutProduct (n:number) {
  currentAmoutProduct.value = n;
}

function handleShowRemainingAmount (condicional:boolean) {
  showRemainingAmount.value = condicional;
}

function setStatusShipping (success = false, error = false, waiting = false, pending = false, msg = "") {
  dataResponseShipping.status.success = success;
  dataResponseShipping.status.error = error;
  dataResponseShipping.status.waiting = waiting;
  dataResponseShipping.status.pending = pending;
  dataResponseShipping.status.message = msg;
}

async function handleModifyCep (cep: number) {
  if (cep === null || cep === undefined) { return; }
  try {
    setStatusShipping(false, false, false, true);
    const { data: priceShipping } = await useFetch<ResponseShipping>(`/Catalogo/preco-prazo/${propsCardToActionCart.productIdentifer.id}/${cep}`, {
      baseURL
    });
    dataResponseShipping.content.preco = priceShipping.value.data.preco;
    setStatusShipping(true);
  } catch (error) {
    if (error instanceof Error) {
      setStatusShipping(false, true, false, false, "Erro ao buscar o CEP! Digite apenas os números no campo acima");
    }
  }
}

function onClickInput (isFocus:boolean) {
  dataResponseShipping.status.waiting = isFocus;
}

function handleInvalidInputCep () {
  setStatusShipping(false, true, false, false, "Número de caracteres incorreto!");
}

function handleReceiveEventToButtonAddProductOnCart () {
  emitClickButtonAdd("addProductToCart", currentAmoutProduct.value);
}

</script>

<style scoped>
.loader-label::before,
.loader-label::after {
  animation: loading 1s infinite
  cubic-bezier(0.77, 0, 0.175, 1);
}
.loader-label::after {
  animation-delay: 500ms;
}
@keyframes loading {
  0%,100% {
    left: 6px;
  }
  25% {
    transform: scale(.3);
  }
  50% {
    left: 0;
  }
  75% {
    transform: scale(1);
  }
}</style>
