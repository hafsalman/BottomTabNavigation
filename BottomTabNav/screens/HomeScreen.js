import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>React Native Bottom Tab App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Full height
    justifyContent: 'center', // Vertical center
    alignItems: 'center',     // Horizontal center
    padding: 20,              // Padding around content
    backgroundColor: '#F8FAFC' // Soft modern background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',         // Dark text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
  },
});