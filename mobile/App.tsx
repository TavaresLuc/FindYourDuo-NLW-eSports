import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Duo</Text>

      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Send 4" />
      <Button title="Hello World" />

      <StatusBar style="auto"  backgroundColor="blue"/>
    </View>
  );
}

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
      {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 22
  }
});
