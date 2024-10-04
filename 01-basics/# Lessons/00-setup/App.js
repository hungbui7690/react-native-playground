/*
  What is React Native
  - pic
  - A native app is an app that is developed for one particular operating system (e.g., iOS or Android) only
  - native apps -> not IOS or Android

  - IOS: 
    # Swift
    # Objective-C
  - Android:
    # Java
    # Kotlin

  - react-native is like <react-dom> in react js


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Expo
  - 2 ways to build native apps
    # Expo CLI
      - sits on top of React Native -> hide the complexity
    # React Native CLI
      - full set of tools
      - hard to setup 


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup
  ~~ npx create-expo-app --template blank playground
  ~~ npm start
  - Phone: install "Expo Go" 
    -> run our app in real device
    -> scan QR code

    -> npm run android
    -> npm run ios
    -> npm run web


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Simulator 
  - pic
  - Android Studio
  - Windows machine does not have <XCode> -> don't have IOS Simulator  


*/

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    // 2. use StyleSheet
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style='auto' />
    </View>
  )
}

// 1. create Stylesheet Object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
