import { ScrollView, View } from 'react-native';
import CustomTextInput from '../CustomTextInput/CustomTextInput';

import { AddRecipeStyles } from './styles';
import { useForm } from 'react-hook-form';


export default function AddRecipeScreen() {
  const { control, trigger, handleSubmit, formState: {errors}}= useForm()
  const {scrollContainer,container} = AddRecipeStyles

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      style={scrollContainer}
    >
      <View style={container}>
        <CustomTextInput
          name='recipe_name'
          maxLength= {255}
          placeholder={"Recipe name"}
          control={control}
          rules={
            {
              required:'Ingrese nombre de la receta',
            }
          }
        />
        <CustomTextInput
          name='estimatedTime'
          maxLength= {255}
          placeholder={"Tiempo de realización"}
          control={control}
          rules={
            {
              required:'Ingrese nombre de la receta',
            }
          }
        />
       {/*  <CustomTextInput
          name='password'
          isPass={true}
          maxLength={64}
          placeholder={"Contraseña"}
          hideText={true}
          control={control}
          rules={
            {
              required:'Ingrese su contraseña',
              validate: ()=>(!error? true : 'Contraseña invalida'),
              pattern: {value: PASS_REGEX, message: "La contraseña debe tener 4 caracteres con al menos un número y una letra"}
            }
          }
    
        /> */}
        {/* <SubmitButton text={"Login"} onPress={handleSubmit(onSignInPressed)}/> */}
       
      </View>
    </ScrollView>
  )
}

