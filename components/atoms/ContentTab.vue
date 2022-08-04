<template>
  <div v-if="currentAuth.isSameTitleTab">
    <slot />
  </div>
</template>

<script setup lang="ts">
const propsAuthContentTab = defineProps<{
  title: string,
  currentAuthName: string,
}>();

const currentAuth = computed(() => ({
  isSameTitleTab: propsAuthContentTab.currentAuthName === propsAuthContentTab.title
}));

</script>
