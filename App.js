import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Моё первое приложение! 🚀</Text>
      
      <Text style={styles.counter}>{count}</Text>
      
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Сброс" onPress={() => setCount(0)} />
        <Button title="+" onPress={() => setCount(count + 1)} />
      </View>
      
      <Text style={styles.hint}>Нажимайте на кнопки 👆</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  hint: {
    color: '#666',
    fontSize: 14,
  },
});
