export const PRODUCTS = page => `/?page=${page}`;
export const GET_PRODUCT = id => `/products/${id}`;
export const ADD_TO_CART = `/cart`;
export const GET_CART = `/cart`;
export const DELETE_FROM_CART = `/cart-delete-product`;
export const SEND_ORDER = `/create-order`;
export const GET_ORDERS = `/orders`;
export const INVOICE = orderId => `/orders/${orderId}`;
