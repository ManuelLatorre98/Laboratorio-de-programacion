import 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView}  from '@gorhom/bottom-sheet';
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import { recipeInfoCardStyles } from "./styles";
import { useRef, useState } from 'react';
import StepsList from '../StepsList/StepsList';
import HeaderRecipeInfoCard from './HeaderRecipeInfoCard';
import { recipeDataScreenStyles } from '../RecipeDataScreen/styles';
import {colors} from '../../Theme/theme'
import IngredientsInfoCard from './IngredientsInfoCard';
import { useSelector } from 'react-redux';


export default function RecipeInfoCard(props){
  const { container, stepListContainer, ingredientsTitle} = recipeInfoCardStyles
  const {onPressShowIngredients, showIngredients} = props
  const { recipes, recipeSelected } = useSelector(state => state.recipes)

  
  const sheetRef = useRef(null);

  // variables
  const snapPoints = [40,'20%','40%','60%','100%'];
  return(
    <ScrollView style={container} contentContainerStyle={{alignItems:'center'} }>
      
      <Image source={{
        uri:recipes[recipeSelected].imageURL
        }} 
        style={recipeDataScreenStyles.image}
        />
        <View style={stepListContainer}>
          <HeaderRecipeInfoCard  
            onPressShowIngredients={onPressShowIngredients}
            showIngredients={showIngredients}
            estimatedTime={recipes[recipeSelected].estimatedTime}
          />
          <StepsList steps={recipes[recipeSelected].steps}/>
        </View>
    </ScrollView>
        

  )
}