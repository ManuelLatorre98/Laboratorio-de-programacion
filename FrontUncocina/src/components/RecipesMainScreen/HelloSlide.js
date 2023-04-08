import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { commonStyles } from "../commonStyles";
import { helloSlideStyles } from "./styles";



export default function HelloSlide(props){
  const { user_name } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {textHeader}=props
  useEffect(()=>{
  
  },[])
  return(
    <View style = {helloSlideStyles.container}>
      <View style = {helloSlideStyles.textContainer}>
    
      { textHeader===undefined && 
        <View>
          <Text style={helloSlideStyles.userText} numberOfLines={1}>{`Hola Alumno unco${user_name}`}</Text>
          <Text style={helloSlideStyles.messageText}>Que vas a cocinar hoy?</Text>
        </View>
      }

      { textHeader!=undefined && 
        <View>
          <Text style={helloSlideStyles.userText} numberOfLines={1}>{`${textHeader.title}`}</Text>
          <Text style={helloSlideStyles.messageText}>{`${textHeader.subTitle}`}</Text>
        </View>
      }
      
      
      </View>
      <Image 
          source={{ uri:'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839124/uncocina/Uncocina_gon7t0.png'}}
          style={helloSlideStyles.logo} 
        />
    </View>
  )
}