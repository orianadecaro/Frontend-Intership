import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
    formContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width:288,
      height:404,
      backgroundColor:'#FFFFFF',
      borderRadius:20,
      marginHorizontal: 46,
      marginBottom:118
    
    },
   
    textContainer:{
      marginTop:8,
      alignItems:'center',
      justifyContent:'center',
      color: 'rgba(29, 31, 38, 0.8)'

    },
    title:{
      fontSize:18,
      TextAlign:'center',
      marginTop:28,
      fontWeight:'600',
      lineHeight:32
    },
    subtitle:{
      fontSize:14,
      textAlign:'center',
      justifyContent:'center',
      width: 240,
      marginTop:4
    },
    inputContainer:{
      paddingBottom:20,
     
    },
    

  });

  export default Styles;