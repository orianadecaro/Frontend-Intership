import { Dimensions, StyleSheet } from 'react-native';


const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;


const Styles = StyleSheet.create({
    bgContainer: {
      flex:3,
      width:ScreenWidth,
      height:ScreenHeight,
      alignItems: 'center', 
      justifyContent: 'center' 
  
    },
    bgLogoContainer:{
    marginTop:46,
     marginHorizontal:69,
     marginBottom:100,
     marginLeft:80,
     width: 203.25,
     height: 34.44,
    },
    logo1:{
       alignItems:'center',
        justifyContent:'center', 
        marginTop:46,
        width: 191.03,
        height: 27.95,
    },
    logo2:{
        alignItems:'center',
         justifyContent:'center', 
         marginTop:-34,
         width: 203.25,
         height: 34.44,
         marginLeft: -15
     }

  });

  export default Styles;