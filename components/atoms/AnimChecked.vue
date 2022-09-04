<template>
  <div :class="propsAnim.iconClassColor ? 'propsAnim.iconClassColor' : 'text-complement-background-white'" class="w-full h-full flex justify-center items-center">
    <CheckIcon v-if="propsAnim.iconName === 'CheckIcon'" class="w-full h-full text-current relative z-10 stroke-[1px]" />
    <ExclamationIcon v-if="propsAnim.iconName === 'ExclamationIcon'" class="w-full h-full text-current relative z-10 stroke-[1px]" />
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, ExclamationIcon } from "@heroicons/vue/outline";

type IconsName = "CheckIcon" | "ExclamationIcon";

const propsAnim = defineProps<{
  iconName: IconsName,
  iconClassColor?: string,
}>();

</script>
