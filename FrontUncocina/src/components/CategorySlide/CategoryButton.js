import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { categoryButtonStyles } from "./styles";


export default function CategoryButton(props){
  const {container, buttonText, cross} = categoryButtonStyles
  const onPress = () =>{
  }

  useEffect(()=>{
    
  },[])
  return(
    <View style={container}>
      <Text style={buttonText} numberOfLines={1}>Recipe</Text>
      <TouchableOpacity  >
        <FontAwesomeIcon icon={faXmark} size={18} style={cross}/>
      </TouchableOpacity>
    </View>
  )
}