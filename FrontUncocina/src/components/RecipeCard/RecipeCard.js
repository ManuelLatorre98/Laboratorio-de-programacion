import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../../store/slices/navBar/navBar";
import Calification from "../Calification/Calification";
import DurationLabel from "../DurationLabel/DurationLabel";
import { recipeCardStyles } from "./styles";


export default function RecipeCard(props){
  const {container, recipeText, infoContainer, image} = recipeCardStyles
  const  {recipe_name, avgCalif, imageURL, estimatedTime} = props

  function onPress(){
   
  }

  return(
    <TouchableOpacity  style = {container} onPress={onPress}>
      <View style = {infoContainer}>
        <Text style={recipeText} numberOfLines={2}>{recipe_name}</Text>
        <Calification avgCalif={avgCalif}/>
        <View style={{marginTop:20}}>
          <DurationLabel  estimatedTime={estimatedTime}/>
        </View>

      </View>
     
      <Image source={{
      uri:imageURL
      }}
      style={image}
      />
      
    </TouchableOpacity>
  )
}