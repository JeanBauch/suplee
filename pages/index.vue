<template>
  <div class="relative">
    <organisms-nav-bar-footer-mobile @select-scroll-section="scrollToSection" />
    <section class="bg-complement-background-soft relative z-0 min-h-screen overflow-hidden">
      <atoms-bg-hero />
      <organisms-header @search-product="searchProductName" />
      <organisms-call-to-action-home-page @select-category-filter="filterCategoryCallToAction" @search-product="searchProductName" />
    </section>
    <section class="bg-complement-background-normal min-h-screen">
      <div class="md:container mx-auto">
        <!-- Heading -->
        <div id="titleListProduct" class="flex items-start px-4 sm:px-8 lg:px-0 pt-8 pb-4 lg:border-none border-b border-secondary-green-gray-medium">
          <h2 class="font-semibold text-2xl md:font-bold lg:text-3xl text-dark-normal">
            Todos os produtos
          </h2>
          <div class="hidden lg:flex flex-1 justify-center items-center">
            <div class="relative w-[28rem] flex flex-col gap-2">
              <molecules-search-product product-listing @search-product="searchProductName" />
              <h3 v-if="currentProductNameToSearch != '' && !loaderProduct" class="text-center font-light pr-16">
                <span class="font-bold">
                  {{ currentCountProductSearch }}
                </span>
                suplementos encontrados com
                <span class="font-bold">
                  "{{ currentProductNameToSearch }}"
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div id="productsFiltered" />
        <!-- Filter Mobile-->
        <div class="bg-complement-background-normal px-4 sm:px-8 lg:px-0 py-5 shadow-lg lg:hidden">
          <div class="flex flex-wrap items-center justify-start ">
            <div class="mr-8">
              <h3 class="font-semibold text-lg">
                Filtros:
              </h3>
            </div>
            <div class="flex gap-4">
              <button :class="setBorderCurrentCategoryFilter()" class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full text-lg shadow-md" @click="toggleModalFilter('Categorias')">
                <span v-if="isCategorySelected('Vitaminas')">Vitaminas</span>
                <span v-else-if="isCategorySelected('Proteínas')">Proteínas</span>
                <span v-else-if="isCategorySelected('Minerais')">Minerais</span>
                <span v-else-if="isCategorySelected('Ômega-3')">Ômega-3</span>
                <span v-else>Categorias</span>
              </button>
              <button :class="setBorderCurrentEffectFilter()" class="px-6 py-2 w-36 flex justify-center items-center bg-[#FFF] rounded-full font-medium text-lg shadow-md" @click="toggleModalFilter('Efeitos')">
                <span v-if="isEffectSelected('Imunidade')">Imunidade</span>
                <span v-else-if="isEffectSelected('Fortalecimento Muscular')">Muscular</span>
                <span v-else-if="isEffectSelected('Memória')">Memória</span>
                <span v-else-if="isEffectSelected('Forticação Osséa')">Osséa</span>
                <span v-else-if="isEffectSelected('Vitamina D')">Vitamina D</span>
                <span v-else-if="isEffectSelected('Relaxante')">Relaxante</span>
                <span v-else>Efeitos</span>
              </button>
            </div>
          </div>
        </div>
        <div class="block lg:hidden py-4">
          <h4 v-if="currentProductNameToSearch != '' && !loaderProduct" class="text-center font-light">
            <span class="font-bold">
              {{ currentCountProductSearch }}
            </span>
            suplementos encontrados com
            <span class="font-bold">
              "{{ currentProductNameToSearch }}"
            </span>
          </h4>
        </div>
        <div class="flex md:justify-between">
          <!-- Filter Desktop -->
          <div class="hidden lg:flex flex-col gap-4">
            <!-- Filter Category -->
            <div class="bg-[#FFF] rounded-2xl w-72 shadow-lg mt-16">
              <div class="p-6 border-b border-b-secondary-green-gray-light">
                <h3 class="text-2xl font-medium">
                  Categorias
                </h3>
              </div>
              <nav>
                <ul class="text-2xl font-light flex flex-col text-dark-normal">
                  <li :class="isCategorySelected('Vitaminas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer hover:bg-primary-lemon-light hover:bg-opacity-60" @click="toggleSelectedCategory('Vitaminas')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-green-dark" />
                      <span>
                        Vitaminas
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Vitaminas')" class="h-8 w-8 text-primary-green-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Proteínas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer hover:bg-primary-lemon-light hover:bg-opacity-60" @click="toggleSelectedCategory('Proteínas')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-lemon-dark" />
                      <span>
                        Proteínas
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Proteínas')" class="h-8 w-8 text-primary-lemon-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Minerais') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer hover:bg-primary-lemon-light hover:bg-opacity-60" @click="toggleSelectedCategory('Minerais')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-secondary-orange-medium" />
                      <span>
                        Minerais
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Minerais')" class="h-8 w-8 text-secondary-orange-dark relative z-10" />
                    </div>
                  </li>
                  <li :class="isCategorySelected('Ômega-3') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-6 py-4 text-dark-normal flex gap-16 cursor-pointer hover:bg-primary-lemon-light hover:bg-opacity-60" @click="toggleSelectedCategory('Ômega-3')">
                    <div class="flex items-center gap-4">
                      <div class="w-8 md:w-6 h-2 md:h-2 rounded-full bg-primary-olivia-dark" />
                      <span>
                        Ômega-3
                      </span>
                    </div>
                    <div>
                      <CheckIcon v-if="isCategorySelected('Ômega-3')" class="h-8 w-8 text-primary-olivia-dark relative z-10" />
                    </div>
                  </li>
                  <li class="px-6 py-4 rounded-b-2xl text-dark-normal flex items-center justify-start cursor-pointer hover:bg-primary-lemon-light hover:bg-opacity-60" @click="removeFilter">
                    <span>
                      Listar todas
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Filter Effects -->
            <div class="bg-[#FFF] rounded-2xl w-72 shadow-lg">
              <div class="p-6 border-b border-b-secondary-green-gray-light">
                <h3 class="text-2xl font-medium">
                  Efeitos
                </h3>
              </div>
              <nav>
                <ul class="grid grid-cols-2 gap-2 py-4 mb-7 text-2xl font-light text-dark-normal">
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Imunidade')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Imunidade') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class=" group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M42.0741 5.8381L24.5947 0.595804L42.0741 5.8381ZM42.0741 5.8381L42.074 5.83833C43.0437 6.12945 43.6915 7.00162 43.6915 8.01402L43.6908 20.46C43.6908 32.2148 36.6425 42.6278 25.7282 46.9926L25.6949 47.0059L25.6639 47.0238C24.5644 47.6587 23.3217 47.6588 22.22 47.0237L22.1891 47.0059L22.156 46.9926C11.2438 42.6276 4.19336 32.2148 4.19336 20.46V8.01405C4.19336 7.0017 4.84119 6.12945 5.81084 5.83832L23.2887 0.59591C23.2887 0.595901 23.2888 0.595892 23.2888 0.595883C23.7173 0.468023 24.1677 0.468112 24.5944 0.595712L42.0741 5.8381ZM23.4853 1.22119L23.4852 1.22115L23.4791 1.22298L6.00072 6.46745C6.00063 6.46748 6.00055 6.4675 6.00046 6.46753C5.31268 6.67362 4.8504 7.29782 4.8504 8.01358V20.4605C4.8504 31.9281 11.7232 42.0932 22.3602 46.3659C23.3451 46.962 24.5405 46.962 25.5254 46.3659C36.1621 42.0935 43.0352 31.929 43.0352 20.4605L43.0352 8.01358C43.0352 7.29829 42.573 6.67361 41.8851 6.46753C41.885 6.4675 41.8849 6.46747 41.8848 6.46744L24.4066 1.22302C24.2526 1.17678 24.0963 1.15565 23.9428 1.15565C23.7848 1.15565 23.6308 1.17951 23.4853 1.22119Z" stroke="currentColor" />
                        <path d="M28.2482 15.9068V16.4068H28.7482H33.8851C34.0663 16.4068 34.2137 16.554 34.2137 16.7353V24.6892C34.2137 24.8702 34.0662 25.0177 33.8851 25.0177H28.7482H28.2482V25.5177V30.6546C28.2482 30.8356 28.1007 30.9831 27.9197 30.9831H19.9658C19.7848 30.9831 19.6373 30.8356 19.6373 30.6546V25.5177V25.0177H19.1373H14.0004C13.8194 25.0177 13.6719 24.8702 13.6719 24.6892V16.7353C13.6719 16.5543 13.8194 16.4068 14.0004 16.4068H19.1373H19.6373V15.9068V10.7699C19.6373 10.5888 19.7848 10.4413 19.9658 10.4413H27.9197C28.1007 10.4413 28.2482 10.5888 28.2482 10.7699V15.9068ZM33.0566 24.3607H33.5566V23.8607V17.5638V17.0638H33.0566H27.9197C27.7387 17.0638 27.5912 16.9163 27.5912 16.7353V11.5984V11.0984H27.0912H20.7944H20.2944V11.5984V16.7353C20.2944 16.9163 20.1468 17.0638 19.9658 17.0638H14.8289H14.3289V17.5638V23.8607V24.3607H14.8289H19.9658C20.1468 24.3607 20.2944 24.5082 20.2944 24.6892V29.8261V30.3261H20.7944H27.0912H27.5912V29.8261V24.6892C27.5912 24.5082 27.7387 24.3607 27.9197 24.3607H33.0566Z" stroke="currentColor" />
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Imunidade') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Imunidade</span>
                  </div>
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Fortalecimento Muscular')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Fortalecimento Muscular') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class="group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_367_3421)">
                          <path d="M46.4997 29C46.4997 29 40.9997 23 36.9997 22.5C32.9997 22 31.4997 23.5 29.4997 24M26.9997 26.5C26.9997 26.5 28.1329 24.5467 29.4997 24M29.4997 24C26.5708 22.5941 25.7059 21.7706 22.9997 21.5C20.4442 21.2445 16.4997 22.5 16.4997 22.5M16.4997 22.5C16.4997 22.5 17.9997 16.5 17.9997 14C17.9997 11.5 21.9997 8.99999 21.9997 8.99999L22.9997 8.49999M16.4997 22.5L15.4997 25M22.9997 8.49999L22.4997 6.49999M22.9997 8.49999C22.9997 8.49999 23.9728 10.2867 24.9997 11C26.014 11.7045 26.88 11.479 27.9997 12C29.032 12.4804 29.3962 13.2195 30.4997 13.5C31.4459 13.7406 32.4781 13.8253 32.9997 13C33.4252 12.3267 32.9997 11.5 32.9997 11.5M30.9997 6.49999C30.9997 6.49999 29.4997 6.49999 29.4997 8.49999C29.4997 10.5 32.4997 11 32.4997 11L32.9997 11.5M32.9997 11.5C32.9997 11.5 34.1045 10.3928 34.4997 9.5C35.211 7.89302 35.0375 6.67305 34.4997 4.99999C34.2325 4.16865 33.9997 3.49999 33.4997 2.99999C32.9997 2.49999 27.1704 1.17169 22.9997 0.999994C21.8291 0.951805 20.9997 0.999993 19.9997 0.999994C18.9997 0.999995 17.3233 4.10909 15.4997 5.99999C12.7185 8.88383 10.4997 10.5 7.99968 13C5.49968 15.5 4.69561 18.0423 2.99968 21.5C2.15281 23.2266 0.522274 23.6572 1.00006 27C1.47785 30.3428 7.74403 32.5724 12.4997 35.5C19.0541 39.5349 30.1769 38.6682 30.9997 39C31.8225 39.3317 34.9885 47.1576 36.5 47M37.4997 37C37.4997 37 39.2512 39.8814 40.9997 41C42.717 42.0986 45.9997 42.5 45.9997 42.5M29.9997 32C29.9997 32 24.5215 34.0412 20.9997 33.5C17.5473 32.9694 12.9997 29.5 12.9997 29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_367_3421">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Fortalecimento Muscular') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-sm text-center font-light group-hover:text-primary-green-dark">Fortalecimento<br>muscular</span>
                  </div>
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Memória')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Memória') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class="group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.7878 45.0001C17.7589 41.6447 16.2067 39.1433 14.1312 37.4958C11.0178 35.0246 6.07108 36.5605 4.24382 34.0116C2.41655 31.4626 5.52402 26.7752 6.61447 24.0094C7.70492 21.2437 2.43488 20.2657 3.05015 19.4805C3.46035 18.9571 6.12346 17.4465 11.0396 14.949C12.4364 6.983 17.5959 3 26.5182 3C39.9014 3 45.0001 14.3463 45.0001 21.5629C45.0001 28.7795 38.8262 36.5541 30.0314 38.2304C29.2449 39.3757 30.3792 41.6323 33.4341 45.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.2774 14.0249C18.5914 16.6858 18.7955 18.5544 19.8897 19.6303C20.9839 20.7064 22.8488 21.41 25.4844 21.7413C24.8865 25.1734 25.6156 26.7836 27.6716 26.5717C29.7277 26.3598 30.963 25.5054 31.3778 24.0086C34.5911 24.9118 36.3327 24.156 36.6024 21.7413C37.0072 18.1192 35.054 15.2298 34.2532 15.2298C33.4524 15.2298 31.3778 15.1323 31.3778 14.0249C31.3778 12.9174 28.9544 12.2917 26.7672 12.2917C24.5801 12.2917 25.8964 10.8174 22.893 11.3999C20.8908 11.7882 19.6856 12.6632 19.2774 14.0249Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Memória') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Memória</span>
                  </div>
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Fortificação Óssea')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Fortificação Óssea') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class="group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_360_3376)">
                          <path d="M39.974 45.415L40.2425 45.4272L39.8371 45.5039C39.8666 45.7034 39.7501 45.8949 39.5603 45.9606L39.2237 46.077V46.1071L35.719 47.6462L35.6762 47.6598H35.6527L35.5925 47.675C35.5297 47.6908 35.4647 47.6917 35.4017 47.6775C35.3722 47.6679 35.3441 47.6549 35.3178 47.6391C35.2945 47.6223 35.2733 47.6035 35.2547 47.5833C35.2355 47.559 35.2191 47.5328 35.2061 47.5057C32.014 40.2873 29.56 35.5213 29.3439 35.1018L29.3403 35.0949L29.3365 35.0881C29.1019 34.6654 28.8126 34.2753 28.4755 33.9283L28.4689 33.9215L28.4621 33.915C27.6812 33.1696 26.6954 32.6746 25.6317 32.4935C24.7187 32.2697 23.9196 32.0596 23.3985 31.2799C23.0037 30.6242 22.8566 29.849 22.9843 29.0945L22.9843 29.0945C23.1112 28.3451 23.501 27.6657 24.0831 27.1776C24.9587 26.604 26.0698 26.5246 27.0186 26.9698L27.6951 27.2873L27.7305 26.5409C27.7827 25.4402 28.1611 24.3799 28.8169 23.4942C29.9451 22.204 31.5891 21.4827 33.3028 21.5269L33.319 21.5273L33.3353 21.5267C34.6031 21.477 35.8242 22.007 36.6532 22.966C37.0468 23.5184 37.2888 24.1643 37.3556 24.8398C37.4226 25.5159 37.3109 26.1975 37.0326 26.8172C36.7372 27.3518 36.3059 27.7987 35.7818 28.1118L35.7812 28.1121C35.2975 28.402 34.8971 28.8123 34.6199 29.304L34.6059 29.3287L34.5948 29.3549C34.2762 30.1086 34.2107 30.9455 34.4082 31.7397L34.4141 31.7633L34.4222 31.7862C35.8529 35.8202 37.6412 40.3904 39.8323 45.3636C39.833 45.379 39.833 45.3941 39.8323 45.4085L39.8525 45.4094C39.8598 45.4259 39.8671 45.4424 39.8744 45.4589L39.974 45.415ZM24.5122 27.909C24.1303 28.275 23.8802 28.757 23.8005 29.2798L23.8005 29.2799C23.7207 29.8024 23.8159 30.3373 24.0711 30.8005L24.1889 30.7702L24.0918 30.8343C24.2788 31.1174 24.5398 31.2846 24.83 31.4032C25.1061 31.5159 25.4498 31.6002 25.8353 31.6919L25.8507 31.6956L25.8663 31.6983C27.0725 31.9056 28.1907 32.4657 29.0786 33.3078C29.4561 33.6938 29.7822 34.1264 30.0485 34.5954L30.081 34.6611L30.0843 34.6676L30.0877 34.6741C30.1847 34.8563 32.5015 39.3724 35.6148 46.2837L35.8181 46.7352L36.2715 46.5362L38.4375 45.5859L38.8901 45.3873L38.6968 44.9325C36.6831 40.1936 34.9801 35.827 33.6397 31.9601L33.6395 31.9594C33.6315 31.9366 33.626 31.9143 33.6227 31.8927L33.6201 31.8761L33.6165 31.8597C33.399 30.886 33.4987 29.8681 33.9009 28.9555C34.2221 28.3614 34.6887 27.8586 35.2571 27.4944C35.6706 27.2542 36.0147 26.9114 36.2565 26.4983L36.2726 26.4708L36.285 26.4414C36.6953 25.4767 36.5875 24.3696 35.9993 23.5016L35.9763 23.4676L35.948 23.4378C35.2586 22.7118 34.2864 22.3239 33.2868 22.3762C31.8372 22.3171 30.4375 22.9166 29.4806 24.0087L29.3566 24.1502V24.1698C28.8341 24.8932 28.6309 25.7698 28.5641 26.5012C28.4926 27.2826 28.5706 27.9684 28.6382 28.2637C28.6791 28.4497 28.5893 28.6399 28.4199 28.7262L28.4197 28.7263C28.2498 28.813 28.0426 28.7737 27.9164 28.6312C27.4243 28.0718 26.8144 27.731 26.2208 27.5993C25.6382 27.47 25.0203 27.5343 24.5643 27.8655L24.5368 27.8855L24.5122 27.909Z" stroke="currentColor" />
                          <path d="M25.6013 23.7186C24.6295 25.1372 23.0732 26.046 21.3598 26.1943L21.3598 26.1942L21.3477 26.1955C21.1498 26.2175 20.9509 26.2292 20.7509 26.2313L20.7355 26.2314L20.7201 26.2325C19.4975 26.3209 18.3133 25.7843 17.5734 24.807C16.8345 23.8311 16.6391 22.5482 17.0536 21.3967C17.2715 20.8353 17.6328 20.3402 18.1016 19.9609C18.5435 19.6285 18.8937 19.1888 19.1181 18.6828L19.1319 18.6515L19.1414 18.6186C19.3675 17.8342 19.3338 16.9974 19.0447 16.2337L19.0369 16.213L19.0273 16.1931C17.152 12.3126 14.8275 7.97918 12.1061 3.27605V3.23114L12.0856 3.1617C12.0318 2.98001 12.1074 2.78419 12.2702 2.68553L15.8698 0.559069L15.8698 0.559074L15.8718 0.557866C15.9774 0.494785 16.1062 0.482638 16.2224 0.524568L16.2884 0.56576L16.3672 0.614967L16.3709 0.623028L16.3817 0.646302L16.3947 0.668354C18.4935 4.20509 20.3203 7.10881 21.6225 9.13428C22.2736 10.1471 22.7936 10.9402 23.1506 11.4827C23.2191 11.5867 23.2813 11.6812 23.3373 11.7661C23.4277 11.9033 23.5017 12.0156 23.5589 12.103C23.5819 12.1382 23.6018 12.1687 23.6187 12.1947V12.2121L23.7111 12.3421C24.6339 13.6406 26.1259 14.4145 27.718 14.4212C28.6421 14.5257 29.4616 14.6473 30.0611 15.3552C30.5332 15.9604 30.7723 16.7147 30.7342 17.4814L30.7342 17.4816C30.6968 18.2424 30.3891 18.9643 29.867 19.518C29.0632 20.1844 27.9717 20.3883 26.9805 20.0556L26.27 19.8171L26.3226 20.5647C26.4 21.6645 26.1488 22.7623 25.6013 23.7186ZM25.9122 18.4781L25.9194 18.4845C26.4755 18.9804 27.1224 19.2449 27.7273 19.3048C28.3205 19.3636 28.9257 19.2275 29.3387 18.848L29.3649 18.8239L29.3875 18.7964C29.7223 18.3869 29.9126 17.8788 29.9291 17.3502L29.9291 17.3497C29.9451 16.8215 29.7869 16.302 29.4772 15.8726L29.465 15.8557L29.4515 15.8399C29.2308 15.5821 28.954 15.4462 28.6507 15.3616C28.3634 15.2814 28.0123 15.2373 27.618 15.19L27.5996 15.1878L27.5811 15.187C26.3614 15.1316 25.1849 14.7169 24.2004 13.9946C23.7673 13.6567 23.3806 13.2634 23.0497 12.8247L23.0498 12.8247L23.0457 12.8195L23.0091 12.7723C22.9967 12.7541 22.9538 12.6909 22.8781 12.5782C22.7889 12.4455 22.6587 12.2507 22.4908 11.9972C22.1549 11.4902 21.6683 10.7485 21.0586 9.79997C19.839 7.90289 18.1269 5.17894 16.1419 1.85092L15.8845 1.41936L15.4542 1.6789L13.4172 2.90761L12.9973 3.16091L13.2424 3.58566C15.8052 8.02661 18.0171 12.1605 19.802 15.8399L19.8021 15.8402C19.814 15.8647 19.8236 15.8894 19.8312 15.9146L19.8348 15.9265L19.839 15.9382C20.1769 16.8877 20.1993 17.9208 19.9024 18.8837C19.6541 19.513 19.2496 20.0691 18.7273 20.4986C18.3441 20.7879 18.0433 21.1716 17.8529 21.6117L17.8405 21.6404L17.8318 21.6703C17.5384 22.6775 17.7769 23.7642 18.4641 24.5563L18.4896 24.5857L18.5194 24.6109C19.2872 25.2586 20.3005 25.5367 21.2906 25.3716C22.6428 25.256 23.8816 24.5824 24.713 23.5195H24.7394L24.8861 23.2835C25.4623 22.3568 25.5257 21.2608 25.4669 20.4468C25.4369 20.0326 25.3739 19.6729 25.3184 19.4162C25.3106 19.3802 25.3029 19.3462 25.2955 19.3142L25.3614 19.2572L25.2506 18.937C25.1886 18.7579 25.2551 18.5594 25.4129 18.4535L25.4131 18.4534C25.5666 18.3503 25.7697 18.3607 25.9122 18.4781Z" stroke="currentColor" />
                          <path d="M15.3187 30.5091L15.32 30.5104C16.2126 31.3424 17.3748 31.8201 18.5893 31.8584L18.5974 31.8685L18.8467 31.86C18.9628 31.856 19.0755 31.8989 19.1595 31.9789C19.2427 32.0582 19.291 32.168 19.2931 32.284C19.2938 32.5119 19.1115 32.6985 18.8836 32.7033L18.836 32.7033L18.8346 32.7033C17.3267 32.7074 15.8734 32.1406 14.7664 31.1168C13.6596 30.0932 12.9817 28.6884 12.8683 27.1849C12.8518 26.9562 13.0223 26.7571 13.2502 26.7379C13.4807 26.7264 13.6794 26.8981 13.7013 27.1277C13.7991 28.4171 14.376 29.6238 15.3187 30.5091Z" stroke="currentColor" />
                          <path d="M17.482 36.3501L17.6282 36.2963C17.8016 36.2918 17.9668 36.3962 18.0313 36.5678C18.1115 36.7812 18.0062 37.019 17.7951 37.1036C16.9959 37.3627 16.1602 37.4928 15.3199 37.489L15.3199 37.4889L15.3087 37.4891C13.7877 37.5163 12.3027 37.0225 11.1012 36.0896C10.0482 35.2437 9.26365 34.1088 8.84407 32.8243L8.84407 32.8243C8.42608 31.5449 8.38823 30.1718 8.73438 28.8709C8.80949 28.6709 9.02435 28.5586 9.23271 28.613C9.4397 28.6677 9.57115 28.8694 9.53966 29.0791C9.22838 30.2251 9.25658 31.4364 9.62036 32.5668L9.62037 32.5668C9.98674 33.7051 10.6782 34.7114 11.6093 35.4618L11.6093 35.4618L11.6137 35.4653C12.9188 36.4931 14.3614 36.722 15.4726 36.6942C16.5804 36.6665 17.3902 36.3838 17.482 36.3501Z" stroke="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_360_3376">
                            <rect width="52" height="52" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Fortificação Óssea') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-sm text-center font-light group-hover:text-primary-green-dark">Fortificação<br>osséa</span>
                  </div>
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Vitamina D')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Vitamina D') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class="group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_507_3402" fill="white">
                          <path d="M42.2186 5.35944L24.738 0.116787C24.2176 -0.0389291 23.6676 -0.0389291 23.1457 0.116787L5.66706 5.35944C4.48562 5.71416 3.69336 6.7813 3.69336 8.01405V20.46C3.69336 32.4192 10.8682 43.0159 21.9703 47.4568C23.2264 48.1811 24.6596 48.1811 25.9139 47.4568C37.0181 43.0161 44.1908 32.4192 44.1908 20.46L44.1915 8.01405C44.1915 6.7812 43.4 5.71415 42.2186 5.35944ZM42.5352 20.4605C42.5352 31.7389 35.7694 41.7305 25.2999 45.9177C24.4566 46.4447 23.429 46.4447 22.5857 45.9177C12.1159 41.7302 5.3504 31.738 5.3504 20.4605V8.01358C5.3504 7.51794 5.6685 7.08888 6.14416 6.94643L23.6228 1.70188C23.7275 1.67192 23.8351 1.65565 23.9428 1.65565C24.0504 1.65565 24.158 1.67044 24.2627 1.70188L41.7414 6.94643C42.2171 7.08884 42.5352 7.51827 42.5352 8.01358L42.5352 20.4605Z" />
                        </mask>
                        <path d="M42.2186 5.35944L42.7937 3.44392L42.7931 3.44374L42.2186 5.35944ZM24.738 0.116787L25.3126 -1.79891L25.3113 -1.79928L24.738 0.116787ZM23.1457 0.116787L22.5738 -1.79971L22.5711 -1.79889L23.1457 0.116787ZM5.66706 5.35944L5.09246 3.44376L5.09194 3.44392L5.66706 5.35944ZM21.9703 47.4568L22.9692 45.7242L22.8456 45.6529L22.7131 45.5999L21.9703 47.4568ZM25.9139 47.4568L25.1712 45.5998L25.038 45.6531L24.9138 45.7248L25.9139 47.4568ZM44.1908 20.46L42.1908 20.4599V20.46H44.1908ZM44.1915 8.01405L46.1915 8.01417V8.01405H44.1915ZM42.5352 20.4605H44.5352V20.4605L42.5352 20.4605ZM25.2999 45.9177L24.5572 44.0607L24.3914 44.127L24.2399 44.2217L25.2999 45.9177ZM22.5857 45.9177L23.6457 44.2217L23.4943 44.127L23.3284 44.0607L22.5857 45.9177ZM6.14416 6.94643L6.71794 8.86236L6.71895 8.86206L6.14416 6.94643ZM23.6228 1.70188L23.0725 -0.220909L23.0603 -0.217402L23.048 -0.21374L23.6228 1.70188ZM24.2627 1.70188L23.6874 3.61736L23.6879 3.61751L24.2627 1.70188ZM41.7414 6.94643L41.1666 8.86206L41.1678 8.86241L41.7414 6.94643ZM42.5352 8.01358H40.5352V8.01359L42.5352 8.01358ZM42.7931 3.44374L25.3126 -1.79891L24.1635 2.03249L41.6441 7.27514L42.7931 3.44374ZM25.3113 -1.79928C24.4164 -2.06706 23.4683 -2.06661 22.5738 -1.79971L23.7176 2.03328C23.8668 1.98876 24.0188 1.9892 24.1647 2.03285L25.3113 -1.79928ZM22.5711 -1.79889L5.09246 3.44376L6.24166 7.27512L23.7203 2.03247L22.5711 -1.79889ZM5.09194 3.44392C3.06338 4.05297 1.69336 5.89967 1.69336 8.01405H5.69336C5.69336 7.66292 5.90787 7.37534 6.24218 7.27497L5.09194 3.44392ZM1.69336 8.01405V20.46H5.69336V8.01405H1.69336ZM1.69336 20.46C1.69336 33.237 9.36614 44.5691 21.2275 49.3138L22.7131 45.5999C12.3704 41.4627 5.69336 31.6014 5.69336 20.46H1.69336ZM20.9713 49.1895C22.8453 50.2699 25.0404 50.2707 26.914 49.1888L24.9138 45.7248C24.2789 46.0915 23.6076 46.0922 22.9692 45.7242L20.9713 49.1895ZM26.6565 49.3138C38.5204 44.5693 46.1908 33.2368 46.1908 20.46H42.1908C42.1908 31.6017 35.5158 41.4629 25.1712 45.5998L26.6565 49.3138ZM46.1908 20.4601L46.1915 8.01417L42.1915 8.01394L42.1908 20.4599L46.1908 20.4601ZM46.1915 8.01405C46.1915 5.90043 44.8231 4.05321 42.7937 3.44392L41.6435 7.27497C41.977 7.37509 42.1915 7.66197 42.1915 8.01405H46.1915ZM40.5352 20.4605C40.5352 30.9211 34.2673 40.1772 24.5572 44.0607L26.0426 47.7747C37.2715 43.2838 44.5352 32.5567 44.5352 20.4605H40.5352ZM24.2399 44.2217C24.0451 44.3434 23.8405 44.3434 23.6457 44.2217L21.5257 47.6136C23.0176 48.5461 24.868 48.5461 26.3599 47.6137L24.2399 44.2217ZM23.3284 44.0607C13.618 40.177 7.3504 30.9202 7.3504 20.4605H3.3504C3.3504 32.5558 10.6138 43.2835 21.843 47.7746L23.3284 44.0607ZM7.3504 20.4605V8.01358H3.3504V20.4605H7.3504ZM7.3504 8.01358C7.3504 8.39877 7.09133 8.75054 6.71794 8.86236L5.57038 5.03051C4.24567 5.42723 3.3504 6.63711 3.3504 8.01358H7.3504ZM6.71895 8.86206L24.1976 3.61751L23.048 -0.21374L5.56937 5.03081L6.71895 8.86206ZM24.1732 3.62468C24.1142 3.64156 24.0365 3.65565 23.9428 3.65565V-0.344351C23.6338 -0.344351 23.3409 -0.297716 23.0725 -0.220909L24.1732 3.62468ZM23.9428 3.65565C23.8668 3.65565 23.7798 3.64511 23.6874 3.61736L24.838 -0.213587C24.5363 -0.30422 24.234 -0.344351 23.9428 -0.344351V3.65565ZM23.6879 3.61751L41.1666 8.86206L42.3162 5.03081L24.8375 -0.21374L23.6879 3.61751ZM41.1678 8.86241C40.7938 8.75044 40.5352 8.39861 40.5352 8.01358H44.5352C44.5352 6.63793 43.6403 5.42723 42.315 5.03045L41.1678 8.86241ZM40.5352 8.01359L40.5352 20.4605L44.5352 20.4605L44.5352 8.01357L40.5352 8.01359Z" fill="currentColor" mask="url(#path-1-inside-1_507_3402)" />
                        <g filter="url(#filter0_d_507_3402)">
                          <path d="M15 27.7952L18.4114 15.0002C25.7374 14.9887 31.5697 15.4924 29.6203 22.3819C27.671 29.2715 22.4205 27.9582 15 27.7952Z" stroke="currentColor" stroke-width="3" shape-rendering="crispEdges" />
                        </g>
                        <path d="M25.932 6.8575C25.9011 6.86313 25.8701 6.87156 25.842 6.88C25.5073 6.95594 25.2711 7.25688 25.2795 7.6V11.92C25.2767 12.1788 25.4117 12.4206 25.6367 12.5528C25.8617 12.6822 26.1373 12.6822 26.3623 12.5528C26.5873 12.4206 26.7223 12.1788 26.7195 11.92V7.6C26.728 7.39188 26.6436 7.19219 26.4945 7.05156C26.3426 6.90813 26.1373 6.83781 25.932 6.8575ZM34.102 11.0875C33.9389 11.11 33.787 11.1916 33.6745 11.3125L30.6145 14.3725C30.4008 14.5469 30.3023 14.8253 30.3642 15.0953C30.4261 15.3625 30.637 15.5734 30.9042 15.6353C31.1742 15.6972 31.4526 15.5988 31.627 15.385L34.687 12.325C34.912 12.1113 34.9767 11.7766 34.8445 11.4953C34.7095 11.2113 34.4114 11.0481 34.102 11.0875ZM32.877 20.28C32.4805 20.3363 32.202 20.7047 32.2583 21.1013C32.3145 21.4978 32.683 21.7762 33.0795 21.72H37.3995C37.6583 21.7228 37.9001 21.5878 38.0323 21.3628C38.1617 21.1378 38.1617 20.8622 38.0323 20.6372C37.9001 20.4122 37.6583 20.2772 37.3995 20.28H33.0795C33.057 20.28 33.0345 20.28 33.012 20.28C32.9895 20.28 32.967 20.28 32.9445 20.28C32.922 20.28 32.8995 20.28 32.877 20.28ZM30.9745 25.39C30.7045 25.4378 30.488 25.6347 30.412 25.8963C30.3361 26.1606 30.4148 26.4419 30.6145 26.6275L33.6745 29.6875C33.8489 29.9013 34.1273 29.9997 34.3973 29.9378C34.6645 29.8759 34.8755 29.665 34.9373 29.3978C34.9992 29.1278 34.9008 28.8494 34.687 28.675L31.627 25.615C31.492 25.4716 31.3064 25.3928 31.1095 25.39C31.087 25.39 31.0645 25.39 31.042 25.39C31.0195 25.39 30.997 25.39 30.9745 25.39Z" fill="currentColor" />
                        <defs>
                          <filter
                            id="filter0_d_507_3402"
                            x="5.05859"
                            y="9.5"
                            width="34.4414"
                            height="32.0001"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.25098 0 0 0 0 0.109804 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_3402" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_3402" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Vitamina D') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Vitamina D</span>
                  </div>
                  <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Relaxante')">
                    <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                      <svg
                        :class="isEffectSelected('Relaxante') ? 'text-primary-green-dark' : 'text-dark-normal'"
                        class="group-hover:text-primary-green-dark"
                        width="52"
                        height="52"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8623 11.1876C29.2864 12.0997 28.6013 15.4222 30.6079 17.2718C30.8415 17.4871 31.2721 17.7755 31.5647 17.9128C32.0296 18.1306 32.2149 18.1621 33.0342 18.1621C33.8649 18.1621 34.0369 18.1321 34.544 17.8977C35.268 17.5631 35.99 16.8379 36.3344 16.0996C36.5667 15.6016 36.5967 15.4298 36.5967 14.5996C36.5967 13.7649 36.5672 13.5982 36.3273 13.0788C36.0429 12.4632 35.3366 11.7059 34.777 11.4165C33.8949 10.9604 32.7567 10.8709 31.8623 11.1876ZM39.2611 15.3481C39.1281 15.4203 37.6551 16.6998 35.9879 18.1912L32.9564 20.9029L32.544 20.5881C31.9933 20.1677 31.2543 19.9611 30.462 20.0058C29.306 20.0712 28.9917 20.2931 25.4303 23.5585C23.6827 25.1608 22.2026 26.4936 22.1411 26.5202C22.0796 26.5469 19.3374 24.1573 16.0474 21.2099C12.7573 18.2626 9.91584 15.7734 9.73293 15.6785C8.85009 15.2202 7.94372 15.3967 7.16109 16.1792C6.41934 16.921 6.27562 17.7712 6.75778 18.5649C6.91012 18.8158 21.1251 31.6472 22.2931 32.5882C23.0031 33.1602 23.8109 33.285 24.5855 32.9424C24.8656 32.8185 26.2424 31.6206 28.8212 29.2574C30.9226 27.3315 32.7555 25.6715 32.8943 25.5684C33.0333 25.4653 35.048 23.6804 37.3716 21.6018C42.1092 17.3641 42.0533 17.4286 41.7957 16.501C41.6708 16.0515 41.3075 15.6237 40.8543 15.3924C40.4291 15.1756 39.6199 15.153 39.2611 15.3481ZM0.392062 16.4046L0 16.7559L9.79078 25.9903C15.1757 31.0692 19.8241 35.4032 20.1204 35.6216C22.1323 37.1038 24.8634 36.9883 27.0404 35.3289C27.2948 35.1349 32.1121 30.9458 37.7455 26.0197L47.988 17.0632L47.5893 16.7069C47.2029 16.3617 47.1845 16.3558 47.0029 16.5167C44.0747 19.1124 26.5162 34.3911 26.1741 34.6411C25.9078 34.8359 25.4017 35.13 25.0495 35.2946C24.4477 35.576 24.3443 35.5942 23.3311 35.5968C22.1435 35.5999 21.7096 35.4708 20.8611 34.8618C20.6363 34.7004 16.0545 30.4129 10.6792 25.334C5.30409 20.2551 0.878718 16.0892 0.84525 16.0765C0.811687 16.0637 0.607781 16.2114 0.392062 16.4046Z" fill="currentColor" />
                      </svg>
                    </button>
                    <span :class="isEffectSelected('Relaxante') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Relaxante</span>
                  </div>
                </ul>
              </nav>
            </div>
          </div>

          <div v-if="pending">
            <p>Loading...</p>
          </div>
          <main v-else class="w-full lg:max-w-6xl px-4 sm:px-8 pt-2 lg:mt-8 grid grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-16 pb-28 relative">
            <atoms-loader-label :show="loaderProduct">
              <template #content-label>
                <span>Buscando seus produtos...</span>
              </template>
            </atoms-loader-label>
            <div v-for="(produto, index) in allProducts.produtos" :key="index">
              <a :href="`produto/${produto.id}`">
                <organisms-card-product :produto="produto" />
              </a>
            </div>
            <div v-if="allProducts.produtos.length > 0" class="flex flex-col justify-start items-center w-full col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-3 mt-7 lg:mt-0 relative">
              <span>Visualizando {{ allProducts.produtos.length }} de {{ allProducts.quantidadeProdutosPeloFiltro }}</span>
              <atoms-button-show-more-products @handle-click-see-more-product="loadMoreProductsPagination(allProducts.produtos.length === allProducts.quantidadeProdutosPeloFiltro)" />
              <atoms-simple-loader-label :show="loaderProductPagination" />
            </div>
          </main>
        </div>
      </div>
    </section>
    <AtomsModal :show="showModal">
      <template #header-modal>
        <h3 class="text-2xl font-bold">
          {{ currentModalFilter }}
        </h3>
      </template>
      <template #btn-close-modal>
        <button class="close-btn p-3" @click="showModal = !showModal">
          <XIcon class="h-6 w-6 text-current relative z-10" />
        </button>
      </template>
      <template #content-modal-category>
        <ul v-if="currentModalFilter === 'Categorias'" class="mb-7 text-2xl font-light flex flex-col gap-3 text-dark-normal">
          <li :class="isCategorySelected('Vitaminas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Vitaminas')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-green-dark" />
              <span>
                Vitaminas
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Vitaminas')" class="h-8 w-8 text-primary-green-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Proteínas') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Proteínas')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-lemon-dark" />
              <span>
                Proteínas
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Proteínas')" class="h-8 w-8 text-primary-lemon-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Minerais') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Minerais')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-secondary-orange-medium" />
              <span>
                Minerais
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Minerais')" class="h-8 w-8 text-secondary-orange-dark relative z-10" />
            </div>
          </li>
          <li :class="isCategorySelected('Ômega-3') ? 'bg-primary-lemon-light bg-opacity-60' : ''" class="px-7 py-3 text-dark-normal flex gap-16" @click="toggleSelectedCategory('Ômega-3')">
            <div class="flex items-center gap-4">
              <div class="w-8 h-2 rounded-full bg-primary-olivia-dark" />
              <span>
                Ômega-3
              </span>
            </div>
            <div>
              <CheckIcon v-if="isCategorySelected('Ômega-3')" class="h-8 w-8 text-primary-olivia-dark relative z-10" />
            </div>
          </li>
          <li class="px-7 py-3 text-dark-normal flex items-center justify-center" @click="removeFilter">
            <span>
              Listar todas
            </span>
          </li>
        </ul>
        <nav v-else-if="currentModalFilter === 'Efeitos'" style="width: calc(100vw - 64px)">
          <ul class="grid grid-cols-2 gap-2 py-4 mb-7 text-2xl font-light text-dark-normal">
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Imunidade')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Imunidade') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class=" group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M42.0741 5.8381L24.5947 0.595804L42.0741 5.8381ZM42.0741 5.8381L42.074 5.83833C43.0437 6.12945 43.6915 7.00162 43.6915 8.01402L43.6908 20.46C43.6908 32.2148 36.6425 42.6278 25.7282 46.9926L25.6949 47.0059L25.6639 47.0238C24.5644 47.6587 23.3217 47.6588 22.22 47.0237L22.1891 47.0059L22.156 46.9926C11.2438 42.6276 4.19336 32.2148 4.19336 20.46V8.01405C4.19336 7.0017 4.84119 6.12945 5.81084 5.83832L23.2887 0.59591C23.2887 0.595901 23.2888 0.595892 23.2888 0.595883C23.7173 0.468023 24.1677 0.468112 24.5944 0.595712L42.0741 5.8381ZM23.4853 1.22119L23.4852 1.22115L23.4791 1.22298L6.00072 6.46745C6.00063 6.46748 6.00055 6.4675 6.00046 6.46753C5.31268 6.67362 4.8504 7.29782 4.8504 8.01358V20.4605C4.8504 31.9281 11.7232 42.0932 22.3602 46.3659C23.3451 46.962 24.5405 46.962 25.5254 46.3659C36.1621 42.0935 43.0352 31.929 43.0352 20.4605L43.0352 8.01358C43.0352 7.29829 42.573 6.67361 41.8851 6.46753C41.885 6.4675 41.8849 6.46747 41.8848 6.46744L24.4066 1.22302C24.2526 1.17678 24.0963 1.15565 23.9428 1.15565C23.7848 1.15565 23.6308 1.17951 23.4853 1.22119Z" stroke="currentColor" />
                  <path d="M28.2482 15.9068V16.4068H28.7482H33.8851C34.0663 16.4068 34.2137 16.554 34.2137 16.7353V24.6892C34.2137 24.8702 34.0662 25.0177 33.8851 25.0177H28.7482H28.2482V25.5177V30.6546C28.2482 30.8356 28.1007 30.9831 27.9197 30.9831H19.9658C19.7848 30.9831 19.6373 30.8356 19.6373 30.6546V25.5177V25.0177H19.1373H14.0004C13.8194 25.0177 13.6719 24.8702 13.6719 24.6892V16.7353C13.6719 16.5543 13.8194 16.4068 14.0004 16.4068H19.1373H19.6373V15.9068V10.7699C19.6373 10.5888 19.7848 10.4413 19.9658 10.4413H27.9197C28.1007 10.4413 28.2482 10.5888 28.2482 10.7699V15.9068ZM33.0566 24.3607H33.5566V23.8607V17.5638V17.0638H33.0566H27.9197C27.7387 17.0638 27.5912 16.9163 27.5912 16.7353V11.5984V11.0984H27.0912H20.7944H20.2944V11.5984V16.7353C20.2944 16.9163 20.1468 17.0638 19.9658 17.0638H14.8289H14.3289V17.5638V23.8607V24.3607H14.8289H19.9658C20.1468 24.3607 20.2944 24.5082 20.2944 24.6892V29.8261V30.3261H20.7944H27.0912H27.5912V29.8261V24.6892C27.5912 24.5082 27.7387 24.3607 27.9197 24.3607H33.0566Z" stroke="currentColor" />
                </svg>
              </button>
              <span :class="isEffectSelected('Imunidade') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Imunidade</span>
            </div>
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Fortalecimento Muscular')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Fortalecimento Muscular') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class="group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_367_3421)">
                    <path d="M46.4997 29C46.4997 29 40.9997 23 36.9997 22.5C32.9997 22 31.4997 23.5 29.4997 24M26.9997 26.5C26.9997 26.5 28.1329 24.5467 29.4997 24M29.4997 24C26.5708 22.5941 25.7059 21.7706 22.9997 21.5C20.4442 21.2445 16.4997 22.5 16.4997 22.5M16.4997 22.5C16.4997 22.5 17.9997 16.5 17.9997 14C17.9997 11.5 21.9997 8.99999 21.9997 8.99999L22.9997 8.49999M16.4997 22.5L15.4997 25M22.9997 8.49999L22.4997 6.49999M22.9997 8.49999C22.9997 8.49999 23.9728 10.2867 24.9997 11C26.014 11.7045 26.88 11.479 27.9997 12C29.032 12.4804 29.3962 13.2195 30.4997 13.5C31.4459 13.7406 32.4781 13.8253 32.9997 13C33.4252 12.3267 32.9997 11.5 32.9997 11.5M30.9997 6.49999C30.9997 6.49999 29.4997 6.49999 29.4997 8.49999C29.4997 10.5 32.4997 11 32.4997 11L32.9997 11.5M32.9997 11.5C32.9997 11.5 34.1045 10.3928 34.4997 9.5C35.211 7.89302 35.0375 6.67305 34.4997 4.99999C34.2325 4.16865 33.9997 3.49999 33.4997 2.99999C32.9997 2.49999 27.1704 1.17169 22.9997 0.999994C21.8291 0.951805 20.9997 0.999993 19.9997 0.999994C18.9997 0.999995 17.3233 4.10909 15.4997 5.99999C12.7185 8.88383 10.4997 10.5 7.99968 13C5.49968 15.5 4.69561 18.0423 2.99968 21.5C2.15281 23.2266 0.522274 23.6572 1.00006 27C1.47785 30.3428 7.74403 32.5724 12.4997 35.5C19.0541 39.5349 30.1769 38.6682 30.9997 39C31.8225 39.3317 34.9885 47.1576 36.5 47M37.4997 37C37.4997 37 39.2512 39.8814 40.9997 41C42.717 42.0986 45.9997 42.5 45.9997 42.5M29.9997 32C29.9997 32 24.5215 34.0412 20.9997 33.5C17.5473 32.9694 12.9997 29.5 12.9997 29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_367_3421">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span :class="isEffectSelected('Fortalecimento Muscular') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-sm text-center font-light group-hover:text-primary-green-dark">Fortalecimento<br>muscular</span>
            </div>
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Memória')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Memória') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class="group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.7878 45.0001C17.7589 41.6447 16.2067 39.1433 14.1312 37.4958C11.0178 35.0246 6.07108 36.5605 4.24382 34.0116C2.41655 31.4626 5.52402 26.7752 6.61447 24.0094C7.70492 21.2437 2.43488 20.2657 3.05015 19.4805C3.46035 18.9571 6.12346 17.4465 11.0396 14.949C12.4364 6.983 17.5959 3 26.5182 3C39.9014 3 45.0001 14.3463 45.0001 21.5629C45.0001 28.7795 38.8262 36.5541 30.0314 38.2304C29.2449 39.3757 30.3792 41.6323 33.4341 45.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.2774 14.0249C18.5914 16.6858 18.7955 18.5544 19.8897 19.6303C20.9839 20.7064 22.8488 21.41 25.4844 21.7413C24.8865 25.1734 25.6156 26.7836 27.6716 26.5717C29.7277 26.3598 30.963 25.5054 31.3778 24.0086C34.5911 24.9118 36.3327 24.156 36.6024 21.7413C37.0072 18.1192 35.054 15.2298 34.2532 15.2298C33.4524 15.2298 31.3778 15.1323 31.3778 14.0249C31.3778 12.9174 28.9544 12.2917 26.7672 12.2917C24.5801 12.2917 25.8964 10.8174 22.893 11.3999C20.8908 11.7882 19.6856 12.6632 19.2774 14.0249Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span :class="isEffectSelected('Memória') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Memória</span>
            </div>
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Fortificação Óssea')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Fortificação Óssea') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class="group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_360_3376)">
                    <path d="M39.974 45.415L40.2425 45.4272L39.8371 45.5039C39.8666 45.7034 39.7501 45.8949 39.5603 45.9606L39.2237 46.077V46.1071L35.719 47.6462L35.6762 47.6598H35.6527L35.5925 47.675C35.5297 47.6908 35.4647 47.6917 35.4017 47.6775C35.3722 47.6679 35.3441 47.6549 35.3178 47.6391C35.2945 47.6223 35.2733 47.6035 35.2547 47.5833C35.2355 47.559 35.2191 47.5328 35.2061 47.5057C32.014 40.2873 29.56 35.5213 29.3439 35.1018L29.3403 35.0949L29.3365 35.0881C29.1019 34.6654 28.8126 34.2753 28.4755 33.9283L28.4689 33.9215L28.4621 33.915C27.6812 33.1696 26.6954 32.6746 25.6317 32.4935C24.7187 32.2697 23.9196 32.0596 23.3985 31.2799C23.0037 30.6242 22.8566 29.849 22.9843 29.0945L22.9843 29.0945C23.1112 28.3451 23.501 27.6657 24.0831 27.1776C24.9587 26.604 26.0698 26.5246 27.0186 26.9698L27.6951 27.2873L27.7305 26.5409C27.7827 25.4402 28.1611 24.3799 28.8169 23.4942C29.9451 22.204 31.5891 21.4827 33.3028 21.5269L33.319 21.5273L33.3353 21.5267C34.6031 21.477 35.8242 22.007 36.6532 22.966C37.0468 23.5184 37.2888 24.1643 37.3556 24.8398C37.4226 25.5159 37.3109 26.1975 37.0326 26.8172C36.7372 27.3518 36.3059 27.7987 35.7818 28.1118L35.7812 28.1121C35.2975 28.402 34.8971 28.8123 34.6199 29.304L34.6059 29.3287L34.5948 29.3549C34.2762 30.1086 34.2107 30.9455 34.4082 31.7397L34.4141 31.7633L34.4222 31.7862C35.8529 35.8202 37.6412 40.3904 39.8323 45.3636C39.833 45.379 39.833 45.3941 39.8323 45.4085L39.8525 45.4094C39.8598 45.4259 39.8671 45.4424 39.8744 45.4589L39.974 45.415ZM24.5122 27.909C24.1303 28.275 23.8802 28.757 23.8005 29.2798L23.8005 29.2799C23.7207 29.8024 23.8159 30.3373 24.0711 30.8005L24.1889 30.7702L24.0918 30.8343C24.2788 31.1174 24.5398 31.2846 24.83 31.4032C25.1061 31.5159 25.4498 31.6002 25.8353 31.6919L25.8507 31.6956L25.8663 31.6983C27.0725 31.9056 28.1907 32.4657 29.0786 33.3078C29.4561 33.6938 29.7822 34.1264 30.0485 34.5954L30.081 34.6611L30.0843 34.6676L30.0877 34.6741C30.1847 34.8563 32.5015 39.3724 35.6148 46.2837L35.8181 46.7352L36.2715 46.5362L38.4375 45.5859L38.8901 45.3873L38.6968 44.9325C36.6831 40.1936 34.9801 35.827 33.6397 31.9601L33.6395 31.9594C33.6315 31.9366 33.626 31.9143 33.6227 31.8927L33.6201 31.8761L33.6165 31.8597C33.399 30.886 33.4987 29.8681 33.9009 28.9555C34.2221 28.3614 34.6887 27.8586 35.2571 27.4944C35.6706 27.2542 36.0147 26.9114 36.2565 26.4983L36.2726 26.4708L36.285 26.4414C36.6953 25.4767 36.5875 24.3696 35.9993 23.5016L35.9763 23.4676L35.948 23.4378C35.2586 22.7118 34.2864 22.3239 33.2868 22.3762C31.8372 22.3171 30.4375 22.9166 29.4806 24.0087L29.3566 24.1502V24.1698C28.8341 24.8932 28.6309 25.7698 28.5641 26.5012C28.4926 27.2826 28.5706 27.9684 28.6382 28.2637C28.6791 28.4497 28.5893 28.6399 28.4199 28.7262L28.4197 28.7263C28.2498 28.813 28.0426 28.7737 27.9164 28.6312C27.4243 28.0718 26.8144 27.731 26.2208 27.5993C25.6382 27.47 25.0203 27.5343 24.5643 27.8655L24.5368 27.8855L24.5122 27.909Z" stroke="currentColor" />
                    <path d="M25.6013 23.7186C24.6295 25.1372 23.0732 26.046 21.3598 26.1943L21.3598 26.1942L21.3477 26.1955C21.1498 26.2175 20.9509 26.2292 20.7509 26.2313L20.7355 26.2314L20.7201 26.2325C19.4975 26.3209 18.3133 25.7843 17.5734 24.807C16.8345 23.8311 16.6391 22.5482 17.0536 21.3967C17.2715 20.8353 17.6328 20.3402 18.1016 19.9609C18.5435 19.6285 18.8937 19.1888 19.1181 18.6828L19.1319 18.6515L19.1414 18.6186C19.3675 17.8342 19.3338 16.9974 19.0447 16.2337L19.0369 16.213L19.0273 16.1931C17.152 12.3126 14.8275 7.97918 12.1061 3.27605V3.23114L12.0856 3.1617C12.0318 2.98001 12.1074 2.78419 12.2702 2.68553L15.8698 0.559069L15.8698 0.559074L15.8718 0.557866C15.9774 0.494785 16.1062 0.482638 16.2224 0.524568L16.2884 0.56576L16.3672 0.614967L16.3709 0.623028L16.3817 0.646302L16.3947 0.668354C18.4935 4.20509 20.3203 7.10881 21.6225 9.13428C22.2736 10.1471 22.7936 10.9402 23.1506 11.4827C23.2191 11.5867 23.2813 11.6812 23.3373 11.7661C23.4277 11.9033 23.5017 12.0156 23.5589 12.103C23.5819 12.1382 23.6018 12.1687 23.6187 12.1947V12.2121L23.7111 12.3421C24.6339 13.6406 26.1259 14.4145 27.718 14.4212C28.6421 14.5257 29.4616 14.6473 30.0611 15.3552C30.5332 15.9604 30.7723 16.7147 30.7342 17.4814L30.7342 17.4816C30.6968 18.2424 30.3891 18.9643 29.867 19.518C29.0632 20.1844 27.9717 20.3883 26.9805 20.0556L26.27 19.8171L26.3226 20.5647C26.4 21.6645 26.1488 22.7623 25.6013 23.7186ZM25.9122 18.4781L25.9194 18.4845C26.4755 18.9804 27.1224 19.2449 27.7273 19.3048C28.3205 19.3636 28.9257 19.2275 29.3387 18.848L29.3649 18.8239L29.3875 18.7964C29.7223 18.3869 29.9126 17.8788 29.9291 17.3502L29.9291 17.3497C29.9451 16.8215 29.7869 16.302 29.4772 15.8726L29.465 15.8557L29.4515 15.8399C29.2308 15.5821 28.954 15.4462 28.6507 15.3616C28.3634 15.2814 28.0123 15.2373 27.618 15.19L27.5996 15.1878L27.5811 15.187C26.3614 15.1316 25.1849 14.7169 24.2004 13.9946C23.7673 13.6567 23.3806 13.2634 23.0497 12.8247L23.0498 12.8247L23.0457 12.8195L23.0091 12.7723C22.9967 12.7541 22.9538 12.6909 22.8781 12.5782C22.7889 12.4455 22.6587 12.2507 22.4908 11.9972C22.1549 11.4902 21.6683 10.7485 21.0586 9.79997C19.839 7.90289 18.1269 5.17894 16.1419 1.85092L15.8845 1.41936L15.4542 1.6789L13.4172 2.90761L12.9973 3.16091L13.2424 3.58566C15.8052 8.02661 18.0171 12.1605 19.802 15.8399L19.8021 15.8402C19.814 15.8647 19.8236 15.8894 19.8312 15.9146L19.8348 15.9265L19.839 15.9382C20.1769 16.8877 20.1993 17.9208 19.9024 18.8837C19.6541 19.513 19.2496 20.0691 18.7273 20.4986C18.3441 20.7879 18.0433 21.1716 17.8529 21.6117L17.8405 21.6404L17.8318 21.6703C17.5384 22.6775 17.7769 23.7642 18.4641 24.5563L18.4896 24.5857L18.5194 24.6109C19.2872 25.2586 20.3005 25.5367 21.2906 25.3716C22.6428 25.256 23.8816 24.5824 24.713 23.5195H24.7394L24.8861 23.2835C25.4623 22.3568 25.5257 21.2608 25.4669 20.4468C25.4369 20.0326 25.3739 19.6729 25.3184 19.4162C25.3106 19.3802 25.3029 19.3462 25.2955 19.3142L25.3614 19.2572L25.2506 18.937C25.1886 18.7579 25.2551 18.5594 25.4129 18.4535L25.4131 18.4534C25.5666 18.3503 25.7697 18.3607 25.9122 18.4781Z" stroke="currentColor" />
                    <path d="M15.3187 30.5091L15.32 30.5104C16.2126 31.3424 17.3748 31.8201 18.5893 31.8584L18.5974 31.8685L18.8467 31.86C18.9628 31.856 19.0755 31.8989 19.1595 31.9789C19.2427 32.0582 19.291 32.168 19.2931 32.284C19.2938 32.5119 19.1115 32.6985 18.8836 32.7033L18.836 32.7033L18.8346 32.7033C17.3267 32.7074 15.8734 32.1406 14.7664 31.1168C13.6596 30.0932 12.9817 28.6884 12.8683 27.1849C12.8518 26.9562 13.0223 26.7571 13.2502 26.7379C13.4807 26.7264 13.6794 26.8981 13.7013 27.1277C13.7991 28.4171 14.376 29.6238 15.3187 30.5091Z" stroke="currentColor" />
                    <path d="M17.482 36.3501L17.6282 36.2963C17.8016 36.2918 17.9668 36.3962 18.0313 36.5678C18.1115 36.7812 18.0062 37.019 17.7951 37.1036C16.9959 37.3627 16.1602 37.4928 15.3199 37.489L15.3199 37.4889L15.3087 37.4891C13.7877 37.5163 12.3027 37.0225 11.1012 36.0896C10.0482 35.2437 9.26365 34.1088 8.84407 32.8243L8.84407 32.8243C8.42608 31.5449 8.38823 30.1718 8.73438 28.8709C8.80949 28.6709 9.02435 28.5586 9.23271 28.613C9.4397 28.6677 9.57115 28.8694 9.53966 29.0791C9.22838 30.2251 9.25658 31.4364 9.62036 32.5668L9.62037 32.5668C9.98674 33.7051 10.6782 34.7114 11.6093 35.4618L11.6093 35.4618L11.6137 35.4653C12.9188 36.4931 14.3614 36.722 15.4726 36.6942C16.5804 36.6665 17.3902 36.3838 17.482 36.3501Z" stroke="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_360_3376">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span :class="isEffectSelected('Fortificação Óssea') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-sm text-center font-light group-hover:text-primary-green-dark">Fortificação<br>osséa</span>
            </div>
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Vitamina D')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Vitamina D') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class="group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_507_3402" fill="white">
                    <path d="M42.2186 5.35944L24.738 0.116787C24.2176 -0.0389291 23.6676 -0.0389291 23.1457 0.116787L5.66706 5.35944C4.48562 5.71416 3.69336 6.7813 3.69336 8.01405V20.46C3.69336 32.4192 10.8682 43.0159 21.9703 47.4568C23.2264 48.1811 24.6596 48.1811 25.9139 47.4568C37.0181 43.0161 44.1908 32.4192 44.1908 20.46L44.1915 8.01405C44.1915 6.7812 43.4 5.71415 42.2186 5.35944ZM42.5352 20.4605C42.5352 31.7389 35.7694 41.7305 25.2999 45.9177C24.4566 46.4447 23.429 46.4447 22.5857 45.9177C12.1159 41.7302 5.3504 31.738 5.3504 20.4605V8.01358C5.3504 7.51794 5.6685 7.08888 6.14416 6.94643L23.6228 1.70188C23.7275 1.67192 23.8351 1.65565 23.9428 1.65565C24.0504 1.65565 24.158 1.67044 24.2627 1.70188L41.7414 6.94643C42.2171 7.08884 42.5352 7.51827 42.5352 8.01358L42.5352 20.4605Z" />
                  </mask>
                  <path d="M42.2186 5.35944L42.7937 3.44392L42.7931 3.44374L42.2186 5.35944ZM24.738 0.116787L25.3126 -1.79891L25.3113 -1.79928L24.738 0.116787ZM23.1457 0.116787L22.5738 -1.79971L22.5711 -1.79889L23.1457 0.116787ZM5.66706 5.35944L5.09246 3.44376L5.09194 3.44392L5.66706 5.35944ZM21.9703 47.4568L22.9692 45.7242L22.8456 45.6529L22.7131 45.5999L21.9703 47.4568ZM25.9139 47.4568L25.1712 45.5998L25.038 45.6531L24.9138 45.7248L25.9139 47.4568ZM44.1908 20.46L42.1908 20.4599V20.46H44.1908ZM44.1915 8.01405L46.1915 8.01417V8.01405H44.1915ZM42.5352 20.4605H44.5352V20.4605L42.5352 20.4605ZM25.2999 45.9177L24.5572 44.0607L24.3914 44.127L24.2399 44.2217L25.2999 45.9177ZM22.5857 45.9177L23.6457 44.2217L23.4943 44.127L23.3284 44.0607L22.5857 45.9177ZM6.14416 6.94643L6.71794 8.86236L6.71895 8.86206L6.14416 6.94643ZM23.6228 1.70188L23.0725 -0.220909L23.0603 -0.217402L23.048 -0.21374L23.6228 1.70188ZM24.2627 1.70188L23.6874 3.61736L23.6879 3.61751L24.2627 1.70188ZM41.7414 6.94643L41.1666 8.86206L41.1678 8.86241L41.7414 6.94643ZM42.5352 8.01358H40.5352V8.01359L42.5352 8.01358ZM42.7931 3.44374L25.3126 -1.79891L24.1635 2.03249L41.6441 7.27514L42.7931 3.44374ZM25.3113 -1.79928C24.4164 -2.06706 23.4683 -2.06661 22.5738 -1.79971L23.7176 2.03328C23.8668 1.98876 24.0188 1.9892 24.1647 2.03285L25.3113 -1.79928ZM22.5711 -1.79889L5.09246 3.44376L6.24166 7.27512L23.7203 2.03247L22.5711 -1.79889ZM5.09194 3.44392C3.06338 4.05297 1.69336 5.89967 1.69336 8.01405H5.69336C5.69336 7.66292 5.90787 7.37534 6.24218 7.27497L5.09194 3.44392ZM1.69336 8.01405V20.46H5.69336V8.01405H1.69336ZM1.69336 20.46C1.69336 33.237 9.36614 44.5691 21.2275 49.3138L22.7131 45.5999C12.3704 41.4627 5.69336 31.6014 5.69336 20.46H1.69336ZM20.9713 49.1895C22.8453 50.2699 25.0404 50.2707 26.914 49.1888L24.9138 45.7248C24.2789 46.0915 23.6076 46.0922 22.9692 45.7242L20.9713 49.1895ZM26.6565 49.3138C38.5204 44.5693 46.1908 33.2368 46.1908 20.46H42.1908C42.1908 31.6017 35.5158 41.4629 25.1712 45.5998L26.6565 49.3138ZM46.1908 20.4601L46.1915 8.01417L42.1915 8.01394L42.1908 20.4599L46.1908 20.4601ZM46.1915 8.01405C46.1915 5.90043 44.8231 4.05321 42.7937 3.44392L41.6435 7.27497C41.977 7.37509 42.1915 7.66197 42.1915 8.01405H46.1915ZM40.5352 20.4605C40.5352 30.9211 34.2673 40.1772 24.5572 44.0607L26.0426 47.7747C37.2715 43.2838 44.5352 32.5567 44.5352 20.4605H40.5352ZM24.2399 44.2217C24.0451 44.3434 23.8405 44.3434 23.6457 44.2217L21.5257 47.6136C23.0176 48.5461 24.868 48.5461 26.3599 47.6137L24.2399 44.2217ZM23.3284 44.0607C13.618 40.177 7.3504 30.9202 7.3504 20.4605H3.3504C3.3504 32.5558 10.6138 43.2835 21.843 47.7746L23.3284 44.0607ZM7.3504 20.4605V8.01358H3.3504V20.4605H7.3504ZM7.3504 8.01358C7.3504 8.39877 7.09133 8.75054 6.71794 8.86236L5.57038 5.03051C4.24567 5.42723 3.3504 6.63711 3.3504 8.01358H7.3504ZM6.71895 8.86206L24.1976 3.61751L23.048 -0.21374L5.56937 5.03081L6.71895 8.86206ZM24.1732 3.62468C24.1142 3.64156 24.0365 3.65565 23.9428 3.65565V-0.344351C23.6338 -0.344351 23.3409 -0.297716 23.0725 -0.220909L24.1732 3.62468ZM23.9428 3.65565C23.8668 3.65565 23.7798 3.64511 23.6874 3.61736L24.838 -0.213587C24.5363 -0.30422 24.234 -0.344351 23.9428 -0.344351V3.65565ZM23.6879 3.61751L41.1666 8.86206L42.3162 5.03081L24.8375 -0.21374L23.6879 3.61751ZM41.1678 8.86241C40.7938 8.75044 40.5352 8.39861 40.5352 8.01358H44.5352C44.5352 6.63793 43.6403 5.42723 42.315 5.03045L41.1678 8.86241ZM40.5352 8.01359L40.5352 20.4605L44.5352 20.4605L44.5352 8.01357L40.5352 8.01359Z" fill="currentColor" mask="url(#path-1-inside-1_507_3402)" />
                  <g filter="url(#filter0_d_507_3402)">
                    <path d="M15 27.7952L18.4114 15.0002C25.7374 14.9887 31.5697 15.4924 29.6203 22.3819C27.671 29.2715 22.4205 27.9582 15 27.7952Z" stroke="currentColor" stroke-width="3" shape-rendering="crispEdges" />
                  </g>
                  <path d="M25.932 6.8575C25.9011 6.86313 25.8701 6.87156 25.842 6.88C25.5073 6.95594 25.2711 7.25688 25.2795 7.6V11.92C25.2767 12.1788 25.4117 12.4206 25.6367 12.5528C25.8617 12.6822 26.1373 12.6822 26.3623 12.5528C26.5873 12.4206 26.7223 12.1788 26.7195 11.92V7.6C26.728 7.39188 26.6436 7.19219 26.4945 7.05156C26.3426 6.90813 26.1373 6.83781 25.932 6.8575ZM34.102 11.0875C33.9389 11.11 33.787 11.1916 33.6745 11.3125L30.6145 14.3725C30.4008 14.5469 30.3023 14.8253 30.3642 15.0953C30.4261 15.3625 30.637 15.5734 30.9042 15.6353C31.1742 15.6972 31.4526 15.5988 31.627 15.385L34.687 12.325C34.912 12.1113 34.9767 11.7766 34.8445 11.4953C34.7095 11.2113 34.4114 11.0481 34.102 11.0875ZM32.877 20.28C32.4805 20.3363 32.202 20.7047 32.2583 21.1013C32.3145 21.4978 32.683 21.7762 33.0795 21.72H37.3995C37.6583 21.7228 37.9001 21.5878 38.0323 21.3628C38.1617 21.1378 38.1617 20.8622 38.0323 20.6372C37.9001 20.4122 37.6583 20.2772 37.3995 20.28H33.0795C33.057 20.28 33.0345 20.28 33.012 20.28C32.9895 20.28 32.967 20.28 32.9445 20.28C32.922 20.28 32.8995 20.28 32.877 20.28ZM30.9745 25.39C30.7045 25.4378 30.488 25.6347 30.412 25.8963C30.3361 26.1606 30.4148 26.4419 30.6145 26.6275L33.6745 29.6875C33.8489 29.9013 34.1273 29.9997 34.3973 29.9378C34.6645 29.8759 34.8755 29.665 34.9373 29.3978C34.9992 29.1278 34.9008 28.8494 34.687 28.675L31.627 25.615C31.492 25.4716 31.3064 25.3928 31.1095 25.39C31.087 25.39 31.0645 25.39 31.042 25.39C31.0195 25.39 30.997 25.39 30.9745 25.39Z" fill="currentColor" />
                  <defs>
                    <filter
                      id="filter0_d_507_3402"
                      x="5.05859"
                      y="9.5"
                      width="34.4414"
                      height="32.0001"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.25098 0 0 0 0 0.109804 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_3402" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_3402" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </button>
              <span :class="isEffectSelected('Vitamina D') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Vitamina D</span>
            </div>
            <div class="flex flex-col gap-2 justify-start items-center cursor-pointer group" @click="toggleSelectedEffect('Relaxante')">
              <button class="bg-complement-background-soft shadow-xl rounded-full p-3">
                <svg
                  :class="isEffectSelected('Relaxante') ? 'text-primary-green-dark' : 'text-dark-normal'"
                  class="group-hover:text-primary-green-dark"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8623 11.1876C29.2864 12.0997 28.6013 15.4222 30.6079 17.2718C30.8415 17.4871 31.2721 17.7755 31.5647 17.9128C32.0296 18.1306 32.2149 18.1621 33.0342 18.1621C33.8649 18.1621 34.0369 18.1321 34.544 17.8977C35.268 17.5631 35.99 16.8379 36.3344 16.0996C36.5667 15.6016 36.5967 15.4298 36.5967 14.5996C36.5967 13.7649 36.5672 13.5982 36.3273 13.0788C36.0429 12.4632 35.3366 11.7059 34.777 11.4165C33.8949 10.9604 32.7567 10.8709 31.8623 11.1876ZM39.2611 15.3481C39.1281 15.4203 37.6551 16.6998 35.9879 18.1912L32.9564 20.9029L32.544 20.5881C31.9933 20.1677 31.2543 19.9611 30.462 20.0058C29.306 20.0712 28.9917 20.2931 25.4303 23.5585C23.6827 25.1608 22.2026 26.4936 22.1411 26.5202C22.0796 26.5469 19.3374 24.1573 16.0474 21.2099C12.7573 18.2626 9.91584 15.7734 9.73293 15.6785C8.85009 15.2202 7.94372 15.3967 7.16109 16.1792C6.41934 16.921 6.27562 17.7712 6.75778 18.5649C6.91012 18.8158 21.1251 31.6472 22.2931 32.5882C23.0031 33.1602 23.8109 33.285 24.5855 32.9424C24.8656 32.8185 26.2424 31.6206 28.8212 29.2574C30.9226 27.3315 32.7555 25.6715 32.8943 25.5684C33.0333 25.4653 35.048 23.6804 37.3716 21.6018C42.1092 17.3641 42.0533 17.4286 41.7957 16.501C41.6708 16.0515 41.3075 15.6237 40.8543 15.3924C40.4291 15.1756 39.6199 15.153 39.2611 15.3481ZM0.392062 16.4046L0 16.7559L9.79078 25.9903C15.1757 31.0692 19.8241 35.4032 20.1204 35.6216C22.1323 37.1038 24.8634 36.9883 27.0404 35.3289C27.2948 35.1349 32.1121 30.9458 37.7455 26.0197L47.988 17.0632L47.5893 16.7069C47.2029 16.3617 47.1845 16.3558 47.0029 16.5167C44.0747 19.1124 26.5162 34.3911 26.1741 34.6411C25.9078 34.8359 25.4017 35.13 25.0495 35.2946C24.4477 35.576 24.3443 35.5942 23.3311 35.5968C22.1435 35.5999 21.7096 35.4708 20.8611 34.8618C20.6363 34.7004 16.0545 30.4129 10.6792 25.334C5.30409 20.2551 0.878718 16.0892 0.84525 16.0765C0.811687 16.0637 0.607781 16.2114 0.392062 16.4046Z" fill="currentColor" />
                </svg>
              </button>
              <span :class="isEffectSelected('Relaxante') ? 'text-primary-green-dark' : 'text-dark-normal'" class="text-lg font-light group-hover:text-primary-green-dark">Relaxante</span>
            </div>
            <div v-if="currentEffectSelected != ''" class="col-span-2 row-span-2 flex justify-center items-end mt-6">
              <button class="text-lg font-bold" @click="removeFilter">
                Remover Filtro
              </button>
            </div>
          </ul>
        </nav>
      </template>
    </AtomsModal>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { CheckIcon } from "@heroicons/vue/outline";

export default {
  components: { XIcon, CheckIcon },
  setup () {
    const showModal = ref(false);
    const currentModalFilter = ref("");
    const currentCategorySelected = ref("");
    const currentEffectSelected = ref("");
    const currentProductNameToSearch = ref("");
    const currentCountProductFound = ref(0);
    const currentPageNumber = ref(1);
    const loaderProduct = ref(false);
    const loaderProductPagination = ref(false);
    const originalListProduct = reactive({
      data: [],
      modified: false
    });
    const amountProductRequest = ref(6);

    const { pending, data: listProducts } = useLazyFetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos?pagina=1&quantidade=${amountProductRequest.value}`);

    watch(currentCategorySelected, async () => {
      if (currentCategorySelected.value === "") {
        return;
      }
      loaderProduct.value = true;
      resetOriginalProductList();
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome-categoria?nomeCategoria=${currentCategorySelected.value}&pagina=1&quantidade=${amountProductRequest.value}`);
        listProducts.value = (await res.json());
        currentCountProductFound.value = listProducts.value.quantidadeProdutosPeloFiltro;
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    watch(currentEffectSelected, async () => {
      if (currentEffectSelected.value === "") {
        return;
      }
      loaderProduct.value = true;
      resetOriginalProductList();
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome-efeito?nomeEfeito=${currentEffectSelected.value}&pagina=1&quantidade=${amountProductRequest.value}`);
        listProducts.value = (await res.json());
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    watch(currentProductNameToSearch, async () => {
      if (currentProductNameToSearch.value === "") {
        return;
      }
      loaderProduct.value = true;
      resetOriginalProductList();
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome?nome=${currentProductNameToSearch.value}&pagina=1&quantidade=${amountProductRequest.value}`);
        listProducts.value = (await res.json());
        currentCountProductFound.value = listProducts.value.quantidadeProdutosPeloFiltro;
      } catch (error) {
      }
      loaderProduct.value = false;
    });

    watch(currentPageNumber, async () => {
      if (currentPageNumber.value === 1) { return; }
      loaderProductPagination.value = true;

      if (currentCategorySelected.value !== "") {
        loaderProduct.value = true;
        try {
          const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome-categoria?nomeCategoria=${currentCategorySelected.value}&pagina=${currentPageNumber.value}&quantidade=${amountProductRequest.value}`);
          const currentProductList = listProducts.value;
          const newProducts = (await res.json());
          listProducts.value.produtos = [...currentProductList.produtos, ...newProducts.produtos];
        } catch (error) {
        }
        loaderProduct.value = false;
        loaderProductPagination.value = false;
        return;
      } else if (currentProductNameToSearch.value !== "") {
        loaderProduct.value = true;
        try {
          const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome?nome=${currentProductNameToSearch.value}&pagina=${currentPageNumber.value}&quantidade=${amountProductRequest.value}`);
          const currentProductList = listProducts.value;
          const newProducts = (await res.json());

          listProducts.value.produtos = [...currentProductList.produtos, ...newProducts.produtos];
        } catch (error) {
        }
        loaderProduct.value = false;
        loaderProductPagination.value = false;
        return;
      } else if (currentEffectSelected.value !== "") {
        loaderProduct.value = true;
        try {
          const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos/nome-efeito?nomeEfeito=${currentEffectSelected.value}&pagina=${currentPageNumber.value}&quantidade=${amountProductRequest.value}`);
          const currentProductList = listProducts.value;
          const newProducts = (await res.json());

          listProducts.value.produtos = [...currentProductList.produtos, ...newProducts.produtos];
        } catch (error) {
        }
        loaderProduct.value = false;
        loaderProductPagination.value = false;
        return;
      }

      loaderProduct.value = true;
      try {
        const res = await fetch(`https://supleeapiv1.herokuapp.com/api/Catalogo/produtos?pagina=${currentPageNumber.value}&quantidade=${amountProductRequest.value}`);
        const currentProductList = listProducts.value;
        const newProducts = (await res.json());
        listProducts.value.produtos = [...currentProductList.produtos, ...newProducts.produtos];
      } catch (error) {
      }
      loaderProduct.value = false;
      loaderProductPagination.value = false;
    });

    function toggleSelectedCategory (category) {
      currentCategorySelected.value = category;
      currentEffectSelected.value = "";
      showModal.value = false;
      resetPaginationNumber(1);
      toggleProductNameToSearch("");
      scrollPageToListProducts();
    }

    function toggleProductNameToSearch (productName) {
      currentProductNameToSearch.value = productName;
      scrollPageToListProducts();
    }

    function toggleSelectedEffect (effect) {
      currentEffectSelected.value = effect;
      currentCategorySelected.value = "";
      resetPaginationNumber(1);
      toggleProductNameToSearch("");
      scrollPageToListProducts();
      showModal.value = false;
    }

    function toggleModalFilter (selectedFilter) {
      showModal.value = !(showModal.value);
      currentModalFilter.value = selectedFilter;
    }

    function resetPaginationNumber (pageNumber) {
      currentPageNumber.value = pageNumber;
    }

    function filterCategoryCallToAction (category) {
      toggleSelectedCategory(category);
    }

    function searchProductName (productName) {
      toggleSelectedCategory("");
      toggleProductNameToSearch(productName);
    }

    function scrollToSection (section) {
      if (section === "ViewTopPage") {
        scrollPageToTop();
      } else if (section === "ViewListProduct") {
        scrollPageToListProducts();
      }
    }

    function scrollPageToListProducts () {
      let element;
      if (window.screen.height > 1024) {
        element = document.querySelector("#titleListProduct");
      } else {
        element = document.querySelector("#productsFiltered");
      }
      element.scrollIntoView({ behavior: "smooth" });
    }

    function scrollPageToTop () {
      const element = document.querySelector("body");
      element.scrollIntoView({ behavior: "smooth" });
    }

    function isCategorySelected (category) {
      // category = category === "Proteínas" ? "8a11a207-806b-4381-a66d-312380079800" : category === "Ômega-3" ? "06c8e04e-6186-4348-b2b3-c92956593d94" : category === "Vitaminas" ? "13da56cc-5122-4392-8766-de930231f770" : "083a4576-f55b-4766-bf50-eb86db16b766";
      return category === currentCategorySelected.value;
    }

    function isEffectSelected (effect) {
      return effect === currentEffectSelected.value;
    }

    function setBorderCurrentCategoryFilter () {
      return currentCategorySelected.value === "Vitaminas"
        ? "border-primary-green-dark text-primary-green-dark font-bold border-2"
        : currentCategorySelected.value === "Proteínas"
          ? "border-primary-lemon-dark text-primary-lemon-dark font-bold border-2"
          : currentCategorySelected.value === "Minerais"
            ? "border-secondary-orange-dark text-secondary-orange-dark font-bold border-2"
            : currentCategorySelected.value === "Ômega-3"
              ? "border-primary-olivia-dark text-primary-olivia-dark font-bold border-2"
              : "border-dark-normal text-dark-normal border";
    }

    function setBorderCurrentEffectFilter () {
      return currentEffectSelected.value !== ""
        ? "border-primary-green-dark text-primary-green-dark font-bold border-2"
        : "border-dark-normal text-dark-normal border";
    }

    function removeFilter () {
      if (!originalListProduct.modified) {
        showModal.value = false;
        return;
      }
      listProducts.value = originalListProduct.data;
      showModal.value = false;
      currentCategorySelected.value = "";
      currentEffectSelected.value = "";
      currentProductNameToSearch.value = "";
      resetPaginationNumber(1);
      scrollPageToListProducts();
    }

    function loadMoreProductsPagination (maxList) {
      if (maxList) { return; }
      currentPageNumber.value++;
    }

    function resetOriginalProductList () {
      if (!originalListProduct.modified) {
        originalListProduct.data = listProducts.value;
        originalListProduct.modified = true;
      }
    }

    useHead({
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "pt-br"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Ecommerce de suplementos alimentares."
        }
      ]
    });

    return { dynamic: ref(49), allProducts: listProducts, loaderProduct, loaderProductPagination, pending, showModal, currentModalFilter, currentCategorySelected, currentEffectSelected, currentProductNameToSearch, currentCountProductSearch: currentCountProductFound, toggleSelectedCategory, toggleSelectedEffect, toggleModalFilter, filterCategoryCallToAction, searchProductName, isCategorySelected, isEffectSelected, setBorderCurrentCategoryFilter, setBorderCurrentEffectFilter, removeFilter, scrollToSection, loadMoreProductsPagination };
  },
  head: {
    title: "Suplee"
  }
};
</script>
