import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";

export const categorySlideStyles = StyleSheet.create({
  container:{
    flexDirection:'column',
    width:'100%',
    alignItems:'center',
    paddingLeft:20,
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop:40,
    paddingRight:40
  },
  categoryText:{
      fontFamily: 'MulishBold',
      fontSize: 30,
      color:"white",
      paddingRight:10
  },
  icon:{
    marginTop:10,
    color:'rgba(254,228,152,255)'
  }
})

export const categoryButtonStyles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:50,
    maxWidth:200,
    justifyContent:'space-between',
    alignItems:'center',
    overflow:'hidden',
    paddingLeft:20,
    paddingRight:20,
    marginRight:15,
    borderRadius:15,
    backgroundColor:'rgba(50,51,50,255)',
    
  },
  buttonText:{
      fontFamily: 'MulishMedium',
      fontSize: 18,
      color:"gainsboro",
  },
  cross:{
    marginLeft:15,
    marginTop:3,
    color:'gainsboro',
  },
  scroll:{
    flexDirection:'row',
    

  }

})