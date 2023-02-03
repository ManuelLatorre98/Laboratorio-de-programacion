import { StyleSheet } from "react-native";
export const navBarStyles = StyleSheet.create({
  navContainer:{
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'rgba(50,51,50,255)',
    justifyContent: 'center',
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    
    zIndex:1
  },

  navButton:{
    flex:1,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    //borderWidth:1,
    //borderColor:'white'
  },
  navIconSelected:{
    color:'rgba(254,228,152,255)'
  },
  navIconNotSelected:{
    color:'white'
  }
})