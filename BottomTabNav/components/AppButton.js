import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});