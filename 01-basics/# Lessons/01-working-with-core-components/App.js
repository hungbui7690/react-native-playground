/*
  Core Components Component Styling
  - https://reactnative.dev/docs/components-and-apis
  - in RN, there's nothing like h1-h6, p, span, div...
    -> don't support HTML tags
    -> you can use Text, View, Image, etc.


*/

import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Hello World!</Text>
      <Button title='Tap me!' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
