import { StyleSheet, Text, View ,Image,TouchableOpacity,Linking} from 'react-native'
import React from 'react'



const About = () => {
  return ( 
    <View>
    <View style={styles.mainContainer} >
      <View style={styles.aboutConatiner}>
      <View style={styles.aboutHeader}>

        <Text style={styles.mainHeader}>I Am Ankit Singh Thakur</Text>
        <Text style={styles.subHeader}>React Native Developer</Text>
        <Image style={styles.imgStyle} 
          source={require('../../assets/andDev.jpg')}

         />
         </View>
         <Text style={styles.desc}>The TwelveMonkeys ImageIO library is intended as an extension to the Java ImageIO API, with support for a larger number of formats.. Most of the time, the code will look the same as</Text>
     
      </View>
      <View style={styles.iconContainer} >
              <TouchableOpacity  onPress={()=> Linking.openURL("") } >
                <Text style={styles.iconStyle}>Instagram</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> Linking.openURL("") } >
                <Text style={styles.iconStyle}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> Linking.openURL("") } >
                <Text style={styles.iconStyle}>Youtube</Text>
              </TouchableOpacity>
         </View>
         
    </View>

    </View>
  )
}
const styles = StyleSheet.create({
mainContainer:{
  marginHorizontal:20,
  
},
aboutConatiner:{
  padding:20,
  
  
},
aboutHeader:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  
    
},
 mainHeader:{
   fontSize:22,
   fontWeight:"bold",
   
   marginVertical:10,
},
 subHeader:{
   fontSize:19,
   fontWeight:"bold",
   color:"lightblue",
   marginVertical:10,
},
imgStyle:{
  width:170,
  height:170,
  borderRadius:100,
  marginVertical:10,
},
desc:{
  marginVertical:40,
  marginLeft:10,
  fontSize:18,
  lineHeight:25,
  textAlign:"left",

},
iconContainer:{ 
  padding:10,
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:"auto",
 
  borderColor:"grey",
},
iconStyle:{
  fontSize:18,
  color:"red",
 
}
})
export default About

