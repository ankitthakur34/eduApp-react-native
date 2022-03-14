import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React,{useState,useEffect} from 'react'



const UserData = () => {  

  const [userData,setUserData] = useState();
  const [isLoading,setIsLoading] = useState(true);

  const getUserData= async ()=>{
   try{
    const response =await fetch('https://thapatechnical.github.io/userapi/users.json')
    const data = await response.json();
    setUserData(data)
    
    setIsLoading(false)
   }catch(error){
     console.error();
   }
  }

  useEffect(()=>{
    getUserData();
  },[])

  return (
    <View style={styles.mainConatiner} > 
    
    <Text style={styles.mainHeader} >List Of Students Enrolled -</Text> 
    
      <FlatList data={userData}
      showsVerticalScrollIndicator={false}
         renderItem={({item})=>{
           return(
             <View  style={styles.userConatiner} >
                <Image style={styles.imgStyle}
                 source={{uri: item.image  }} 
                
                 />
                <View style={styles.userData} > 
                <Text style={[styles.nameStyle,styles.textStyle,{
                  fontSize:19,
                  fontWeight:"bold"
                }]}>{item.name} </Text>
                <Text style={[styles.emailStyle,styles.textStyle,]}>{item.email} </Text>
                <Text style={[styles.mobileStyle,styles.textStyle]}>{item.mobile} </Text>
                 </View>
             </View>
           )
         }}
       />
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatiner:{
    display:"flex",
    justifyContent:"space-evenly",
    paddingHorizontal:20,
    textAlign:"center"
  },
  mainHeader:{
    textAlign:"center",
    margin:28,
    fontSize:22,
    fontWeight:"bold"
  },
  userConatiner:{ 
    margin:20,
    paddingBottom:15,
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     
     backgroundColor:"lightgrey",
     borderRadius:7,
  },
  imgStyle:{
    width:"100%",
    height: undefined,
    aspectRatio:1,
    marginBottom:15,
  },
  userData:{
    display:"flex",
     justifyContent:"center",
     alignItems:"center",
  },
  nameStyle:{
    color:"red"
  },
  textStyle:{
    fontSize:16,
    fontWeight:"300",
    letterSpacing:2,
  },
 

})
export default UserData

