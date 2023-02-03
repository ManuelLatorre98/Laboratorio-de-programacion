import { StyleSheet } from "react-native";
export const textInputStyles = StyleSheet.create({
  textInputContainer:{
    width: '80%',
    color:'white',
  },
  submitTextInput:{
    backgroundColor: '#333333',
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
    marginTop:35,
    marginLeft:280,
  },
  icon:{
    color:'#7c7979'
  },
})