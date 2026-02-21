import { View, Button, StyleSheet, Linking } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Open React Native Website"
        onPress={() => Linking.openURL('https://reactnative.dev')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
});