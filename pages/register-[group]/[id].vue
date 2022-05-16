<template>
  <div v-if="isAdmin" class="container mx-auto">
    <!-- <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    <span> {{ isAdmin }} </span> -->
    <div class="flex flex-1 flex-col min-h-screen justify-center items-center gap-4">
      <pre class="flex self-start">
        {{ product }}
      </pre>
      <div class="flex justify-between items-center gap-4">
        <label for="nome-produto">Nome do produto: </label>
        <input id="nome-produto" v-model="product.name" type="text" name="nome-produto">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="descricao-produto">Descrição do produto: </label>
        <textarea id="descricao-produto" v-model="product.description" type="text" name="descricao-produto" />
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="composicao-produto">Descrição do produto: </label>
        <textarea id="composicao-produto" type="text" name="composicao-produto" />
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="quantidade-disponivel">Quantidade disponivel: </label>
        <input id="quantidade-disponivel" type="number" name="quantidade-disponivel">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="preco-produto">Preço do produto: </label>
        <input id="preco-produto" type="text" name="preco-produto">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="profundidade-produto">Profundidade: </label>
        <input id="profundidade-produto" type="number" name="profundidade-produto">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="altura-produto">Altura: </label>
        <input id="altura-produto" type="number" name="altura-produto">
      </div>
      <div class="flex justify-between items-center gap-4">
        <label for="Largura-produto">Largura: </label>
        <input id="Largura-produto" type="number" name="Largura-produto">
      </div>

      <div class="flex flex-col justify-between items-start gap-4">
        <span>Categorias: </span>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <input id="input-categoria-minerais" type="radio" value="ID_CATEGORIA" name="registrar-categoria-produto">
            <label for="input-categoria-minerais">Minerais </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-proteinas" type="radio" value="ID_CATEGORIA" name="registrar-categoria-produto">
            <label for="input-categoria-proteinas">Proteinas </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-vitaminas" type="radio" value="ID_CATEGORIA" name="registrar-categoria-produto">
            <label for="input-categoria-vitaminas">Vitaminas </label>
          </div>

          <div class="flex items-center gap-2">
            <input id="input-categoria-omega3" type="radio" value="ID_CATEGORIA" name="registrar-categoria-produto">
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
            <input id="input-efeito-imunidade" type="checkbox" value="ID_EFEITO" name="registrar-efeito-imunidade">
            <label for="input-efeito-imunidade">Imunidade </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-muscular" type="checkbox" value="ID_EFEITO" name="registrar-efeito-muscular">
            <label for="input-efeito-muscular">Fortificação Muscular </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-relaxante" type="checkbox" value="ID_EFEITO" name="registrar-efeito-relaxante">
            <label for="input-efeito-relaxante">Relaxante </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-ossea" type="checkbox" value="ID_CATEGORIA" name="registrar-efeito-ossea">
            <label for="input-efeito-ossea">Fortificação ossea </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-vitaminaD" type="checkbox" value="ID_EFEITO" name="registrar-efeito-vitamaniaD">
            <label for="input-efeito-vitaminaD">Vitamina D </label>
          </div>

          <div class="flex gap-2 items-center">
            <input id="input-efeito-cerebral" type="checkbox" value="ID_EFEITO" name="registrar-efeito-cerebral">
            <label for="input-efeito-cerebral">Memoria </label>
          </div>
        </div>
      </div>

      <h3>Informações Nutricionais:</h3>
      <div class="flex justify-between items-center gap-4">
        <label for="cabecalho-tabela-nutricional">Cabeçalho da Tabela: </label>
        <input id="cabecalho-tabela-nutricional" type="text" name="cabecalho-tabela-nutricional">
      </div>

      <div class="flex justify-between items-center gap-4">
        <label for="legenda-tabela-nutricional">Legenda da Tabela: </label>
        <input id="legenda-tabela-nutricional" type="text" name="legenda-tabela-nutricional">
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const isAdmin = ref(false);
const product = reactive({ name: "", description: "" });

if (route.params.group === "admins" && route.params.id === "123") {
  isAdmin.value = true;
  // console.log("Warning! Make sure user is authenticated!");
}
</script>
