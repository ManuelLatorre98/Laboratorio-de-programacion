import { Text, TouchableOpacity, View } from "react-native";
import DurationLabel from "../DurationLabel/DurationLabel";

import { headerRecipeInfoCardStyles, recipeInfoCardStyles } from "./styles";


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEgg, faHeart, faPepperHot, faWheatAwn, faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";


export default function HeaderRecipeInfoCard(props){
  const { header, title, rightContainer, icon} = headerRecipeInfoCardStyles
  const { onPressShowIngredients, showIngredients } = props
  return(
      <View style={header}>
        <Text style={title}>Receta</Text>
        <View style = {rightContainer}>
        <TouchableOpacity onPress={onPressShowIngredients}>
          {showIngredients && <FontAwesomeIcon icon={faWheatAwnCircleExclamation} size={30} style = {icon}/>}
          {!showIngredients && <FontAwesomeIcon icon={faWheatAwn} size={25} style = {icon}/>}
        </TouchableOpacity> 
        <DurationLabel />
          
        </View>
      </View>



  )
}