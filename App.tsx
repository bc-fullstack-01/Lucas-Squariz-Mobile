import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import PostScreen from './screens/PostScreen';
import ProfilesScreen from './screens/ProfilesScreen';
import RegisterScreen from './screens/RegisterScreen';

import { Provider as AuthContext } from './context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const token = null;

  return (
    <SafeAreaProvider>
      <AuthContext>
        <NavigationContainer>
          {token === null ? (
            <Stack.Navigator
              screenOptions={({ route, navigation }) => ({
                headerShown: false
              })}
            >
              <Stack.Screen name='Register' component={RegisterScreen} />
              <Stack.Screen name='Login' component={LoginScreen} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator>
              <Tab.Screen name='Home' component={HomeScreen} />
              <Tab.Screen name='Profile' component={ProfileScreen} />
              <Tab.Screen name='Profiles' component={ProfilesScreen} />
              <Tab.Screen name='Post' component={PostScreen} />
              <Tab.Screen name='CreatePost' component={CreatePostScreen} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </AuthContext>
    </SafeAreaProvider>
  );
}
