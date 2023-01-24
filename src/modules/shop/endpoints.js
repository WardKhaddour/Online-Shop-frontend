export const PRODUCTS = page => `/shop/?page=${page || 1}`;
export const GET_PRODUCT = id => `/shop/products/${id}`;
export const ADD_TO_CART = `/shop/cart`;
export const GET_CART = `/shop/cart`;
export const DELETE_FROM_CART = productId => `/shop/cart/${productId}`;
export const SEND_ORDER = `/shop/order`;
export const GET_ORDERS = `/shop/orders`;
export const INVOICE = orderId => `/shop/orders/${orderId}`;
