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


export default function RecipeInfoCard(props){
  const { container, stepListContainer, ingredientsTitle} = recipeInfoCardStyles
  const {onPressShowIngredients, showIngredients} = props


  
  const sheetRef = useRef(null);

  // variables
  const snapPoints = [40,'20%','40%','60%','100%'];
  return(
    <ScrollView style={container} contentContainerStyle={{alignItems:'center'} }>
      
      <Image source={{
        uri:'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839000/uncocina/hamburguesaG_zmrwra.jpg'
        }} 
        style={recipeDataScreenStyles.image}
        />
        <View style={stepListContainer}>
          <HeaderRecipeInfoCard  
            onPressShowIngredients={onPressShowIngredients}
            showIngredients={showIngredients}
          />
          <StepsList />
        </View>
    </ScrollView>
        

  )
}