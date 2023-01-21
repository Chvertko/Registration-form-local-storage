import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./auth-feature/form-slice";

export const store = configureStore({
    reducer:{
        form: formReducer
    },
    devTools: true,
})