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
          <organisms-nav-bar-footer-mobile
            v-if="!isRouterShow.navBarInScreenLoginOrRegister"
            @select-scroll-section="scrollToSection"
          />
        </Teleport>
      </ClientOnly>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { TypeEventsToPushRoute } from "~~/types/pushRouteEvents";

const routeWrapping = useRoute();

const isRouterShow = computed(() => ({
  navBarInScreenLoginOrRegister: routeWrapping.name === "usuario-group-id"
}));

function scrollToSection (section: TypeEventsToPushRoute) {
  usePushToRouteOnEvents(section);
}

</script>
