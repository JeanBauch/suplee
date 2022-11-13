<template>
  <div class="md:hidden fixed z-50 bottom-0 left-0 w-full h-20 bg-complement-background-white rounded-t-3xl px-11 py-5">
    <nav>
      <ul class="flex justify-between items-center text-primary-olivia-dark">
        <li @click="$emit('selectScrollSection', valueOfEmitterSectionToScroll.section)">
          <ViewGridIcon v-if="isRouterShow.isHome" class="h-10 w-10 text-current relative z-10" />
          <HomeIcon v-else class="h-10 w-10 text-current relative z-10" />
        </li>
        <li @click="$emit('selectScrollSection', 'ViewTopPage')">
          <SearchIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li class="relative" @click="$emit('selectScrollSection', 'NavigatePurchaseFlow')">
          <ShoppingCartIcon class="h-10 w-10 text-current relative z-10" />
          <span class="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary-olivia-dark flex justify-center items-center">
            <p class="font-semibold text-base text-complement-background-white">
              {{ storeCart.totalQuantityItensOnProduct }}
            </p>
          </span>
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
import { useCart } from "~~/stores/useCart";

defineEmits(["selectScrollSection"]);
const storeCart = useCart();
const routeWrapping = useRoute();

const isRouterShow = computed(() => ({
  isHome: routeWrapping.name === "index"
}));

const valueOfEmitterSectionToScroll = computed(() => ({
  section: isRouterShow.value.isHome
    ? "ViewListProduct"
    : "ViewTopPage"
}));

</script>
