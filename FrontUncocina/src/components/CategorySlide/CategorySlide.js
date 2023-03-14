import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowDownShortWide, faArrowUpShortWide, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./CategoryButton";
import { categoryButtonStyles, categorySlideStyles } from "./styles";



export default function CategorySlide(props){
  const { user_name } = useSelector(state => state.auth)
  const {headerContainer, categoryText, icon, iconContainer }=categorySlideStyles
  const {orderBy, handleOrderBy, handleCategories, selectedCategories, handleSelectCategory} = props
  const dispatch = useDispatch()
  
  //RENDER COMPONENTS
  const categoryButtonElements = selectedCategories.map((category, i)=>{ //receives an array with names
    return <CategoryButton 
      key={'category'+i}
      categoryName= {category}
      handleSelectCategory={handleSelectCategory}
      itemIndex={i}
    />
  })  

  return(
    <View style= {categorySlideStyles.container}>
      <View style = {headerContainer}>
        <Text style = {categoryText}>Categorías</Text>
        <View style={iconContainer}>
          {orderBy==='desc' &&<TouchableOpacity onPress={handleOrderBy}>
              <FontAwesomeIcon icon={faArrowDownShortWide} size={25} style={icon}/>
          </TouchableOpacity>}

          {orderBy==='asc' &&<TouchableOpacity onPress={handleOrderBy}>
              <FontAwesomeIcon icon={faArrowUpShortWide} size={25} style={icon}/>
          </TouchableOpacity>}

           <TouchableOpacity onPress={handleCategories}>
            <FontAwesomeIcon icon={faSliders} size={25} style={icon}/>
          </TouchableOpacity>
          
        </View>
      </View>
      
      <ScrollView 
      horizontal={true}
      overScrollMode={'auto'}
      showsHorizontalScrollIndicator={false} 
      style={categoryButtonStyles.scroll}>
        {categoryButtonElements}
      </ScrollView>
      
    
      
    </View>
  )
}