<template>
  <div class="w-full h-[19rem] lg:h-[25rem] flex justify-center items-end mt-10 lg:mt-6">
    <div class="w-[95%] h-full px-4 lg:px-5 bg-[#FFF] relative z-20 rounded-xl shadow-md hover:shadow-xl cursor-pointer">
      <div class="flex justify-center relative -top-[15%]">
        <!-- <img src="/bg-complement/item-example.svg" class="drop-shadow-xl block lg:hidden" alt=""> -->
        <!-- <img src="/bg-complement/ImageSuplementDesktop.svg" class="drop-shadow-xl hidden lg:block" alt=""> -->
        <!-- <img src="/bg-complement/suplemento.webp" class="drop-shadow-xl hidden lg:block" alt=""> -->

        <!-- Certos! -->
        <img :src="produto.imagens[0].urlImagemReduzida" width="93" height="142" class="drop-shadow-xl block lg:hidden" alt="">
        <img :src="produto.imagens[0].urlImagemReduzida" width="155" height="235" class="drop-shadow-xl hidden lg:block" alt="">
      </div>
      <article class="relative z-30 -top-[15%] mt-1">
        <h4 class="text-base lg:text-xl text-dark-normal font-semibold mb-1 truncate">
          {{ produto.nome }}
        </h4>

        <div class="w-full flex flex-col justify-center items-center gap-3">
          <div :class="classObject.themeBgPill" class="flex justify-center items-center px-2 py-[1px] bg-[#CCE4CD] rounded-full">
            <h5 :class="classObject.themeTextPill" class="text-sm font-bold">
              {{ produto.nomeCategoria }}
            </h5>
          </div>

          <div :class="produto.nomeEfeito.length < 3 ? 'justify-around' : 'justify-between' " class="flex items-center w-full">
            <div v-for="(effectName, index) in produto.nomeEfeito" :key="index">
              <div class="flex flex-col items-center justify-center gap-1">
                <img
                  v-if="effectName === 'Imunidade'"
                  src="/icons/icon-imunity.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito imunidade"
                >
                <img
                  v-else-if="effectName === 'Fortalecimento Muscular'"
                  src="/icons/icon-muscle.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito de Fortalecimento Muscular"
                >
                <img
                  v-else-if="effectName === 'Fortificação Óssea'"
                  src="/icons/icon-bone.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito de Fortificação Óssea"
                >
                <img
                  v-else-if="effectName === 'Memória'"
                  src="/icons/icon-brain.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito Memória"
                >
                <img
                  v-else-if="effectName === 'Vitamina D'"
                  src="/icons/icon-vit-d.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito Vitamina D"
                >
                <img
                  v-else-if="effectName === 'Relaxante'"
                  src="/icons/icon-sleep.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone para o efeito Relaxante"
                >
                <img
                  v-else
                  src="/icons/icon-imunity.svg"
                  width="28"
                  height="28"
                  class="w-7 h-7 lg:w-9 lg:h-10"
                  alt="Icone imunidade"
                >

                <span :class="classColorEffectName(effectName)" class="font-bold text-[0.625rem] lg:text-xs">
                  {{
                    effectName === 'Fortalecimento Muscular'
                      ? 'Muscular'
                      : effectName === 'Fortificação Óssea'
                        ? 'Fort. Óssea'
                        : effectName
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5">
          <h4 class="text-sm lg:text-lg 2xl:text-xl text-dark-normal font-semibold">
            {{ accountBRL }}
          </h4>
          <button
            class="
              flex items-center justify-center relative overflow-hidden transition-all duration-300 px-4 lg:px-6 2xl:px-9 py-2 2xl:py-3 bg-primary-olivia-medium rounded-md
              before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)]
              before:transition-all before:duration-1000 before:z-[2] before:-translate-x-16 before:-skew-x-12
              hover:before:translate-x-[200px] hover:bg-primary-green-dark
            "
          >
            <p class="text-complement-background-white font-bold text-sm lg:text-base 2xl:text-lg">
              Comprar
            </p>
          </button>
        </div>
      </article>

      <div class="absolute z-20 bottom-[0.375rem] left-0 w-full h-8 bg-[#FFF] rounded-b-xl" />
      <div class="absolute z-10 bottom-0 left-0 w-full h-8 bg-primary-olivia-dark rounded-b-xl" />
    </div>
  </div>
</template>

<script setup lang="ts">

type ImagensCardProduct = {
  nomeImagem: string,
  urlImagemOriginal: string,
  urlImagemReduzida: string,
  urlImagemMaior: string,
};

type ProductCard = {
  imagens: ImagensCardProduct[],
  nome: string,
  nomeCategoria: string,
  nomeEfeito: string[],
  preco:number,
};

const propsValue = defineProps<{
  produto: ProductCard
}>();
const classObject = computed(() => ({
  themeBgPill: propsValue.produto.nomeCategoria === "Vitaminas"
    ? "bg-[#CCE4CD]"
    : propsValue.produto.nomeCategoria === "Proteínas"
      ? "bg-[#D0D5BE]"
      : propsValue.produto.nomeCategoria === "Minerais" ? "bg-[#F0D0B4]" : propsValue.produto.nomeCategoria === "Ômega-3" && "bg-[#D5D8CF]",

  themeTextPill: propsValue.produto.nomeCategoria === "Vitaminas"
    ? "text-primary-green-dark"
    : propsValue.produto.nomeCategoria === "Proteínas"
      ? "text-primary-lemon-dark"
      : propsValue.produto.nomeCategoria === "Minerais" ? "text-secondary-orange-dark" : propsValue.produto.nomeCategoria === "Ômega-3" && "text-primary-olivia-dark"
}));

const accountBRL = useAccountBRL(propsValue.produto.preco);

// computed(() => {
//   const valor = propsValue.produto.preco.toFixed(2).toString();
//   return "R$ " + valor.replace(".", ",");
// });

function classColorEffectName (effectName: string) {
  return effectName === "Imunidade"
    ? "text-primary-green-dark"
    : effectName === "Fortalecimento Muscular"
      ? "text-primary-lemon-dark"
      : effectName === "Fortificação Óssea"
        ? "text-secondary-orange-dark"
        : effectName === "Memória"
          ? "text-primary-olivia-dark"
          : effectName === "Vitamina D"
            ? "text-[#7A401C]"
            : effectName === "Relaxante"
              ? "text-secondary-green-gray-dark"
              : "text-primary-green-dark";
}

</script>
