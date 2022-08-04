export const useValidateEmail = (email:string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const useValidateCPF = (cpf:string) => {
  const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  return re.test(String(cpf).toLowerCase());
};

export const useContainsNumber = (string:string) => {
  if (/[a-z]/i.test(string)) { return; }
  return /\d/.test(string);
};

export const useNotContainsNumber = (string:string) => {
  return !/\d/.test(string);
};

export const useValidateCellPhoneWithDDD = (cellphone:string) => {
  const re = /^\d{2}\d{5}\d{4}$/;
  return re.test(String(cellphone).toLowerCase());
};
