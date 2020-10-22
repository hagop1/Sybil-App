import React from "react";
import {
  Dimensions,
  StyleSheet, 
  Button, 
  StatusBar, 
  Alert, 
  SafeAreaView, //ios
  Text, 
  View, 
  Platform
} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'; //supports multiple device orientations
import MainScreen from "./app/screens/MainScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App(){
  // const orientation = useDeviceOrientation();
  return <LoginScreen/>;
  // return <MainScreen/>;
  //   <View
  //     style={{
  //       backgroundColor: "#fff",
  //       flex: 1,    
  //       flexDirection: "row",
  //       justifyContent: "space-evenly",
  //       alignItems: "center",
  //       top: 100,
  //     }}
  //   >
  //      {/* Large blue box */}
  //     <View 
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       // flex: 1,
  //       width: 100,
  //       height: 100,
  //     }}
  //     />
  //     <View 
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       // flex: 1,
  //       width: 100,
  //       height: 100,
  //     }}
  //     />
  //     <View 
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       // flex: 1,
  //       width: 100,
  //       height: 100,
  //     }}
  //     />
  //     {/* End Large blue box */}
  //     {/* Small white box */}
  //     <View 
  //     style={{
  //       backgroundColor: "#fff",
  //       // flex: 1,
  //       width: 75,
  //       height: 75,
        
  //     }}
  //     />
  //     <View 
  //     style={{
  //       backgroundColor: "#fff",
  //       // flex: 1,
  //       width: 75,
  //       height: 75,
  //     }}
  //     />
  //     <View 
  //     style={{
  //       backgroundColor: "#fff",
  //       // flex: 1,
  //       width: 75,
  //       height: 75,
  //     }}
  //    /> 
      {/* End Small white box */}
      {/* <View 
      style={{
        backgroundColor: "orange",
        // flex: 1,
        width: 100,
        height: 100,
      }}
      /> */}

  //  </View>
    // <SafeAreaView style={[styles.container]}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: "100%",
    //     height: "30%",
    //   }}></View>
    // </SafeAreaView>
//  );
}

// const containerStyle = {backgroundColor: "orange"};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
