import { StyleSheet } from "react-native";
import {colors} from '../../Theme/theme'
export const textInputStyles = StyleSheet.create({
  textInputContainer:{
    width: '80%',
    color:'white',
    justifyContent:'center',
  },
  submitTextInput:{
    backgroundColor: colors.lightBackground,
    width: '100%',
    height: 50,
    borderRadius: 15,
    fontFamily: 'MulishRegular',
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 55,
    color:'white',
    marginTop: 25,
  },
  submitTextInputError:{
    borderWidth:2,
    borderColor:'red'
  },
  errorMessageText:{
    fontFamily: 'MulishRegular',
    color:'red',
    fontSize: 15,
    paddingLeft:15,
    
  },
  textInputIcon:{
    position:'absolute',
    right:0,
    paddingTop:25,
    paddingRight:20
    
  },
  icon:{
    color:colors.iconColorGrayLight
  },
})