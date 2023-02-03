import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./CategoryButton";
import { categoryButtonStyles, categorySlideStyles } from "./styles";



export default function CategorySlide(){
  const { user_name } = useSelector(state => state.auth)
  const {headerContainer, categoryText, icon }=categorySlideStyles
  const dispatch = useDispatch()
  
  useEffect(()=>{
  
  },[])
  return(
    <View style= {categorySlideStyles.container}>
      <View style = {headerContainer}>
        <Text style = {categoryText}>Categorías</Text>
        <FontAwesomeIcon icon={faSliders} size={30} style={icon}/>
      </View>
      <ScrollView 
      horizontal={true}
      overScrollMode={'auto'}
    
      showsHorizontalScrollIndicator={false} 
      style={categoryButtonStyles.scroll}>
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </ScrollView>
      
    
      
    </View>
  )
}