/*
  Styling
  - cannot use border: 1px solid black
  - use this borderWidth: 1 + borderColor: 'black'


*/

import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    // internal styling
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another piece of text!</Text>
      </View>

      {/* inline styling */}
      <Text
        style={{
          margin: 16,
          padding: 16,
          borderWidth: 2,
          borderColor: 'blue',
        }}
      >
        Hello World!
      </Text>
      <Button title='Tap me!' />
    </View>
  )
}

// #
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },
})
