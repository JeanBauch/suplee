<template>
  <main class="flex flex-col gap-12 w-full max-w-[58.5rem] py-6 bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative">
    <section class="w-full flex flex-col justify-center items-center">
      <h1 class="font-semibold text-3xl text-primary-olivia-dark">
        Editar usuário
      </h1>
      <div class="px-12 md:px-24 flex flex-col gap-3 md:gap-7 w-full mt-8">
        <div class="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
          <div class="w-full md:w-[60%] pr-0 md:pr-12">
            <div class="w-full md:max-w-sm">
              <atoms-input-bottom-line :label="'Nome'" :input-key="'name-user'" :is-modified="true" />
            </div>
          </div>
          <div class="w-full md:w-[35%]">
            <atoms-input-bottom-line :label="'CPF'" :input-key="'cpf-user'" :is-modified="false" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
          <div class="w-full md:w-[60%] pr-0 md:pr-12">
            <div class="w-full md:max-w-sm">
              <atoms-input-bottom-line :label="'Email'" :input-key="'email-user'" :is-modified="false" />
            </div>
          </div>
          <div class="w-full md:w-[35%]">
            <atoms-input-bottom-line :label="'Celular'" :input-key="'cellphone-user'" :is-modified="true" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center relative bg-complement-background-soft">
      <div class="self-end relative right-0 top-0 px-14 py-2 rounded-bl-full bg-primary-olivia-dark flex justify-center items-center">
        <h2 class="text-complement-background-white font-semibold text-lg">
          Meus Endereços
        </h2>
      </div>
      <div class="flex flex-col gap-5 py-6 w-full px-12 md:px-24">
        <atoms-list-address-user />
        <atoms-list-address-user />
      </div>
    </section>
    <section class="w-full flex justify-center items-center px-12 md:px-24">
      <atoms-accordion :title-accordion="'+ Adicionar novo endereço'" class="w-full">
        <div class="flex flex-col gap-6 w-full rounded-lg pt-2 px-6">
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-3">
            <div class="w-full">
              <atoms-input-bottom-line
                :label="'CEP'"
                :input-key="'cep-address'"
                :store-field="'cep'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div class="md:col-span-2 w-full">
              <atoms-input-bottom-line
                :label="'Destinatário'"
                :input-key="'name-remetende'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Estado'"
                :input-key="'state-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Cidade'"
                :input-key="'city-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Bairro'"
                :input-key="'district-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Número'"
                :input-key="'number-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Rua'"
                :input-key="'street-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div class="hidden md:block" />
            <div>
              <atoms-input-bottom-line
                :label="'Tel'"
                :input-key="'phone'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Local'"
                :input-key="'type-home'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Comp.'"
                :input-key="'complement-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
          </div>
          <div class="w-full flex justify-center items-center md:px-72">
            <button class="px-20 py-1 bg-primary-green-dark rounded-md" @click="addAddressToProfile">
              <p class="font-semibold text-complement-background-white">
                Adicionar
              </p>
            </button>
          </div>
        </div>
      </atoms-accordion>
    </section>
    <section class="w-full flex justify-end items-center gap-5">
      <div class="w-full md:w-5/12 flex gap-8 px-12 md:px-0 md:mr-24">
        <button class="border border-[#912f3c] rounded-md w-[80%] transition-all duration-300 group hover:bg-[#912f3c]" @click="pushToHome">
          <h2 class="font-semibold text-xl text-[#912f3c] capitalize group-hover:text-complement-background-white">
            Cancelar
          </h2>
        </button>
        <atoms-button-action-next-step-user :label-button="'Salvar'" :pending="false" />
      </div>
    </section>

    <!-- BG Complement -->
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="absolute top-2 right-2 md:-right-7 w-16 h-16 bg-[#FFF] flex justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAddress } from "~~/stores/useAddress";
import { useLoggedUser } from "~~/stores/useLoggedUser";

const router = useRouter();
const storeAddress = useAddress();
const storeUserLogged = useLoggedUser();

function pushToHome () {
  router.push("/");
}

function addAddressToProfile () {
  if (storeAddress.allFieldFilled) {
    storeUserLogged.user.userToken.address.push(storeAddress.address);
  }
}

function handleModifyValueInput (value: string, inputKey: string) {
  if (inputKey === "cep-address") {
    storeAddress.address.cep = value;
  }
  if (inputKey === "name-remetende") {
    storeAddress.address.recipient = value;
  }
  if (inputKey === "state-address") {
    storeAddress.address.state = value;
  }
  if (inputKey === "city-address") {
    storeAddress.address.city = value;
  }
  if (inputKey === "district-address") {
    storeAddress.address.district = value;
  }
  if (inputKey === "number-address") {
    storeAddress.address.number = value;
  }
  if (inputKey === "street-address") {
    storeAddress.address.street = value;
  }
  if (inputKey === "phone") {
    storeAddress.address.cellphone = value;
  }
  if (inputKey === "phone") {
    storeAddress.address.district = value;
  }
  if (inputKey === "type-home") {
    storeAddress.address.local = value;
  }
  if (inputKey === "complement-address") {
    storeAddress.address.complement = value;
  }
}

</script>
