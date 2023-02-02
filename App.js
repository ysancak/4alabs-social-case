import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tabbar from './app/components/Tabbar'

import Splash from './app/screens/Splash'
import Home from './app/screens/Home'
import Conversations from './app/screens/Conversations'
import Add from './app/screens/Add'
import Likes from './app/screens/Likes'
import Profile from './app/screens/Profile'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBar={props => <Tabbar {...props} />}  screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{  }} />
        <Tab.Screen name="Conversations" component={Conversations} options={{  }} />
        <Tab.Screen name="Add" component={Add} options={{  }} />
        <Tab.Screen name="Likes" component={Likes} options={{  }} />
        <Tab.Screen name="Profile" component={Profile} options={{  }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}