<template>
  <ClientOnly>
    <Teleport to="body">
      <div>
        <Transition>
          <div v-if="isModalOpen" class="modal-bg">
            <div ref="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <!-- Header -->
              <div class="p-7 border-b-[1px] border-b-secondary-green-gray-light">
                <slot name="header-modal" />
              </div>
              <!-- Close Modal -->
              <div class="absolute top-5 right-3 bg-none border-none cursor-pointer">
                <slot name="btn-close-modal" />
              </div>
              <!-- Content -->
              <slot name="content-modal-category">
                I'm empty inside category
              </slot>
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">

const propsModal = defineProps<{
  show: boolean
}>();
const isModalOpen = ref(false);

watch(() => propsModal.show, (show) => {
  isModalOpen.value = show;
});

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;

  background-color: rgba(0,0,0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
}
</style>
