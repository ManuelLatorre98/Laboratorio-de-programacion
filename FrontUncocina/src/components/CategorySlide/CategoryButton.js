import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { categoryButtonStyles } from "./styles";


export default function CategoryButton(props){
  const {container, buttonText, cross} = categoryButtonStyles
  const {categoryName,itemIndex, handleSelectCategory} = props
  return(
    <View style={container}>
      <Text style={buttonText} numberOfLines={1}>{categoryName}</Text>
      <TouchableOpacity onPress={()=>handleSelectCategory(itemIndex)}>
        <FontAwesomeIcon icon={faXmark} size={18} style={cross}/>
      </TouchableOpacity>
    </View>
  )
}