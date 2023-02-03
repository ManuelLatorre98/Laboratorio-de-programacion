import { Image } from "react-native";
import { homeStyles } from "./styles";

export default function Logo() {
  return(
    <Image source={{
      uri:'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839124/uncocina/Uncocina_gon7t0.png'
    }}
    style={homeStyles.logo}
    />
  )
}