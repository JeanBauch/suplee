export const useCleanInputById = (inputKeys: string[]) => {
  inputKeys.forEach((keys) => {
    document.getElementById(keys).value = "";
  });
};
