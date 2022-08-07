<template>
  <div class="w-screen min-h-screen bg-complement-background-soft relative z-0 overflow-hidden flex justify-center items-center">
    <atoms-bg-hero />
    <Html lang="pt-br">
      <Head>
        <Title>Suplee - Confirmação de email</Title>
        <Meta name="description" content="Página dedicada ao usuário cadastrar ou logar com uma conta existente na Suplee!" />
      </Head>
    </Html>

    <organisms-user-confirm-email-wrapper
      :usuario-id="queryParams.usuarioId"
      :codigo-confirmacao="queryParams.codigoConfirmacao"
      @next-step-user-push-to-login="handleLoginAfterActiveUser"
    />
  </div>
</template>

<script  setup lang="ts">

type ConfirmRegisterQuery = {
  usuarioId: string,
  codigoConfirmacao: string
}

const routeAuthConfirmEmail = useRoute();
const routerAuthConfirmEmail = useRouter();
const queryParams = routeAuthConfirmEmail.query as ConfirmRegisterQuery;

function handleLoginAfterActiveUser () {
  routerAuthConfirmEmail.push("/usuario/autenticacao/logar");
}

</script>
