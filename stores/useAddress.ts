import { defineStore } from "pinia";
import { Address } from "~~/types/userAddress";

export const useAddress = defineStore("user-address", () => {
  const address = reactive<Address>({
    cep: "",
    recipient: "",
    state: "",
    city: "",
    district: "",
    number: "",
    street: "",
    cellphone: "",
    local: 0,
    complement: ""
  });

  const allFieldFilled = computed(() => {
    return address.cep && address.recipient && address.state &&
      address.city && address.district && address.number && address.street &&
        address.cellphone && address.local && address.complement;
  });

  function resetAtrr () {
    address.cep = "";
    address.recipient = "";
    address.state = "";
    address.city = "";
    address.district = "";
    address.number = "";
    address.street = "";
    address.cellphone = "";
    address.local = 0;
    address.complement = "";
  }

  return {
    address,
    allFieldFilled,
    resetAtrr
  };
});
