import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import GalleryScreen from '../screens/GalleryScreen';
import LinksScreen from '../screens/LinksScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Home') iconName = 'home';
      else if (route.name === 'Form') iconName = 'create';
      else if (route.name === 'Gallery') iconName = 'images';
      else if (route.name === 'Links') iconName = 'link';
      else if (route.name === 'About') iconName = 'information-circle';

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#2563EB',
    tabBarInactiveTintColor: 'gray',
  })}
>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="Links" component={LinksScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}