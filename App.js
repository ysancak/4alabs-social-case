import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './app/store'
import { Provider } from 'react-redux'

import Tabbar from './app/components/Tabbar'

import Splash from './app/screens/Splash'
import Home from './app/screens/Home'
import Conversations from './app/screens/Conversations'
import Messaging from './app/screens/Messaging';
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
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator tabBar={props => <Tabbar {...props} />}  screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{  }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{  }} />
      <Stack.Screen name="Conversations_Stack" component={Conversations} options={{  }} />
      <Stack.Screen name="Messaging" component={Messaging} options={{  }} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}