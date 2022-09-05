<template>
  <div class="md:hidden fixed z-50 bottom-0 left-0 w-full h-20 bg-complement-background-white rounded-t-3xl px-11 py-5">
    <nav>
      <ul class="flex justify-between items-center text-primary-olivia-dark">
        <li @click="$emit('selectScrollSection', 'ViewListProduct')">
          <ViewGridIcon v-if="isHome" class="h-10 w-10 text-current relative z-10" />
          <HomeIcon v-else class="h-10 w-10 text-current relative z-10" />
        </li>
        <li @click="$emit('selectScrollSection', 'ViewTopPage')">
          <SearchIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li @click="$emit('selectScrollSection', 'NavigatePurchaseFlow')">
          <ShoppingCartIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li @click="$emit('selectScrollSection', 'NavigateProfileUser')">
          <UserIcon class="h-10 w-10 text-current relative z-10" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ViewGridIcon, HomeIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "@heroicons/vue/outline";

defineEmits(["selectScrollSection"]);
const route = useRoute();
const isHome = ref(true);

isHome.value = route.name === "index";

</script>
