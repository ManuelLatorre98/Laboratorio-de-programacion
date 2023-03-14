import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/slices/categories/categories";
import { setIsShow, toggleShow } from "../../store/slices/navBar/navBar";
import { getAllRecipes } from "../../store/slices/recipes/recipesSlice";
import CategorySlide from "../CategorySlide/CategorySlide";
import RecipeCard from "../RecipeCard/RecipeCard";
import Selector from "../Selector/Selector";
import HelloSlide from "./HelloSlide";
import { recipesStyles } from "./styles";

export default function RecipesMainScreen(){
  //STATES
  const [currentOffset, setCurrentOffset] = useState(0)
  const [lastOffset, setLastOffset] = useState(0)
  const [pagination, setPagination] = useState({from:0, amount:100})
  
  const [showSelectCategories, setShowSelectCategories] = useState(false)
  const [orderBy, setOrderBy] = useState('desc')
  const [selectedCategories, setSelectedCategories] = useState([])

  //SELECTORS
  const { show } = useSelector(state => state.navBar)
  const dispatch = useDispatch()
  const {recipes} = useSelector((state) => state.recipes)
  const { categories } = useSelector(state => state.categories)

  //HANDLE EVENTS
  function onScroll(event){
    setCurrentOffset(event.nativeEvent.contentOffset.y)
    let dif= currentOffset - lastOffset
    setLastOffset(currentOffset)
    if(dif<0){
      if(!show) dispatch(setIsShow(true))
    }else if(dif>0){
      if(show) dispatch(setIsShow(false))
    }
  }

  function handleOrderBy(){
    setOrderBy(prevOrder => prevOrder=='desc'? 'asc' : 'desc')
  }

  function handleCategories(){//Manages categories button
    if(show) dispatch(setIsShow(false))
    setShowSelectCategories(true)
  }//JUNTAR CON CLOSE CATEGORIES. ARREGLAR VISTA EN BLANCO DE CUANDO NO HAY RECIPES

  function handleCloseCategories(){//Manages the selection of categories and close the Selector
    setShowSelectCategories(false)
    if(!show) dispatch(setIsShow(true))
  }

  function handleSelectCategory(categoryIndex){
    setSelectedCategories(prevSelected => {
      const newSelected= [...prevSelected]
      if(newSelected.includes(categories[categoryIndex].category_name)){ //Removes from selected
        const index= newSelected.indexOf(categories[categoryIndex].category_name)
        newSelected.splice(index, 1);
      }else{
        newSelected.push(categories[categoryIndex].category_name)
      }
      return newSelected
    })
  }

  function getCategoriesNames(){
    const categoriesNames=[]
    categories.map(category => categoriesNames.push(category.category_name))
    return categoriesNames
  }
  
  //RENDER COMPONENTS
  const recipeElements = recipes.map((recipe, i)=>{
    return <RecipeCard 
      key={'recipe'+i}
      recipe_name={recipe.recipe_name} 
      avgCalif={recipe.avgCalif ==null? 0: recipe.avgCalif}
      imageURL={recipe.imageURL}
      estimatedTime={recipe.estimatedTime}
    />
  })   

  //API
  useEffect(()=>{
    dispatch(getAllCategories()) //There will not be many categories, so I get them all when load the page
  },[])

  useEffect(()=>{//INVESTIGAR PAGINATION CUANDO LLEGA ABAJO DEL TODO
    if(!show) dispatch(setIsShow(true))
    dispatch(getAllRecipes(
      {
        from:pagination.from,
        amount:pagination.amount,
        sort_by:"creationDate",
        order_by:orderBy, 
        categories:selectedCategories,
      }
    ))
  },[pagination, orderBy, selectedCategories])
  return(
    <View>
      <ScrollView onScroll={onScroll}>
        <View style = {recipesStyles.container}>
          <HelloSlide />
          <CategorySlide orderBy={orderBy} handleOrderBy={handleOrderBy} handleCategories={handleCategories} selectedCategories={selectedCategories} handleSelectCategory={handleSelectCategory}/>
          <View style = {recipesStyles.recipeScroll}>
            {recipeElements}
          </View>
        </View>
        
      </ScrollView>
      {showSelectCategories && 
        <Selector 
          selectedItems= {selectedCategories}
          titleText={'Categorías'} 
          items={getCategoriesNames()} 
          handleCloseItems={handleCloseCategories}
          handleSelectItem={handleSelectCategory}
        />
      }
    </View>
  )
}