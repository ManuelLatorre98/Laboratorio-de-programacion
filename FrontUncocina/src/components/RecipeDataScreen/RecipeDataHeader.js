import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Calification from "../Calification/Calification";
import { headerStyles, recipeDataScreenStyles } from "./styles";


export default function RecipeDataHeader(props){
  const { container, titleContainer, backIcon,iconContainer, favIcon, califIcon, titleText } = headerStyles
  const {handleMakeCalif} = props
  return(
      <View style={container}>
        <View style={titleContainer}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faAngleLeft} size={25} style={backIcon}/>
          </TouchableOpacity>
          
          <Text style={titleText} numberOfLines={2}>Maxican potatoes</Text>

          <TouchableOpacity>
            <FontAwesomeIcon icon={faHeart} size={25} style={favIcon}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleMakeCalif}>
          <Calification />
        </TouchableOpacity>
      </View>
  )
}