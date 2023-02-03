import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import HomeScreen from './Auth/HomeScreen';
import NavBar from './NavBar/NavBar';
import RegisterScreen from './Auth/RegisterScreen';
import RecipesMainScreen from './RecipesMainScreen/RecipesMainScreen';
export default function IndexApp() {
  
  const [fontsLoaded] = useFonts({
    MulishRegular: require('../../assets/fonts/Mulish-Regular.ttf'),
    MulishBold: require('../../assets/fonts/Mulish-Bold.ttf'),
    MulishLight: require('../../assets/fonts/Mulish-Light.ttf'),
    MulishMedium: require('../../assets/fonts/Mulish-Medium.ttf')
  })
  const {show} = useSelector((state) => state.navBar)

  if(!fontsLoaded) return null
  
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
            name="RecipesMain"
            component={RecipesMainScreen}
        />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        

      </Stack.Navigator>
      {show && <NavBar />}
      <StatusBar style='light' />

    </NavigationContainer>
  );
}


