<template>
  <div>
    <div class="w-full relative input-animate">
      <input
        :id="id"
        v-model.lazy="inputValue"
        type="text"
        required
        :name="id"
        :class="changeColorOnValidate.inputColor"
        class="w-full py-4 px-14 relative z-20 border rounded-lg mt-10 bg-transparent"
      >
      <div class="flex items-center absolute bottom-3 left-8">
        <UserCircleIcon v-if="iconInput === 'UserCircleIcon'" :class="changeColorOnValidate.iconColor" class="h-8 w-8 relative -left-4 z-[21] stroke-1" />
        <CalendarIcon v-else-if="iconInput === 'CalendarIcon'" :class="changeColorOnValidate.iconColor" class="h-8 w-8 relative -left-4 z-[21] stroke-1" />
        <CreditCardIcon v-else :class="changeColorOnValidate.iconColor" class="h-8 w-8 relative -left-4 z-[21] stroke-1" />
        <label
          :for="id"
          class="transition-transform duration-300 text-xl font-normal text-secondary-green-gray-dark"
        >
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon, CreditCardIcon, CalendarIcon } from "@heroicons/vue/outline";

type TypeInputPayment = "name" | "cardNumber" | "validate" | "cvv" | "cpf";
type TypeIconInput = "UserCircleIcon" | "CreditCardIcon" | "CalendarIcon";

const propsInput = defineProps<{
  id: string,
  label: string,
  typeInput: TypeInputPayment,
  iconInput?: TypeIconInput
}>();
const emitValueField = defineEmits(["changeValueInput"]);

const inputValue = ref("");

const validateInput = computed(() => {
  return inputValue.value.length >= 3;
});

const changeColorOnValidate = computed(() => ({
  inputColor: validateInput.value
    ? "border-primary-green-dark"
    : inputValue.value.length > 0
      ? "border-[#912f3c]"
      : "border-primary-olivia-dark",

  iconColor: validateInput.value
    ? "text-primary-green-dark"
    : inputValue.value.length > 0
      ? "text-[#912f3c]"
      : "text-secondary-green-gray-dark"
}));

watch(inputValue, () => {
  if (useNotContainsLetter(inputValue.value) && propsInput.typeInput === "cpf") {
    inputValue.value = useCreateMaskCPF(inputValue.value);
  }
  emitValueField("changeValueInput", inputValue.value, propsInput.id);
});

</script>

<style scoped lang="postcss">
.input-animate input:valid ~ div > label,
.input-animate input:focus ~ div > label,
.input-animate input:active ~ div > label {
  @apply text-base -translate-y-[180%] -translate-x-16 mx-1 text-dark-normal
}
.input-animate input:focus ~ div > label {
  @apply font-semibold
}
</style>
