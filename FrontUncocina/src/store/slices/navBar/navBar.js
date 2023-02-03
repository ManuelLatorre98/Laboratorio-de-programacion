import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  selectedButton: 1,
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setPressedButton:(state, {payload})=>{
      state.selectedButton = payload      
    },
    toggleShow: (state, {payload}) => {
        state.show = payload
    },
  }})

export const {setPressedButton, toggleShow} = navBarSlice.actions
export default navBarSlice.reducer