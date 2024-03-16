const emailRegex= /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const nameRegex= /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
const biRegex = /^[0-9]{9}[A-Z]{2}[0-9]{3}$/;
const telefoneRegex = /^[9]{1}[1-5+9]{1}[0-9]{1}-?[0-9]{3}-?[0-9]{3}$/;

export const validateEmail = new RegExp(emailRegex);
export const validatePassword = new RegExp(passwordRegex);
export const validateName = new RegExp(nameRegex);
export const validateBi = new RegExp(biRegex);
export const validateTelefone = new RegExp(telefoneRegex);