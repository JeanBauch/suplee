<template>
  <main v-if="!isPending" class="flex flex-col gap-12 w-full max-w-[58.5rem] pt-6 bg-complement-background-white rounded-[1.25rem] shadow-green-perso relative pb-24 md:pb-6">
    <section class="w-full flex flex-col justify-center items-center">
      <h1 class="font-semibold text-3xl text-primary-olivia-dark">
        Editar usuário
      </h1>
      <div class="px-12 md:px-24 flex flex-col gap-3 md:gap-7 w-full mt-8">
        <div class="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
          <div class="w-full md:w-[60%] pr-0 md:pr-12">
            <div class="w-full md:max-w-sm">
              <atoms-input-bottom-line
                :label="'Nome'"
                :input-key="'name-user'"
                :is-modified="true"
                @modify-value-input="handleModifyValueInput"
              />
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
            <atoms-input-bottom-line
              :label="'Celular'"
              :input-key="'cellphone-user'"
              :is-modified="true"
              @modify-value-input="handleModifyValueInput"
            />
          </div>
        </div>
      </div>
    </section>
    <section v-if="storeUserLogged.userContainAddress" class="w-full flex flex-col justify-center items-center relative bg-complement-background-soft">
      <div class="self-end relative right-0 top-0 px-14 py-2 rounded-bl-full bg-primary-olivia-dark flex justify-center items-center">
        <h2 class="text-complement-background-white font-semibold text-lg">
          Meus endereços
        </h2>
      </div>
      <div v-if="storeUserLogged.userContainAddress" class="flex flex-col gap-5 py-6 w-full px-12 md:px-24">
        <div class="font-semibold text-lg text-primary-olivia-dark">
          Endereço padrão:
        </div>
        <atoms-list-address-user
          v-for="addressItem, index in storeUserLogged.user.userToken.address"
          :key="index"
          :index-address="index"
        />
      </div>
    </section>
    <section class="w-full flex justify-center items-center px-12 md:px-24">
      <atoms-accordion :title-accordion="'+ Adicionar meu endereço'" class="w-full">
        <div class="flex flex-col gap-6 w-full rounded-lg pt-2 px-6">
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-3">
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
            <div>
              <atoms-input-bottom-line
                :label="'Comp.'"
                :input-key="'complement-address'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div>
              <atoms-input-bottom-line
                :label="'Tel'"
                :input-key="'phone'"
                :is-modified="true"
                small
                @modify-value-input="handleModifyValueInput"
              />
            </div>
            <div class="md:col-span-2 w-full">
              <fieldset class="flex pb-1 relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-primary-olivia-dark after:rounded-full">
                <legend class="hidden">
                  Tipo de local da entrega
                </legend>

                <div class="flex w-full flex-col md:flex-row md:gap-3 lg:gap-5 xl:gap-6">
                  <span class="text-base font-semibold text-primary-olivia-dark w-full">
                    Selecione o tipo de casa:
                  </span>

                  <div class="flex flex-wrap w-full justify-around md:gap-4 lg:gap-10 xl:gap-12">
                    <div>
                      <input
                        id="type-home"
                        v-model="address.local"
                        type="radio"
                        name="type-homeFieldset"
                        :value="0"
                        class="accent-primary-olivia-dark"
                        checked
                      >
                      <label for="type-home" class="pl-2">Casa</label>
                    </div>

                    <div>
                      <input
                        id="type-work"
                        v-model="address.local"
                        type="radio"
                        name="type-homeFieldset"
                        :value="1"
                        class="accent-primary-olivia-dark"
                      >
                      <label for="type-work" class="pl-2">Trabalho</label>
                    </div>
                  </div>
                </div>
              </fieldset>
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
        <button
          class="border border-[#912f3c] rounded-md w-[80%] transition-all duration-300 group hover:bg-[#912f3c]"
          @click="handleClickOnCancel"
        >
          <h2 class="font-semibold text-xl text-[#912f3c] capitalize group-hover:text-complement-background-white">
            Cancelar
          </h2>
        </button>
        <atoms-button-action-next-step-user
          :label-button="'Salvar'"
          :pending="false"
          @next-step-user="handleClickSaveChanges()"
        />
      </div>
    </section>

    <!-- Toasty -->
    <atoms-custom-toast :show="createToast.show" :type="createToast.type" @is-show-toast="handleIsShowToast">
      <p>{{ createToast.message }}</p>
    </atoms-custom-toast>

    <!-- BG Complement -->
    <div class="hidden md:flex absolute bottom-14 left-2 md:-left-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-heart.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
    <div class="hidden md:flex absolute top-28 right-2 md:-right-7 w-16 h-16 bg-[#FFF] justify-center items-center rounded-xl shadow">
      <img src="/icons/icon-vital.svg" width="36" height="36" class="w-9 h-9" alt="Icone de coração simbolizanção saúde">
    </div>
  </main>
</template>

<script setup lang="ts">
import { getInfoUserProfile, postAddressUser, putEditUser } from "~~/services/identification";
import { useLoggedUser } from "~~/stores/useLoggedUser";
import { TypeToast } from "~~/types/toast";
import { Address, EditAllInfoUser } from "~~/types/userAddress";

const emitterOnClickButton = defineEmits(["onClickButtonCancel"]);

const storeUserLogged = useLoggedUser();
const inputKeys = ["cep-address", "name-remetende", "state-address", "city-address", "district-address", "number-address", "street-address", "phone", "type-home", "complement-address"];
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
const isPending = ref(true);

const createToast = reactive({
  message: "",
  type: "" as TypeToast,
  show: false
});

const allFieldFilled = computed(() => {
  return address.cep && address.recipient && address.state &&
    address.city && address.district && address.number && address.street &&
      address.cellphone && address.complement;
});

function handleIsShowToast (show: boolean) {
  createToast.show = show;
}

function setConfigToast (message: string, type:TypeToast) {
  createToast.message = message;
  createToast.type = type;
}

getInfoUserOnMounted();
async function getInfoUserOnMounted () {
  isPending.value = true;
  const { data: userInfo } = await getInfoUserProfile();
  isPending.value = false;

  if (!userInfo.value) {
    handleClickOnCancel();
    return;
  }

  storeUserLogged.setInfoUserAfterLogin(
    userInfo.value.data.nome,
    userInfo.value.data.email,
    userInfo.value.data.cpf,
    userInfo.value.data.celular,
    userInfo.value.data.enderecos,
    userInfo.value.data.tipo,
    userInfo.value.data.usuarioId
  );
}

function handleClickOnCancel () {
  emitterOnClickButton("onClickButtonCancel");
}

async function addAddressToProfile () {
  if (allFieldFilled.value) {
    storeUserLogged.$patch((state) => {
      if (!("address" in state.user.userToken)) {
        state.user.userToken.address = [];
      }
      state.user.userToken.address = [
        ...state.user.userToken.address,
        {
          cep: address.cep,
          nomeDestinatario: address.recipient,
          estado: address.state,
          cidade: address.city,
          bairro: address.district,
          numero: address.number,
          rua: address.street,
          telefone: address.cellphone,
          tipoLocal: address.local,
          complemento: address.complement,
          enderecoId: "",
          informacaoAdicional: "",
          enderecoPadrao: false
        }
      ];
    });
    await postAddressUser(address);
    cleanOnAddStore();
  }
}

function handleModifyValueInput (value: string, inputKey: string) {
  if (inputKey === "cep-address") {
    address.cep = value;
  }
  if (inputKey === "name-remetende") {
    address.recipient = value;
  }
  if (inputKey === "state-address") {
    address.state = value;
  }
  if (inputKey === "city-address") {
    address.city = value;
  }
  if (inputKey === "district-address") {
    address.district = value;
  }
  if (inputKey === "number-address") {
    address.number = value;
  }
  if (inputKey === "street-address") {
    address.street = value;
  }
  if (inputKey === "phone") {
    address.cellphone = value;
  }
  if (inputKey === "complement-address") {
    address.complement = value;
  }
  if (inputKey === "cellphone-user") {
    storeUserLogged.user.userToken.celular = value;
  }
  if (inputKey === "name-user") {
    storeUserLogged.user.userToken.nome = value;
  }
}

function cleanOnAddStore () {
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

  useCleanInputById(inputKeys);
}

async function handleClickSaveChanges () {
  const bodyRequestParams = {} as EditAllInfoUser;

  bodyRequestParams.nome = storeUserLogged.user.userToken.nome;
  bodyRequestParams.celular = storeUserLogged.user.userToken.celular;
  bodyRequestParams.usuarioId = storeUserLogged.user.userToken.usuarioId;
  bodyRequestParams.enderecos = storeUserLogged.user.userToken.address;

  try {
    await putEditUser(bodyRequestParams);
    setConfigToast("Sucesso ao atualizar os dados do perfil!", "success");
    handleIsShowToast(true);
    setTimeout(() => {
      handleClickOnCancel();
    }, 1000);
  } catch {
    setConfigToast("Erro ao atualizar os dados do perfil!", "error");
  }
}

</script>
