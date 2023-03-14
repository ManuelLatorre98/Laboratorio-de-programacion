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
    setIsShow: (state, {payload}) => {
        state.show = payload
    },
  }})

export const {setPressedButton, setIsShow} = navBarSlice.actions
export default navBarSlice.reducer