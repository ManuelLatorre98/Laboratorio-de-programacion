import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";

export const recipesStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(33,32,32,255)',
    alignItems: 'center',
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
    borderBottomColor:'rgba(50,51,50,255)',
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