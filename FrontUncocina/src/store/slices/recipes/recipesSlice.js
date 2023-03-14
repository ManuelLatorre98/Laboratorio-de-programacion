import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQueryService } from "../../../services/apiService";

import { ENDPOINT_RECIPE } from "../../../services/routes";
const initialState = {
  recipes:[],
  recipeSelected:"",
  loading: false,
  error: false,
  errorMsg: "",
  success:false
}

export const getAllRecipes = createAsyncThunk('recipes/getAllRecipes', async(reqData, thunkAPI) => {
  try{
    const response = await getQueryService(`${ENDPOINT_RECIPE}`, reqData)
    return response.data
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.data)
  }
})




export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    fullReset:(state)=>{
        state.recipes=[]
        state.recipeSelected=""
        state.loading= false
        state.error= false
        state.errorMsg= ""
        state.success=false
      
    },
    resetRecipeReq: (state) => {
        state.loading= false
        state.error= false
        state.errorMsg= ""
        state.success=false
    },
    resetRecipes: (state) => {
      state.recipes=[]
      state.recipeSelected=""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.fulfilled, (state, {payload}) => {
        if (state.loading) state.loading = false   
        state.errorMsg="" 
        state.error=false
        state.recipes= payload
        
        state.success=true
      })
      .addCase(getAllRecipes.pending, (state, action) => {
        if (!state.loading) state.loading = true
      })
      .addCase(getAllRecipes.rejected, (state, action) => {
        if (state.loading) state.loading = false   
        state.errorMsg = action.error.message
        state.error=true 
      })      
  }
})


export const { fullReset, resetRecipeReq, resetRecipes  } = recipesSlice.actions
export default recipesSlice.reducer