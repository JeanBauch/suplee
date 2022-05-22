<template>
  <div class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
    <atoms-bg-hero />
    <organisms-header />
    <organisms-call-to-action-home-page />
  </div>
</template>

<script>
export default {
  setup () {
    useHead({
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "pt-br"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Ecommerce de suplementos alimentares."
        }
      ]
    });
    return { dynamic: ref(49) };
  },
  head: {
    title: "Suplee"
  }
};
</script>
