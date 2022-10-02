import { useAddress } from "~~/stores/useAddress";
import { useLoggedUser } from "~~/stores/useLoggedUser";

export default function useAddAddressToUser () {
  const storeUserLogged = useLoggedUser();
  const storeAddress = useAddress();

  if (storeAddress.allFieldFilled) {
    storeUserLogged.user.userToken.address.push(storeAddress.address);
  }
}
