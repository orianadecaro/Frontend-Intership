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
paddingTop:68,
      alignItems:'center',
      justifyContent:'center',
      color: 'rgba(29, 31, 38, 0.8)',
     

    },
    title:{
      fontSize:18,
      TextAlign:'center',
      marginTop:18,
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
      alignItems: 'center',
      justifyContent: 'center',
     marginTop:20
      
     
    },
    input:{
      backgroundColor: 'rgba(165, 174, 189, 0.1)',
      shadowColor: 'rgba(165, 174, 189, 0.2)',
      color: '#A5AEBD',
      fontSize: 16,
      width: 240,
      height: 48,
      borderRadius: 12,
      paddingLeft: 16,
      borderWidth: 2,
     marginTop:30
  },
   

  });

  export default Styles;