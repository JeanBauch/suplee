<template>
  <div class="w-screen min-h-screen bg-complement-background-soft relative z-0 overflow-hidden flex justify-center items-center">
    <atoms-bg-hero />
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - Redefinir senha</Title>
        <Meta name="description" content="Página dedicada ao usuário cadastrar ou logar com uma conta existente na Suplee!" />
      </Head>
    </Html>

    <organisms-user-redefine-password-wrapper
      :usuario-id="queryParamsRedefinePassword.usuarioId"
      :codigo-confirmacao="queryParamsRedefinePassword.codigoConfirmacao"
      @success-redefine-password="handleLoginAfterActiveUser"
    />
  </div>
</template>

<script  setup lang="ts">

type RedefinePasswordQuery = {
  usuarioId: string,
  codigoConfirmacao: string
}

const routeAuthRedefinePassword = useRoute();
const routerAuthRedefinePassword = useRouter();
const queryParamsRedefinePassword = routeAuthRedefinePassword.query as RedefinePasswordQuery;

function handleLoginAfterActiveUser () {
  routerAuthRedefinePassword.push("/usuario/autenticacao/logar");
}

</script>
