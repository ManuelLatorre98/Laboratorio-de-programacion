
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../../store/slices/navBar/navBar";
import { calificationStyles } from "./style";


export default function Calification(props){
  const {container, icon, text} = calificationStyles
  const {avgCalif} = props
  const dispatch = useDispatch()
  
  useEffect(()=>{

  },[])
  return(
    <View style = {container}>
      <FontAwesomeIcon icon={faStar} size={20} style={icon}/>
      <Text style={text}>{avgCalif}</Text>
    </View>
  )
}