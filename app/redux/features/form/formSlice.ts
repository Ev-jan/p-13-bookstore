import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormState {
  email: string;
  password: string;
  name: string;
  isEmailValid: boolean;
  isNameValid: boolean;
  isPasswordValid: boolean;
  errors: {
    email: string;
    password: string;
    name: string;
    server: string;
  };
}

const initialState: IFormState = {
  email: "",
  password: "",
  name: "",
  isEmailValid: false,
  isNameValid: false,
  isPasswordValid: false,
  errors: {
    email: "",
    password: "",
    name: "",
    server: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    validateEmail: (state) => {
      state.isEmailValid =
        state.email.trim() !== "" && /\S+@\S+\.\S+/.test(state.email);
      state.errors.email = state.isEmailValid
        ? ""
        : "Please enter a valid email.";
      console.log(state.errors.email);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    validateName: (state) => {
      state.isNameValid =
        state.name.trim() !== "" && state.name.trim().length < 13;
      state.errors.name = state.isNameValid
        ? ""
        : "Your name mustn't be a whitespace or longer than 13 characters.";
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validatePassword: (state) => {
      const regex = /\s/;
      state.isPasswordValid =
        state.password.length >= 6 &&
        state.password.length <= 15 &&
        !regex.test(state.password);
      state.errors.password = !state.isPasswordValid
        ? state.password.length < 6
          ? "Your password must be at least 6 characters long."
          : state.password.length > 15
          ? "Your password must not be longer than 15 characters."
          : "Your password must not contain whitespaces."
        : "";
    },
    setError: (
      state,
      action: PayloadAction<{
        fieldName: keyof typeof state.errors;
        value: string;
      }>
    ) => {
      const { fieldName, value } = action.payload;
      state.errors[fieldName] = value;
    },
    clearAllErrors: (state) => {
      state.errors = initialState.errors;
    },
    resetValidity: (
      state,
      action: PayloadAction<"isEmailValid" | "isNameValid" | "isPasswordValid">
    ) => {
      const fieldName = action.payload;
      state[fieldName] = initialState[fieldName];
    },
    resetField: (
      state,
      action: PayloadAction<"email" | "password" | "name">
    ) => {
      const fieldName = action.payload;
      state[fieldName] = initialState[fieldName];
    },
    formReset: () => {
      return initialState;
    }
  },
});

export const {
  setEmail,
  validateEmail,
  setName,
  validateName,
  setPassword,
  validatePassword,
  setError,
  resetField,
  clearAllErrors,
  resetValidity,
  formReset
} = formSlice.actions;

export default formSlice.reducer;
