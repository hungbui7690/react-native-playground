/*
  Improving The Layout
  - React Native use flexbox for layout by default
  - Button does not have <style> prop
    -> https://reactnative.dev/docs/button


  - flex: number -> flex basis
      inputContainer: {
        flex: 1,
      },
      goalsContainer: {
        flex: 5,
      },


*/

import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  )
}

// #
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // to make the children use the flex prop -> need to have this line on the parent
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
})
