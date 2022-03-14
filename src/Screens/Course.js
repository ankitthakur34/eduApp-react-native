import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import CourseData from '../Data/CourseData'



const Course = ({navigation}) => { 
  const courseCard=({item})=>{
       return(
         <View style={styles.mainContainer}>
           <View style={styles.cardContainer}>
             <Image style={styles.imageStyle}
               source={item.image}
               resizeMode="contain"
              /> 
              <Text style={styles.headerText}>{item.title} </Text>
              <Text style={styles.description}>{item.description} </Text>
            <View style={styles.btnConatiner}>
            <TouchableOpacity style={styles.btnStyles} 
            onPress={()=>navigation.navigate("CourseDetails",{
              courseId: item.id,
            } ) } >
              <Text style={styles.btntext} >Course Details</Text>
            </TouchableOpacity>
            </View>
           </View>
         </View>
       )
  }
  return (
    <View>
      <FlatList 
      keyExtractor={(key)=>key.id}
       data={CourseData} 
      renderItem= {courseCard}  />
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle:{
    width:"100%",
    height: undefined,
    aspectRatio:1,
    borderRadius:7,
  },
  mainContainer:{
    paddingHorizontal:10,
    // display:"flex",
    // justifyContent:"space-evenly",
    textAlign:"center",
  },
  cardContainer:{
    backgroundColor:"white",
    textAlign:"center",
    padding:20,
 
    margin:20,
    borderRadius:7,

  },
  headerText:{
    textAlign:"center",
    fontSize:21,
    fontWeight:"600",
    marginBottom:7,

  },
  description:{
    textAlign:"left",
  },
  btnConatiner:{
   
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },
  btnStyles:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginVertical:20,
    paddingHorizontal:16,
    paddingVertical:8,
    backgroundColor:"violet",
    borderRadius:5,
   
  },
  btntext:{
    fontWeight:"800",
    fontSize:16

  }

})
export default Course

