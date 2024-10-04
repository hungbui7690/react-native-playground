/*
  Optimizing Lists with FlatList
  - for ScrollView, when we have hundreds or thousands or more items -> it will render all of them at once -> performance issues
  - FlatList -> more performant
    -> renders lazily
    -> it has threshold -> when user get closer to the end of the list, it will load more items


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  - this function will run every time the list is rendered
    -> itemData is an object that contains the data for each item in the list -> itemData.item & itemData.index
        renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}


**************************

  2 ways to add unique key in FlatList 
  - Solution 1: need to have key property in the object
    { text: enteredGoalText, <key>: Math.random().toString() },

  - Solution 2: in case we don't have key property
    { text: enteredGoalText, <id>: Math.random().toString() },
    -> this is what we get when we use external API -> id -> with this setup, we need to use keyExtractor
          keyExtractor={(item, index) => {
            return item.id
          }}


*/

import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // # change the format of the array to array of objects -> courseGoals = [{id, text}]
    setCourseGoals((cur) => [
      ...cur,
      { text: enteredGoalText, id: Math.random().toString() },
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
      <View style={styles.goalsContainer}>
        {/* # self closing FlatList */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // itemData.index & itemData.item
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id // extract id from the object and use as key
          }}
        />
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
