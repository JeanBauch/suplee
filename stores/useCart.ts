import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ProductOnCard } from "~~/types/product";

type Cart = {
  products: Array<ProductOnCard>,
}

export const useCart = defineStore("cart-shopping", () => {
  const cart = reactive<Cart>({
    products: useStorage("products", [])
  });

  const totalPrice = computed(() => {
    return cart.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  });

  const totalQuantityItensOnProduct = computed(() => {
    return cart.products.length;
  });

  function getProductInCartById (id: string) {
    return cart.products.filter(product => product.id === id);
  }

  function addProductToCart (product: ProductOnCard) {
    if (getProductInCartById(product.id).length > 0) {
      cart.products[getIndexOfById(product.id)].quantity += product.quantity;
    } else {
      cart.products.push(product);
    }
  }

  function removeProductToCart (id: string) {
    cart.products.splice(getIndexOfById(id), 1);
  }

  function getAmoutProductById (id: string) {
    return getProductInCartById(id)[0].quantity;
  }

  function incrementAmoutProduct (id: string) {
    if (getAmoutProductById(id) + 1 <= getProductInCartById(id)[0].availableQuantity) {
      getProductInCartById(id)[0].quantity++;
    }
  }

  function decrementAmoutProduct (id: string) {
    if ((getAmoutProductById(id) > 1) && (getAmoutProductById(id) - 1 < getProductInCartById(id)[0].availableQuantity)) {
      getProductInCartById(id)[0].quantity--;
    }
  }

  function getIndexOfById (id: string) {
    return cart.products.indexOf(getProductInCartById(id)[0]);
  }

  function cleanCart () {
    cart.products = [];
  }

  return {
    cart,
    totalPrice,
    totalQuantityItensOnProduct,
    getProductInCartById,
    getIndexOfById,
    addProductToCart,
    removeProductToCart,
    getAmoutProductById,
    incrementAmoutProduct,
    decrementAmoutProduct,
    cleanCart
  };
});
