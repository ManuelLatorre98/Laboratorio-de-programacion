import { StyleSheet } from "react-native";
import {colors} from '../../Theme/theme'
export const recipesStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.darkBackground,
    alignItems: 'center',
  },
  recipeScroll:{
    width:'95%',
    marginTop:20
  }
})

export const helloSlideStyles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexShrink:0,
    width:"100%",
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor:colors.lightBackground,
  },
  textContainer:{
    maxWidth:'75%',
    width:'100%',
    
  },
  userText: {
    fontFamily: 'MulishBold',
    fontSize: 30,
    color:"white",
    paddingRight:10
  },
  messageText:{
    fontFamily: 'MulishRegular',
    fontSize: 17,
    color:'gray',
    marginTop:5
  },
  logo:{
    width:80, 
    height:80,
  }

})