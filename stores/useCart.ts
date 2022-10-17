import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useLoggedUser } from "./useLoggedUser";
import { ProductOnCard, ProductsToSendRequest, UpdateQunatityProductRequest } from "~~/types/product";
import { deleteProductInsideCartShopping, postAddProductToCartShopping, putUpdateProductInCartShopping } from "~~/services/purchase";

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

  async function addProductToCart (product: ProductOnCard) {
    if (getProductInCartById(product.id).length > 0) {
      cart.products[getIndexOfById(product.id)].quantity += product.quantity;
    } else {
      cart.products.push(product);
    }
    if (useLoggedUser().user.isLogged) {
      const cartShoppingSendToRequest:ProductsToSendRequest = {
        produtoId: product.id,
        nomeProduto: product.name,
        quantidade: product.quantity,
        valorUnitario: product.price
      };
      await postAddProductToCartShopping(cartShoppingSendToRequest);
    }
  }

  async function removeProductToCart (id: string) {
    cart.products.splice(getIndexOfById(id), 1);
    if (useLoggedUser().user.isLogged) {
      await deleteProductInsideCartShopping(id);
    }
  }

  function getAmoutProductById (id: string) {
    return getProductInCartById(id)[0].quantity;
  }

  async function incrementAmoutProduct (id: string) {
    if (getAmoutProductById(id) + 1 <= getProductInCartById(id)[0].availableQuantity) {
      getProductInCartById(id)[0].quantity++;
      if (useLoggedUser().user.isLogged) {
        const bodyRequest:UpdateQunatityProductRequest = { produtoId: id, quantidade: getProductInCartById(id)[0].quantity };
        await putUpdateProductInCartShopping(bodyRequest);
      }
    }
  }

  async function decrementAmoutProduct (id: string) {
    if ((getAmoutProductById(id) > 1) && (getAmoutProductById(id) - 1 < getProductInCartById(id)[0].availableQuantity)) {
      getProductInCartById(id)[0].quantity--;
      if (useLoggedUser().user.isLogged) {
        const bodyRequest:UpdateQunatityProductRequest = { produtoId: id, quantidade: getProductInCartById(id)[0].quantity };
        await putUpdateProductInCartShopping(bodyRequest);
      }
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
