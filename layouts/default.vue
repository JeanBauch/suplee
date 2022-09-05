<template>
  <div>
    <div>
      <ClientOnly>
        <Teleport to="body">
          <organisms-cart-shopping-float />
        </Teleport>
      </ClientOnly>
    </div>
    <slot />
  </div>
</template>
