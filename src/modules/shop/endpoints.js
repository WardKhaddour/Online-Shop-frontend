export const PRODUCTS = page => `/?page=${page || 1}`;
export const GET_PRODUCT = id => `/products/${id}`;
export const ADD_TO_CART = `/cart`;
export const GET_CART = `/cart`;
export const DELETE_FROM_CART = productId => `/cart/${productId}`;
export const SEND_ORDER = `/order`;
export const GET_ORDERS = `/orders`;
export const INVOICE = orderId => `/orders/${orderId}`;
