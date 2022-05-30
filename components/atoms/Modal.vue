<template>
  <div>
    <h1>Vue 3 Modal</h1>
    <button @click="isModalOpen = true">
      Open Modal
    </button>
    <Transition>
      <div v-if="isModalOpen" class="modal-bg">
        <div class="modal">
          <button class="close-btn" @click="isModalOpen = false">
            x
          </button>
          Click outside this modal to close it
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isModalOpen = ref(false);
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
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
}
.modal .close-btn {
  position: absolute;

  top: 10px;
  right: 10px;

  background: none;
  border: none;
  cursor: pointer;
}
</style>
