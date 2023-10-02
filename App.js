import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListWords from "./src/pages/ListWords";
import Meanings from "./src/pages/Meanings";


const headerOptions = {
         
  headerStyle: {
    backgroundColor: '#3B82F6',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  
}

const Stack = createNativeStackNavigator();

export default () => {
  
  return (
    <NativeBaseProvider >
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List of Words"  component={ListWords}  options={headerOptions}/>
        <Stack.Screen name="Meanings"  component={Meanings} options={headerOptions}/>
      </Stack.Navigator>
      </NavigationContainer>
     
    </NativeBaseProvider>
  );
};
