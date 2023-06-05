import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Pages/Home/Home';
import { History } from './Pages/History/History';
import { Account } from './Pages/Account/Account';
import { SafeAreaView } from 'react-native';
import Navbar from './Components/Navbar/Navbar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
        <SafeAreaView>
        <Navbar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
