import { configureStore } from "@reduxjs/toolkit";
import hangmanSlice from "./Slice";



const store=configureStore({
    reducer: hangmanSlice.reducer
})
export default store