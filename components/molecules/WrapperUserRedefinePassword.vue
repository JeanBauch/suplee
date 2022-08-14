<template>
  <div class="flex flex-col justify-between flex-1 w-full">
    <div class="">
      <slot name="content-new-password" />
    </div>
    <div class="w-full flex justify-center items-center">
      <slot name="content-button" />
    </div>
  </div>
</template>
