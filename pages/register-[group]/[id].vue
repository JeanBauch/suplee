<template>
  <div class="bg-complement-background-soft">
    <div v-if="isAdmin" class="flex items-center justify-center container mx-auto">
      <!-- <pre class="flex self-start fixed top-0 left-0">
        <code>
          {{ produto }}
        </code>
      </pre>
      <pre class="flex self-start fixed bottom-0 right-0">
        <code>
          {{ compostoNutricionalInput }}
        </code>
      </pre> -->
      <div class="flex self-start fixed top-0 left-0 w-72">
        <code>
          {{ produto }}
        </code>
      </div>
      <div class="flex flex-col flex-1 max-w-5xl pt-9 pb-36 px-40 bg-complement-background-white rounded-2xl shadow-lg relative my-16">
        <div class="flex flex-col flex-1 gap-4 items-center justify-center pt-4 border border-secondary-green-gray-dark rounded-lg">
          <h1 class="font-medium text-3xl text-dark-normal">
            Cadastro de Produtos
          </h1>
          <!-- Form Produto -->
          <div class="flex flex-col gap-6 my-6 items-end">
            <div class="flex justify-between items-center gap-4">
              <label for="nome-produto" class="font-medium text-base text-dark-normal"><b>Nome do produto:</b> </label>
              <input id="nome-produto" v-model="produto.nome" class="border border-dark-normal rounded-md px-2 py-1" type="text" name="nome-produto">
            </div>

            <div class="flex justify-between items-center gap-4">
              <label for="descricao-produto"><b>Descrição do produto:</b> </label>
              <textarea id="descricao-produto" v-model="produto.descricao" class="border rounded-md px-2 py-1" type="text" name="descricao-produto" />
            </div>

            <div class="flex justify-between items-center gap-4">
              <label for="composicao-produto"><b>Composição do produto:</b> </label>
              <textarea id="composicao-produto" v-model="produto.composicao" class="border rounded-md px-2 py-1" type="text" name="composicao-produto" />
            </div>

            <div class="flex w-full">
              <div class="flex flex-col w-1/2 justify-center items-center gap-3">
                <label for="quantidade-disponivel"><b>Quantidade disponivel:</b> </label>
                <input id="quantidade-disponivel" v-model="produto.quantidadeDisponivel" class="border rounded-md px-2 py-1 max-w-[80px]" type="number" name="quantidade-disponivel">
              </div>

              <div class="flex flex-col w-1/2 justify-center items-center gap-3">
                <label for="preco-produto"><b>Preço do produto:</b> </label>
                <input id="preco-produto" v-model="produto.preco" class="border rounded-md px-2 py-1 max-w-[80px]" type="text" name="preco-produto">
              </div>
            </div>

            <div class="w-full">
              <div class="grid grid-cols-3">
                <div class="flex flex-col justify-between items-center gap-2">
                  <label for="profundidade-produto"><b>Profundidade:</b> </label>
                  <input id="profundidade-produto" v-model="produto.profundidade" class="border rounded-md px-2 py-1 max-w-[80px]" type="number" name="profundidade-produto">
                </div>
                <div class="flex flex-col justify-between items-center gap-2">
                  <label for="altura-produto"><b>Altura:</b> </label>
                  <input id="altura-produto" v-model="produto.altura" class="border rounded-md px-2 py-1 max-w-[80px]" type="number" name="altura-produto">
                </div>
                <div class="flex flex-col justify-between items-center gap-2">
                  <label for="Largura-produto"><b>Largura:</b> </label>
                  <input id="Largura-produto" v-model="produto.largura" class="border rounded-md px-2 py-1 max-w-[80px]" type="number" name="Largura-produto">
                </div>
              </div>
            </div>

            <div class="flex w-full justify-center items-center gap-4">
              <span><b>Categorias:</b> </span>
              <select id="input-select-category" v-model="produto.categoriaId" name="input-select-category" class="py-2 px-3 rounded-md border appearance-none">
                <option value="ID_CAT_MINERAL">
                  Minerais
                </option>
                <option value="ID_CAT_PROTEINA">
                  Proteinas
                </option>
                <option value="ID_CAT_VITAMINAS">
                  Vitaminas
                </option>
                <option value="ID_CAT_OMEGA3">
                  Ômega 3
                </option>
              </select>
            </div>

            <div class="flex flex-col justify-between items-center gap-2 max-w-full overflow-hidden">
              <label for="imagens-produto"><b>Imagens:</b> </label>
              <input id="imagens-produto" type="file" name="imagens-produto" multiple>
            </div>

            <div class="flex flex-col justify-between items-start gap-4">
              <span><b>Efeitos:</b> </span>
              <div class="flex flex-col gap-2">
                <div class="flex gap-2 items-center justify-between">
                  <input
                    id="input-efeito-imunidade"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_EFEITO_1"
                    name="registrar-efeito-imunidade"
                  >
                  <label for="input-efeito-imunidade">Imunidade </label>

                  <input
                    id="input-efeito-muscular"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_EFEITO_2"
                    name="registrar-efeito-muscular"
                  >
                  <label for="input-efeito-muscular">Fortificação Muscular </label>

                  <input
                    id="input-efeito-relaxante"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_EFEITO_3"
                    name="registrar-efeito-relaxante"
                  >
                  <label for="input-efeito-relaxante">Relaxante </label>
                </div>

                <div class="flex gap-2 items-center justify-between">
                  <input
                    id="input-efeito-ossea"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_CATEGORIA_4"
                    name="registrar-efeito-ossea"
                  >
                  <label for="input-efeito-ossea">Fortificação ossea </label>

                  <input
                    id="input-efeito-vitaminaD"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_EFEITO_5"
                    name="registrar-efeito-vitamaniaD"
                  >
                  <label for="input-efeito-vitaminaD">Vitamina D </label>

                  <input
                    id="input-efeito-cerebral"
                    v-model="produto.efeitos"
                    class="accent-primary-olivia-dark"
                    type="checkbox"
                    value="ID_EFEITO_6"
                    name="registrar-efeito-cerebral"
                  >
                  <label for="input-efeito-cerebral">Memoria </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Rotulo Informações nutricionais -->
          <div class="flex flex-col w-full gap-6">
            <div class="flex items-center justify-center w-full relative before:content-[''] before:w-[30%] before:h-[2px] before:absolute before:left-0 before:top-1/2 before:bg-secondary-green-gray-dark after:content-[''] after:w-[30%] after:h-[2px] after:absolute after:right-0 after:bottom-1/2 after:bg-secondary-green-gray-dark">
              <div class="flex items-center justify-center py-2 px-7 rounded-full bg-primary-olivia-dark">
                <h2 class="text-complement-background-white font-semibold">
                  Informações Nutricionais:
                </h2>
              </div>
            </div>
          </div>
          <!-- Form Tabela nutricional -->
          <div class="flex flex-col my-4 gap-6">
            <div class="flex justify-between items-center gap-4">
              <label for="cabecalho-tabela-nutricional"><b>Cabeçalho da Tabela:</b> </label>
              <input id="cabecalho-tabela-nutricional" v-model="produto.informacaoNutricional.cabecalho" class="border rounded-md px-2 py-1" type="text" name="cabecalho-tabela-nutricional">
            </div>

            <div class="flex justify-between items-center gap-4">
              <label for="legenda-tabela-nutricional"><b>Legenda da Tabela:</b> </label>
              <input id="legenda-tabela-nutricional" v-model="produto.informacaoNutricional.legenda" class="border rounded-md px-2 py-1" type="text" name="legenda-tabela-nutricional">
            </div>
          </div>
          <!-- Rotulo compostos -->
          <div class="flex flex-col items-center justify-center w-full bg-complement-background-soft">
            <div class="flex w-full">
              <h3 class="flex py-2 px-9 text-complement-background-white font-semibold bg-primary-olivia-dark rounded-br-3xl">
                Composto nutricional:
              </h3>
            </div>
            <div class="flex flex-col gap-4 items-end my-4">
              <div class="flex justify-between items-center gap-4">
                <label for="composto-nutricional">Composto: </label>
                <input id="composto-nutricional" v-model="compostoNutricionalInput.composto" class="border rounded-md px-2 py-1" type="text" name="composto-nutricional">
              </div>
              <div class="flex justify-between items-center gap-4">
                <label for="porcao-nutricional">Porção: </label>
                <input id="porcao-nutricional" v-model="compostoNutricionalInput.porcao" class="border rounded-md px-2 py-1" type="text" name="porcao-nutricional">
              </div>
              <div class="flex justify-between items-center gap-4">
                <label for="valor-diario-nutricional">Valor Diário: </label>
                <input id="valor-diario-nutricional" v-model="compostoNutricionalInput.valorDiario" class="border rounded-md px-2 py-1" type="text" name="valor-diario-nutricional">
              </div>
              <button class="px-4 py-2 border border-primary-olivia-dark rounded-md font-semibold hover:bg-primary-olivia-dark hover:text-complement-background-white transition-colors duration-300" @click="addComposto">
                Adicionar composto
              </button>
            </div>
          </div>
          <!-- Compostos já adicionados -->
          <div v-if="produto.informacaoNutricional.compostosNutricionais.length > 0" class="w-full max-w-sm pt-2 pb-8">
            <h4 class="text-center font-bold text-base text-primary-olivia-dark">
              Seus compostos já adicionados:
            </h4>
            <div v-for="(p, index) in produto.informacaoNutricional.compostosNutricionais" :key="index">
              <div class="flex flex-col gap-2 items-end">
                <atoms-accordion :title-accordion="`Composto `+ (index+1)" class="w-full">
                  <div class="flex flex-col gap-2 p-2">
                    <div class="flex justify-end items-center gap-4">
                      <label :for="`composto-nutricional-`+index"><b>Composto:</b> </label>
                      <input
                        :id="`composto-nutricional-`+index"
                        v-model="produto.informacaoNutricional.compostosNutricionais[index].composto"
                        :placeholder="p.composto"
                        class="border rounded-md px-2 py-1"
                        type="text"
                        :name="`composto-nutricional-`+index"
                      >
                    </div>
                    <div class="flex justify-end items-center gap-4">
                      <label :for="`porcao-nutricional-`+index"><b>Porção:</b> </label>
                      <input :id="`porcao-nutricional-`+index" v-model="produto.informacaoNutricional.compostosNutricionais[index].porcao" class="border rounded-md px-2 py-1" type="text" name="porcao-nutricional">
                    </div>
                    <div class="flex justify-end items-center gap-4">
                      <label :for="`valor-diario-nutricional-`+index"><b>Valor Diário:</b> </label>
                      <input :id="`valor-diario-nutricional-`+index" v-model="produto.informacaoNutricional.compostosNutricionais[index].valorDiario" class="border rounded-md px-2 py-1" type="text" name="valor-diario-nutricional">
                    </div>
                    <div class="flex mt-6">
                      <button class="border py-2 px-3 rounded border-[#912f3c] font-medium transition-colors duration-300 hover:bg-[#912f3c] hover:border-[#912f3c] hover:text-complement-background-white" @click="removeComposto(index)">
                        Remover composto
                      </button>
                    </div>
                  </div>
                </atoms-accordion>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-8 right-40 py-4 px-9 bg-primary-green-dark rounded-lg hover:opacity-80 group cursor-pointer">
          <h1 class="font-bold text-complement-background-white">
            Cadastrar produto
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Cadastro de Produto",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  htmlAttrs: {
    lang: "pt-br"
  },
  meta: [
    { name: "description", content: "Cadastre aqui seus produtos para exibição no ecommerce da suplee!" }
  ]
});

const route = useRoute();
const isAdmin = ref(false);

type compNutricional = {
  composto: string,
  porcao: string,
  valorDiario: string,
};
type Product = {
  nome: string,
  descricao: string,
  composicao: string,
  quantidadeDisponivel:number,
  preco:number,
  profundidade:number,
  altura:number,
  largura:number,
  categoriaId: string,
  efeitos: string[],
  informacaoNutricional: {
    cabecalho: string,
    legenda: string,
    compostosNutricionais: compNutricional[]
  }
}
const compostoNutricionalInput = reactive<compNutricional>(
  {
    composto: "",
    porcao: "",
    valorDiario: ""
  }
);
const produto = reactive<Product>(
  {
    nome: "",
    descricao: "",
    composicao: "",
    quantidadeDisponivel: 0,
    preco: 0,
    profundidade: 0,
    altura: 0,
    largura: 0,
    categoriaId: "",
    efeitos: [],
    informacaoNutricional: {
      cabecalho: "",
      legenda: "",
      compostosNutricionais: [

      ]
    }
  }
);

const addComposto = () => {
  produto.informacaoNutricional.compostosNutricionais = [...produto.informacaoNutricional.compostosNutricionais, { composto: compostoNutricionalInput.composto, porcao: compostoNutricionalInput.porcao, valorDiario: compostoNutricionalInput.valorDiario }];

  compostoNutricionalInput.composto = "";
  compostoNutricionalInput.porcao = "";
  compostoNutricionalInput.valorDiario = "";
};

const removeComposto = (index: number) => {
  produto.informacaoNutricional.compostosNutricionais.splice(index, 1);
};

if (route.params.group === "admins" && route.params.id === "123") {
  isAdmin.value = true;
  // console.log("Warning! Make sure user is authenticated!");
}
</script>
