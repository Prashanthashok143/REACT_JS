import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

 const store=configureStore({
    reducer:{
        CounterSlice
    }
})
export default store;