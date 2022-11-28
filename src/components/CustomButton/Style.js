import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    btnContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'rgba(47, 123, 255, 0.5)', 
    },

    btnMain:{
      backgroundColor: '#2F7BFF',
      borderRadius: 12,
      width:180,
      height:48,
      elevation:5, 
      shadowColor:'rgba(47, 123, 255, 0.5)'
      
    },
    btntextIconContainer:{  
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'row',
      paddingTop:12

   
    },
    btnText:{
      color:'#FFFFFF',
      fontSize: 14,
   
    },
    btnIcon:{
      paddingLeft:15,
      paddingTop:5
    }

  });

  export default Styles;