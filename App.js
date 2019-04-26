import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Add: {screen: AddNewContactScreen},
    View: {screen: ViewContactScreen},
    Edit: {screen: EditContactScreen}
  }, 
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: '#43BE31',
        
      },
      headerTitleStyle: {
        color: "#fff",
        
      }
    }
  }
)

const App = createAppContainer(MainNavigator);
export default App;