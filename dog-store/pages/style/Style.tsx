import { StyleSheet } from "react-native";

 export const globalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:50,
      padding:10,
     
    },
    
    logo:{
     color:'#f3452f',
     fontSize:30,
     textAlign: 'center',
    },

    navbar: {
      padding:30,
      flexDirection:"row",
       gap:40,
    },

    compStyle:{
      fontSize:22,
      color: "black",
      fontWeight: "bold",
   },
   card:{
    alignSelf: "center",
    padding:5,
    margin:10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width:250,
    height:300,
    },

    card2:{
      alignSelf: "center",
      padding:5,
      margin:50,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width:250,
      height:350,
      },

    cardText:{
      marginBottom:10,
      paddingBottom:10,
      textAlign: "center",
      fontSize:20,
      fontWeight: "bold",
     },

   imageStyle:{
    width:200,
    height:200,
    resizeMode: 'contain',
    },

    input:{

    },

  });