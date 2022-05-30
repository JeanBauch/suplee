<template>
  <div>
    <NuxtLayout>
      <NuxtPage />

      <ClientOnly>
        <Teleport to="#modal">
          <AtomsModal />
        </Teleport>
      </ClientOnly>
    </NuxtLayout>
  </div>
  <!-- <NuxtWelcome /> -->
</template>
