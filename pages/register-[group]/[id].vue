<template>
  <div v-if="isAdmin" class="container mx-auto relative">
    <!-- <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    <span> {{ isAdmin }} </span> -->
    <pre class="flex self-start fixed top-0 left-0">
      {{ produto }}
    </pre>
    <div class="flex flex-1 flex-col min-h-screen justify-center items-center gap-4">
      <div class="flex justify-between items-center gap-4">
        <label for="nome-produto">Nome do produto: </label>
        <input id="nome-produto" v-model="produto.nome" class="border rounded-sm" type="text" name="nome-produto">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="descricao-produto">Descrição do produto: </label>
        <textarea id="descricao-produto" v-model="produto.descricao" class="border rounded-sm" type="text" name="descricao-produto" />
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="composicao-produto">Composição do produto: </label>
        <textarea id="composicao-produto" v-model="produto.composicao" class="border rounded-sm" type="text" name="composicao-produto" />
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="quantidade-disponivel">Quantidade disponivel: </label>
        <input id="quantidade-disponivel" v-model="produto.quantidadeDisponivel" class="border rounded-sm" type="number" name="quantidade-disponivel">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="preco-produto">Preço do produto: </label>
        <input id="preco-produto" v-model="produto.preco" class="border rounded-sm" type="text" name="preco-produto">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="profundidade-produto">Profundidade: </label>
        <input id="profundidade-produto" v-model="produto.profundidade" class="border rounded-sm" type="number" name="profundidade-produto">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="altura-produto">Altura: </label>
        <input id="altura-produto" v-model="produto.altura" class="border rounded-sm" type="number" name="altura-produto">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="Largura-produto">Largura: </label>
        <input id="Largura-produto" v-model="produto.largura" class="border rounded-sm" type="number" name="Largura-produto">
      </div>

      <div class="flex flex-col justify-between items-start gap-4">
        <span>Categorias: </span>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <input id="input-categoria-minerais" v-model="produto.categoriaId" type="radio" value="ID_CAT_MINERAL" name="registrar-categoria-produto">
            <label for="input-categoria-minerais">Minerais </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-proteinas" v-model="produto.categoriaId" type="radio" value="ID_CAT_PROTEINA" name="registrar-categoria-produto">
            <label for="input-categoria-proteinas">Proteinas </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-vitaminas" v-model="produto.categoriaId" type="radio" value="ID_CAT_VITAMINAS" name="registrar-categoria-produto">
            <label for="input-categoria-vitaminas">Vitaminas </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-omega3" v-model="produto.categoriaId" type="radio" value="ID_CAT_OMEGA3" name="registrar-categoria-produto">
            <label for="input-categoria-omega3">Ômega 3 </label>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="imagens-produto">Imagens: </label>
        <input id="imagens-produto" type="file" name="imagens-produto" multiple>
      </div>

      <div class="flex flex-col justify-between items-start gap-4">
        <span>Efeitos: </span>
        <div class="flex flex-col">
          <div class="flex gap-2 items-center">
            <input id="input-efeito-imunidade" v-model="produto.efeitos" type="checkbox" value="ID_EFEITO_1" name="registrar-efeito-imunidade">
            <label for="input-efeito-imunidade">Imunidade </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-muscular" v-model="produto.efeitos" type="checkbox" value="ID_EFEITO_2" name="registrar-efeito-muscular">
            <label for="input-efeito-muscular">Fortificação Muscular </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-relaxante" v-model="produto.efeitos" type="checkbox" value="ID_EFEITO_3" name="registrar-efeito-relaxante">
            <label for="input-efeito-relaxante">Relaxante </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-ossea" v-model="produto.efeitos" type="checkbox" value="ID_CATEGORIA_4" name="registrar-efeito-ossea">
            <label for="input-efeito-ossea">Fortificação ossea </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-vitaminaD" v-model="produto.efeitos" type="checkbox" value="ID_EFEITO_5" name="registrar-efeito-vitamaniaD">
            <label for="input-efeito-vitaminaD">Vitamina D </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-cerebral" v-model="produto.efeitos" type="checkbox" value="ID_EFEITO_6" name="registrar-efeito-cerebral">
            <label for="input-efeito-cerebral">Memoria </label>
          </div>
        </div>
      </div>

      <h3>Informações Nutricionais:</h3>
      <div class="flex justify-between items-center gap-4">
        <label for="cabecalho-tabela-nutricional">Cabeçalho da Tabela: </label>
        <input id="cabecalho-tabela-nutricional" v-model="produto.informacaoNutricional.cabecalho" class="border rounded-sm" type="text" name="cabecalho-tabela-nutricional">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="legenda-tabela-nutricional">Legenda da Tabela: </label>
        <input id="legenda-tabela-nutricional" v-model="produto.informacaoNutricional.legenda" class="border rounded-sm" type="text" name="legenda-tabela-nutricional">
      </div>

      <h3>Composto nutricional:</h3>
      <div class="flex justify-between items-center gap-4">
        <label for="composto-nutricional">Composto: </label>
        <input id="composto-nutricional" v-model="produto.informacaoNutricional.compostosNutricionais[0]" class="border rounded-sm" type="text" name="composto-nutricional">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="porcao-nutricional">Porção: </label>
        <input id="porcao-nutricional" v-model="produto.informacaoNutricional.compostosNutricionais[0]" class="border rounded-sm" type="text" name="porcao-nutricional">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="valor-diario-nutricional">Valor Diário: </label>
        <input id="valor-diario-nutricional" v-model="produto.informacaoNutricional.compostosNutricionais[0]" class="border rounded-sm" type="text" name="valor-diario-nutricional">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isAdmin = ref(false);
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
      compostosNutricionais: string[]
    }

}
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
      compostosNutricionais: []
    }
  }
);

if (route.params.group === "admins" && route.params.id === "123") {
  isAdmin.value = true;
  // console.log("Warning! Make sure user is authenticated!");
}
</script>
