export const useBaseURL = () => {
  const apiURL = useRuntimeConfig();
  const baseURL:string = apiURL.public.apiBase;

  return baseURL;
};
