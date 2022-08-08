<template>
  <div :class="[classTypeToast, classShowToast]" class="toast">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { TypeToast } from "~~/types/toast.js";

// });
const emitShowToast = defineEmits(["isShowToast"]);
const propsToast = defineProps<{
  show: boolean,
  type: TypeToast,
}>();
const isShowToast = ref(false);

watch(() => propsToast.show, (show) => {
  isShowToast.value = show;

  const elem = document.querySelector(".toast") as Element;
  setTimeout(() => {
    elem.classList.remove("toast--visible");
    emitShowToast("isShowToast", false);
  }, 3000);
});

const classTypeToast = computed(() => ({
  "toast--success": propsToast.type === "success",
  "toast--error": propsToast.type === "error"
}));

const classShowToast = computed(() => ({
  "toast--visible": isShowToast.value
}));

</script>

<style scoped>
.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  max-width: 400px;
  padding: 6px;
  background: #cccccc;
  color: #333333;
  font-family: sans-serif;
  text-align: center;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, top 0.2s, visibility 0.2s;
}

.toast--visible {
  top: 20px;
  opacity: 1;
  visibility: visible;
}

.toast--success {
  background: #00c02b;
  border-color: #009d23;
  color: #ffffff;
}

.toast--error {
  background: #d50000;
  border-color: #ba0000;
  color: #ffffff;
}

</style>
