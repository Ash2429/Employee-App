import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 value:0
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        set :(state,newval)=>{
            state.value = newval
        },
    }
})
export const {set} =dataSlice.actions
export default dataSlice.reducer