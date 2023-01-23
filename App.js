import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddChatScreen from './screens/AddChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#164BED' },
  headerTitleStyle: { color: '#fff' },
  headerTintColor: '#fff'
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
