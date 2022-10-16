function getToken () {
  const token = useGetTokenUserLogged().trim();
  return token;
}

export const getAllInfoUser = async () => {
  return await useFetchWithBaseURL("/Identidade/recuperar-usuario-completo", {
    headers: {
      Authorization: getToken()
    },
    retry: 3
  }).then((data) => {
    return data;
  });
};
