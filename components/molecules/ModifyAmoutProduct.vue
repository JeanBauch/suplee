<template>
  <div class="flex shadow rounded-md">
    <button class="flex justify-center items-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 border border-secondary-green-gray-light rounded-tl-md rounded-bl-md">
      <atoms-button-decrease-amount />
    </button>
    <input type="number" class="appearance-none m-0 text-2xl 2xl:text-3xl text-center font-semibold w-20 2xl:w-24 xl:h-12 2xl:h-14 px-1 bg-complement-background-white border-t border-b border-secondary-green-gray-light">
    <button class="flex justify-center items-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 border border-secondary-green-gray-light rounded-tr-md rounded-br-md">
      <atoms-button-increase-amount />
    </button>
  </div>
</template>
