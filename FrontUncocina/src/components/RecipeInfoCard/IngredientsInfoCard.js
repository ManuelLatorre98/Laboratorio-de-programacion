import 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView}  from '@gorhom/bottom-sheet';
import { ScrollView, Text, View} from "react-native";
import { ingredientsInfoCardStyles, recipeInfoCardStyles } from "./styles";
import { useRef} from 'react';

import {colors} from '../../Theme/theme'
import Step from '../StepsList/Step';

export default function IngredientsInfoCard(){
  const {container, title, listContainer} = ingredientsInfoCardStyles

  
  const sheetRef = useRef(null);

  // variables
  const snapPoints = [40,'20%','40%','60%','85%'];
  return(

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={{backgroundColor:colors.darkBackground}}
        handleIndicatorStyle={{backgroundColor:'gray'}}
      >
        <BottomSheetScrollView style={container}>
          <Text style={title}>Ingredientes</Text>
          <View style={listContainer}>
            <Step stepTitle={'Huevo x500mg y una cosa que tengo que poner para que quede largo el texto eaeaea'}/>
            <Step stepTitle={'Ingrediente 2'}/>
            <Step stepTitle={'Ingrediente 3'}/>
            <Step stepTitle={'Ingrediente 4'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 7'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 5'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 6'}/>
            <Step stepTitle={'Ingrediente 7'}/>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>  
  

  )
}