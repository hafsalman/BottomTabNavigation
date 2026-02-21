import { View } from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <AppInput placeholder="Enter Name" />
      <AppInput placeholder="Enter Email" />
      <AppButton title="Submit" onPress={() => alert('Submitted')} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8FAFC',
    width: '100%',
  },
};