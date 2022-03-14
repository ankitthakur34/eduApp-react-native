import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import CourseData from '../Data/CourseData';

const CourseDetails = ({navigation,route}) => { 

    const id = route.params.courseId;

    const selectedCourses = CourseData.find((elem)=>{
    return( id===elem.id )
    })

  return (
    
        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <Image style={styles.imageStyle}
              source={selectedCourses.image}
              resizeMode="contain"
             /> 
             <Text style={styles.headerText}>{selectedCourses.title} </Text>
             <Text style={styles.description}>{selectedCourses.description} </Text>
             <View style={styles.courseNum}> 
             <Text  style={styles.coursesHeader}>Courses-</Text>
             <Text style={styles.coursesNu} >{selectedCourses.course1} </Text>
             <Text style={styles.coursesNu}>{selectedCourses.course2} </Text>
             <Text style={styles.coursesNu}>{selectedCourses.course3} </Text>
             </View>
           <View style={styles.btnConatiner}> 
           <TouchableOpacity style={styles.btnStyles} 
           onPress={()=>navigation.navigate("Course" ) } >
             <Text style={styles.btntext} >Go Back</Text>
           </TouchableOpacity>
           </View>
          </View>
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
      } ,
      courseNum:{
        marginVertical:7,
        display:"flex",
        alignItems:"center",
      },
      coursesNu:{
          marginVertical:4,
          fontSize:18,
          fontWeight:"bold",
          textTransform:"capitalize",
          color:"grey",
      } ,
      coursesHeader:{
          
          fontSize:29,
          fontWeight:"bold",
          textTransform:"capitalize",
      }  
})
export default CourseDetails

