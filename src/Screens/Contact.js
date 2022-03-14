import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'
import Checkbox from 'expo-checkbox'




const Contact = ({navigation}) => { 

  const [userName,SetUserName] = useState("")
  console.log(userName)
  const [userEmail,SetUserEmail] = useState("")
  const [userPhone,SetUserPhone] = useState("")
  const [userInfo,SetUserInfo] = useState("") 


  const submit=()=>{
    if(!userName && !userEmail && !userPhone && !userInfo){
      alert("plz fill all the data")
    } else{
      alert(`thankyou ${userName} `)
      navigation.navigate("Home")
    }
  }


  const [agree,Setagree] = useState(false); 

  return (
    <View  style={styles.mainConatiner} >
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.mainDesc}>You Can Reach Us Anytime via Ankit@gmail.com</Text> 
      <View style={styles.inputConatiner}>
           <Text style={styles.labels} >enter your name-</Text>
           <TextInput style={styles.inputStyle}  
           value={userName}
           onChangeText={(name)=> SetUserName(name) }
             placeholder={"ankit thakur"}
           />
      </View>
      <View style={styles.inputConatiner}>
           <Text style={styles.labels} >enter your email-</Text>
           <TextInput style={styles.inputStyle}  
             placeholder={"ankithakur@gmail.com"}
             value={userEmail}
             onChangeText={(email)=> SetUserEmail(email) }
           />
      </View>
      <View style={styles.inputConatiner}>
           <Text style={styles.labels} >enter your moblie-</Text>
           <TextInput style={styles.inputStyle}  
             placeholder={"1234567890"}
             value={userPhone}
             onChangeText={(phone)=> SetUserPhone(phone) }
           />
      </View>
      <View style={styles.inputConatiner}>
           <Text style={styles.labels} >tell me about yourself-</Text>
           <TextInput style={[styles.inputStyle, styles.multilineStyle ]}  
             numberOfLines={5}
             multiline={true}
             value={userInfo}
             onChangeText={(info)=> SetUserInfo(info) }
           />
      </View> 
      <View style={styles.checkConatiner}>
        <Checkbox  style={[styles.checkbox]}
          value={agree}
          onValueChange={()=> Setagree(!agree) }
          color={ agree?"orange": undefined }
         /> 
         <Text style={styles.checkText}>i agree to all T&C</Text>
      </View> 
      <View style={styles.btnConatiner}>
         <TouchableOpacity  style={[styles.btnStyle ,{
           backgroundColor: agree?"orange": "grey"
         } ]} 
          onPress={submit }
          disabled={!agree}
          > 
         <Text  style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatiner:{
    margin:20,
   

  },
  mainHeader:{
    textAlign:"center",
    fontSize:17,
    fontWeight:"bold",
    color:"purple",
    

  },
  mainDesc:{
    marginVertical:10,
    textAlign:"center",
    fontSize:14,
    
    color:"violet",
  },
  inputConatiner:{
    backgroundColor:"white",
    margin:10, 
    padding:15,
    borderRadius:6,
  },
  labels:{
    textTransform:"capitalize",
  },
  inputStyle:{
    marginTop:4,
    width:"100%",
    height:35,
    borderWidth:0.4,
   paddingHorizontal:6,
    borderRadius:6,
    borderColor:"purple",
  },
  multilineStyle:{
     height:70,
  },
  checkConatiner:{ 
    marginTop:20,
    display:"flex",
    flexDirection:"row", 
    justifyContent:"center",
    

  },
  checkText:{
    marginLeft:10,
    textTransform:"capitalize",
  },
  btnConatiner:{
    marginTop:20,
    display:"flex",
    flexDirection:"row", 
    justifyContent:"center",
  },
  btnStyle:{
    width:99,
    height:36,
    backgroundColor:"violet",
    color:"white",
    borderRadius:6,
    display:"flex",
    flexDirection:"row", 
    justifyContent:"center",alignItems:"center",
 
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
    letterSpacing:1.5,
    textTransform:"uppercase",
  },
})
export default Contact

