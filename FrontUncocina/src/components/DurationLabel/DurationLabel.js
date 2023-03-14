import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../../store/slices/navBar/navBar";

import { DurationLabelStyles } from "./styles";


export default function DurationLabel(props){
  const {container, text} = DurationLabelStyles
  const{estimatedTime} = props
  const dispatch = useDispatch()
  
  useEffect(()=>{

  },[])
  return(
    <View style = {container}>
      <Text style={text}>{`${estimatedTime} MIN`} </Text>
    </View>
  )
}