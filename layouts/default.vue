<template>
  <div>
    <div>
      <ClientOnly>
        <Teleport to="body">
          <organisms-cart-shopping-float />
        </Teleport>
      </ClientOnly>
    </div>
    <div>
      <ClientOnly>
        <Teleport to="body">
          <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />
        </Teleport>
      </ClientOnly>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { TypeEventsToPushRoute } from "~~/types/pushRouteEvents";

function scrollToSection (section: TypeEventsToPushRoute) {
  usePushToRouteOnEvents(section);
}

</script>
