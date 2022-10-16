export const useBaseURL = () => {
  const apiURL = useRuntimeConfig();
  const baseURL:string = apiURL.public.apiBase;

  return baseURL;
};

export const useBaseFetch = (url:string, options = {}) => {
  const baseURL = useBaseURL();
  // console.log(`${baseURL}${url}`);
  return useLazyFetch(`${baseURL}${url}`, options);
  // $fetch(`${baseURL}${url}`, options);
};

export const useFetchWithBaseURL = async (url:string, options = {}) => {
  const baseURL = useBaseURL();
  const promiseData = await useFetch(`${baseURL}${url}`, options);
  return promiseData;
  // $fetch(`${baseURL}${url}`, options);
};
