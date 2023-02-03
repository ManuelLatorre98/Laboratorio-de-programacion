import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../../store/slices/navBar/navBar";
import CategoryButton from "../CategorySlide/CategoryButton";
import CategorySlide from "../CategorySlide/CategorySlide";
import { commonStyles } from "../commonStyles";
import HelloSlide from "./HelloSlide";
import { recipesStyles } from "./styles";


export default function RecipesMainScreen(){
  const { show } = useSelector(state => state.navBar)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(!show) dispatch(toggleShow(true))

  },[])
  return(
    <View style = {recipesStyles.container}>
      <HelloSlide />
      <CategorySlide />
    
    </View>
  )
}