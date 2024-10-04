/*
  ScrollView
  - https://reactnative.dev/docs/scrollview#alwaysbouncehorizontal-ios
  - some props are just in IOS only, while others are in Android only


*/

import { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      {/* # need to wrap <View> in order to make the flex: 5 works fine */}
      <View style={styles.goalsContainer}>
        {/* # use <ScrollView> instead of <View> */}
        <ScrollView>
          {courseGoals.map((goal, idx) => (
            // # wrap view here in order to apply borderRadius
            <View key={idx} style={styles.goalItem}>
              {/* # */}
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
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

  // #
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // we want to apply this to <Text> component -> but in ios, no borderRadius will be applied -> need wrap in View component, then apply borderRadius there
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
