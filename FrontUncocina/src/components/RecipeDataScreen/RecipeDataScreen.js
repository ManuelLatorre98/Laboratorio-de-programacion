import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeDataHeader from "./RecipeDataHeader";
import { recipeDataScreenStyles } from "./styles";
import RecipeInfoCard from '../RecipeInfoCard/RecipeInfoCard';
import { useDispatch, useSelector } from "react-redux";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import IngredientsInfoCard from "../RecipeInfoCard/IngredientsInfoCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CalifScreen from "./CalifScreen";

export default function RecipeDataScreen(){
  const { container, scrollContainer} = recipeDataScreenStyles
  //ESTADO DE MOSTRADO DE INGREDIENTS
  const [showIngredients, setShowIngredients] = useState(true)
  const [makeCalif, setMakeCalif] = useState(false)
  const [userCalif, setCalif] = useState(1)


  function onPressShowIngredients(){
    setShowIngredients(!showIngredients)
  }

  function handleMakeCalif(){
    setMakeCalif(!makeCalif)
    if(makeCalif){
      console.log("GUARDA CALIFICACION")
    }

  }

  function handleChangeCalif(starNumber){//StarNumber values goes from 0 to 5
    setCalif(starNumber+1)
  }

 
  //ONPRESS PARA EL BOTON recipeInfoCard --> HeaderInfoCard
  return(
    <View style={container}>
      <GestureHandlerRootView>
        <ScrollView style={scrollContainer}>
          <RecipeDataHeader handleMakeCalif={handleMakeCalif}/>
          <RecipeInfoCard 
          onPressShowIngredients={onPressShowIngredients}
          showIngredients={showIngredients}/>
        </ScrollView>
        {showIngredients && <IngredientsInfoCard />}
      </GestureHandlerRootView >
      {makeCalif && <CalifScreen handleMakeCalif={handleMakeCalif} userCalif={userCalif} handleChangeCalif={handleChangeCalif}/>}
    </View>
  )
}