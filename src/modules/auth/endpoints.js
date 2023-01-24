export const LOGIN = `/auth/login`;
export const SIGNUP = `/auth/signup`;
export const RESET_PASSWORD = `/auth/reset`;
export const CHANGE_PASSWORD = `/auth/reset`;
export const UPDATE_PASSWORD = `/auth/new-password`;

export const CHECK_PASSWORD_TOKEN = token => `/auth/reset/${token}`;
export const LOGOUT = `/auth/logout`;
