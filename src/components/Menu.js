import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Course") } >
        <Text>Course</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("UserData") } >
        <Text>UserData</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("About") } >
        <Text>About</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Contact") } >
        <Text>Contact</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    menuContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderTopWidth:0.6,
        padding:8,
        

    },
    btnStyle:{
       
        padding:10,
        borderRadius:6,
    
    }
})
export default Menu

