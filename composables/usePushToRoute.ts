import { TypeEventsToPushRoute } from "~~/types/pushRouteEvents";

export const usePushToRouteOnEvents = (section: TypeEventsToPushRoute) => {
  const router = useRouter();

  if (section === "ViewListProduct") {
    router.push("/#sessaoDeSuplementos");
  } else if (section === "ViewTopPage") {
    router.push("/");
  } else if (section === "NavigatePurchaseFlow") {
    router.push("/finalizar-compra");
  } else if (section === "NavigateProfileUser") {
    router.push({
      name: "usuario-group-id",
      params: {
        group: "autenticacao",
        id: "logar"
      }
    });
  } else if (section === "NavigateToEditUser") {
    router.push("/usuario/editar-perfil");
  } else if (section === "NavigateToHistoricPurchase") {
    router.push("/historico-de-compras");
  } else if (section === "NavigateToMyProfile") {
    router.push("/usuario/meu-perfil");
  }
};
