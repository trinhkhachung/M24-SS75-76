import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        carts: cartSlice
    }
});
export default store;