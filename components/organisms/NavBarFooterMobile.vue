<template>
  <div class="md:hidden fixed z-50 bottom-0 left-0 w-full h-20 bg-complement-background-white rounded-t-3xl px-11 py-5">
    <nav>
      <ul class="flex justify-between items-center text-primary-olivia-dark">
        <li @click="$emit('selectScrollSection', 'ViewListProduct')">
          <ViewGridIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li @click="$emit('selectScrollSection', 'ViewTopPage')">
          <SearchIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li>
          <ShoppingCartIcon class="h-10 w-10 text-current relative z-10" />
        </li>
        <li>
          <UserIcon class="h-10 w-10 text-current relative z-10" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ViewGridIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "@heroicons/vue/outline";

defineEmits(["selectScrollSection"]);
</script>
