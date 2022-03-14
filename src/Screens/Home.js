import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

import { 
    Aldrich_400Regular 
  } from '@expo-google-fonts/aldrich'

import { useFonts } from '@expo-google-fonts/aldrich'
  import AppLoading from 'expo-app-loading'

const Home = (props) => { 

    let [fontsLoad] = useFonts({
        Aldrich_400Regular 
    })

    if(!fontsLoad){
        return <AppLoading/>
    }

  return (
    <View style={styles.mainContainer} >
    <View style={styles.homeTop} >
        <Image style={styles.headerImage}
        resizeMode="contain"
        source={require("../../assets/homeLogo.jpg")}
         />
         <View style={styles.dataContainer}>
             <Text style={styles.textHeader} >Welcome To</Text>
             <Text style={[styles.textHeader,
              {
                  fontSize:33,
                  color:"orange",
              }
             ]} > {props.channelName} </Text>
             <Text style={styles.paraStyle}>Download and use 10,000+ studying stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels</Text>
         </View>
    </View>
    <View>
        <Menu/>
    </View>

    </View>
  )
}
const styles = StyleSheet.create({ 
    mainContainer:{ 
        height:"100%",
        display:"flex",
        justifyContent:"space-between",
        paddingHorizontal:20,
        textAlign:"center",
    },
    homeTop:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
    },
    headerImage:{
        height: undefined,
        width:"100%",
        aspectRatio:1,
        display:"flex",
        alignItems:"stretch",
        marginTop:50,
        borderRadius:20,
     
    },
    textHeader:{
        textAlign:"center",
        fontSize:26,
        textTransform:"uppercase",
    },
    paraStyle:{
        textAlign:"left",
        marginTop:30,
        paddingBottom:30,
        lineHeight:26,
        fontFamily:"Aldrich_400Regular ",
    }

   
})

export default Home

