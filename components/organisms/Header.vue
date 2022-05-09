<template>
  <div class="w-full bg-primary-olivia-light md:bg-transparent transition-colors duration-700 relative rounded-b-[5.5rem] sm:rounded-b-[7rem] drop-shadow-2xl shadow-primary-olivia-dark">
    <div class="absolute inset-0 block md:hidden w-full h-full z-0">
      <div class="bg-[url('/bg-complement/bg-header-vital.svg')] bg-center bg-contain bg-no-repeat absolute w-full h-full" />
    </div>
    <div class="md:container mx-auto 2xl:px-20 py-8">
      <div class="flex flex-1 justify-between items-center relative">
        <div class="text-5xl md:text-4xl font-semibold text-complement-background-normal md:text-primary-olivia-medium md:w-28 xl:w-36 absolute md:relative md:inset-0 move-logo transition-transform duration-500">
          <h2 class="drop-shadow-2xl">
            Suplee
          </h2>
        </div>

        <molecules-list-section-header />

        <molecules-action-user-header />
      </div>
    </div>
    <molecules-search-product-header />
  </div>
</template>
