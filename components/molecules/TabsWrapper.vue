<template>
  <div>
    <div class="flex flex-col justify-center items-center mb-8">
      <ul class="flex w-full justify-center relative pb-2 group px-9 md:px-[4.5rem]">
        <li
          v-for="title in tabTitles"
          :key="title"
          :class="{ 'text-selected': currentAuthName === title }"
          class="w-40 flex justify-center items-center text-2xl font-semibold capitalize cursor-pointer text-secondary-green-gray-light transition-all duration-500"
          @click="handleToggleTab(title)"
        >
          {{ title }}
        </li>
      </ul>

      <div class="w-80 h-1 bg-secondary-green-gray-light rounded-full relative">
        <div
          id="marker-tab"
          :class="currentAuthName === 'logar' ? 'translate-x-0' : 'translate-x-40' "
          class="absolute left-0 w-[50%] h-1 bg-primary-olivia-dark rounded-full transition-transform duration-300"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">

const emitToggleTab = defineEmits(["toggleTab"]);
defineProps<{
  currentAuthName: string,
}>();

const propsTitleTab = useSlots();
const tabTitles = ref();
const selectedTitle = ref();

if (propsTitleTab.default) {
  const propsTitleTabArray = propsTitleTab.default();
  tabTitles.value = propsTitleTabArray.map(tab => tab.props?.title);
  selectedTitle.value = tabTitles.value[0];
}

function handleToggleTab (title:string) {
  selectedTitle.value = title;
  emitToggleTab("toggleTab", title);
}

</script>

<style scoped>
.text-selected {
  color: #2B3E0F !important;
}
</style>
