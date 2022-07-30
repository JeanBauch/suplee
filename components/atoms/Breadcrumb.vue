<template>
  <div class="flex flex-1 w-full justify-between items-center mt-0 2xl:mt-3">
    <div class="flex gap-2 flex-wrap">
      <nuxt-link to="/" aria-label="Voltar para página inicial">
        <p class="font-light xl:text-sm 2xl:text-base text-complement-background-gray">
          página inicial >
        </p>
      </nuxt-link>
      <p class="font-light xl:text-sm 2xl:text-base text-complement-background-gray">
        {{ currentCategory }} >
      </p>
      <p class="font-light xl:text-sm 2xl:text-base text-complement-background-gray max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap">
        {{ currentProduct }}
      </p>
    </div>
    <slot name="aside-category" />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  currentProduct: string,
  currentCategory: string,
}>();

</script>
