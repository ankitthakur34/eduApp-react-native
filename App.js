import React from "react";
import { View } from "react-native";
import Home from "./src/Screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from "./src/Screens/About";
import Contact from "./src/Screens/Contact";
import Course from "./src/Screens/Course";
import UserData from "./src/Screens/UserData";
import CourseDetails from "./src/Screens/CourseDetails";

const App=()=>{

  const Stack = createNativeStackNavigator();
  return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" >
{/* <Stack.Screen name="Home" component={Home} /> */}

<Stack.Screen name="Home" options={{
  headerShown:false,
}} >
  {(props)=>{ 
    return <Home channelName={"Ankit Thakur"} {...props} />
  }}
</Stack.Screen>

{/* //Course screen */}
<Stack.Screen name="Course" component={Course} options={{
  headerTitleStyle:{
    fontSize:25,
    color:"blue",
  },
  headerTitle: "Courses",
  headerTitleAlign:"center",
}} />

{/* //UserData screen */}
<Stack.Screen name="UserData" component={UserData } options={{
  headerTitleStyle:{
    fontSize:25,
    color:"blue",
  },
  
  headerTitleAlign:"center",
}}/>

{/* //About screen */}
<Stack.Screen name="About" component={About} options={{
  headerTitleStyle:{
    fontSize:25,
    color:"blue",
  },
  
  headerTitleAlign:"center",
}}/>

{/* //Contact screen */}
 <Stack.Screen name="Contact" component={Contact } options={{
  headerTitleStyle:{
    fontSize:25,
    color:"blue",
  },
  headerTitleAlign:"center",
}}/>

 <Stack.Screen name="CourseDetails" component={CourseDetails } options={{
  headerTitleStyle:{
    fontSize:25,
    color:"blue",
  },
  headerTitleAlign:"center",
}}/>

     </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;