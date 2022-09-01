<template>
  <div class="relative">
    <Html lang="pt-br">
      <Head>
        <Title>Meu carrinho</Title>
      </Head>
    </Html>

    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />

    <div class="w-screen min-h-screen bg-complement-background-soft">
      <organisms-header class="hidden md:block" />
      <organisms-purchase-flow />
    </div>
  </div>
</template>

<script setup lang="ts">

function scrollToSection (section: string) {
  return section;
}

</script>
