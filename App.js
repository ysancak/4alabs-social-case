import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Tabbar from './app/components/Tabbar'

import Splash from './app/screens/Splash'
import Home from './app/screens/Home'
import Conversations from './app/screens/Conversations'
import Add from './app/screens/Add'
import Likes from './app/screens/Likes'
import Profile from './app/screens/Profile'

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator tabBar={props => <Tabbar {...props} />}  screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{  }} />
        <Tab.Screen name="Conversations" component={Conversations} options={{  }} initialParams={{ stack: 'Conversations_Stack' }} />
        <Tab.Screen name="Add" component={Add} options={{  }} />
        <Tab.Screen name="Likes" component={Likes} options={{  }} />
        <Tab.Screen name="Profile" component={Profile} options={{  }} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator tabBar={props => <Tabbar {...props} />}  screenOptions={{ headerShown: false }} initialRouteName="TabNavigation">
      <Stack.Screen name="Splash" component={Splash} options={{  }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{  }} />
      <Stack.Screen name="Conversations_Stack" component={Conversations} options={{  }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}