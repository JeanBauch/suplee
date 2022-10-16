import { useStorage } from "@vueuse/core";

export const useGetTokenUserLogged = () => {
  return `Bearer ${useStorage("accessToken", "").value}`;
};
