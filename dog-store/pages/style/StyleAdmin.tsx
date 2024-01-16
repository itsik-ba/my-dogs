import { StyleSheet } from "react-native";

export const styleAdmin = StyleSheet.create({
 container: {
  
 
  
 },
 header:{
  textAlign: "center",
  margin:18,
  fontSize: 24,
  color:"red",
  fontWeight: "bold",
},
inputText:{
padding:6,
backgroundColor: '#d3d3d3',
margin:10,
borderWidth:1,
textAlign: "center",
borderColor: "red",
width:300,
alignSelf: "center",

},
button:{
    borderRadius:18,
    borderWidth: 2,
    padding:4,
    margin:4,
    width:150,
    alignSelf: "center",
    borderColor:"pink",

},

// the list of items

listContainer:{
  alignSelf: "center",
  alignItems: 'center',
  width:250,
  height:300,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  padding:5,
  },

listFonts:{
  fontWeight: 'bold',
  fontSize:18,
  padding:8,
},

showList:{
  margin:50,
  },


  image:{
  width:150,
  height:150,
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
  color: 'blue'
},

buttonContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 8,
},








})