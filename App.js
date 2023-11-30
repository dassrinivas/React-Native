
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EmailList from './components/EmailList';
import Camera from './components/Camera';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Message') {
                iconName = focused ? 'email' : 'email-outline';
              } else if (route.name === 'Camera') {
                iconName = focused ? 'camera' : 'camera-alt';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Message"
            component={EmailList}
            options={{ headerShown: false, tabBarLabel: '' }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{ headerShown: false, tabBarLabel: '' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;


/* npm install @react-navigation/native @react-navigation/bottom-tabs react-native-paper react-native-vector-icons

npm install @react-navigation/native-stack

npm install react react-native

npm install react-native-paper react-native-vector-icons react-native-gesture-handler react-native-reanimated

npm install react-native-gesture-handler react-native-reanimated

react-native link react-native-gesture-handler */

