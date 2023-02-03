import { View } from "react-native";
import { navBarStyles } from "./styles";
import NavButton from "./NavButton";

export default function NavBar(){
  
  return(
    <View style = {navBarStyles.navContainer}>
      <NavButton iconName="faUtensils" buttonNumber={1}/>
      <NavButton iconName="faStar"  buttonNumber={2}/>
      <NavButton iconName="faPlus"  buttonNumber={3}/>
      <NavButton iconName="faHeart" buttonNumber={4}/>
      <NavButton iconName="faUser" buttonNumber={5}/>
    </View>
  )
}