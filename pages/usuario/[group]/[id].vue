<template>
  <div class="w-screen h-screen md:min-h-screen bg-complement-background-soft relative z-0 overflow-hidden flex justify-center items-center">
    <atoms-bg-hero />
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - {{ auth.name }}</Title>
        <Meta name="description" content="Página dedicada ao usuário cadastrar ou logar com uma conta existente na Suplee!" />
      </Head>
    </Html>
    <organisms-user-login-register-wrapper :auth-name="auth.name" @toggle-tab="setRouterParamsId" />
  </div>
</template>

<script setup lang="ts">
const routeAuth = useRoute();
const routerAuth = useRouter();

const auth = reactive({
  name: ""
});

auth.name = routeAuth.params.id === "logar"
  ? "logar"
  : routeAuth.params.id === "registrar"
    ? "registrar"
    : "";

function setRouterParamsId (id: string) {
  routerAuth.push({
    params: {
      id
    }
  });
}
</script>
