import { StyleSheet } from "react-native";

export const styleAdmin = StyleSheet.create({
 container: {
 height:"100%",
 },
 header:{
  textAlign: "center",
  margin:4,
  fontSize: 20,
  color:"red",
  fontWeight: "bold",
},
inputText:{
padding:4,
backgroundColor: '#d3d3d3',
margin:8,
borderWidth:1,
textAlign: "center",
borderColor: "red",
width:300,
alignSelf: "center",

},
button:{
    borderRadius:18,
    borderWidth: 2,
    padding:3,
    margin:3,
    width:130,
    alignSelf: "center",
    borderColor:"pink",
    
},

// the list of items

listContainer:{
  alignSelf: "center",
  alignItems: 'center',
  width:250,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  padding:4,
  margin:6,
  
  },

listFonts:{
  fontWeight: 'bold',
  fontSize:15,
  padding:8,
},

showList:{
  margin:50,
  },


  image:{
  width:180,
  height:160,
  resizeMode:"contain"
 },

icons:{
width:30,
height:30,
marginRight: 50,
marginLeft:50,
},
 deleteUpdate:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding:20,
 },
 
textButton:{
  textAlign: 'center', 
  color: 'blue',
 
},

buttonContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 8,
  alignSelf: 'center',
},








})