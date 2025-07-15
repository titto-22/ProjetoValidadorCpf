import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import HomeScreen from './screens/HomeScreen';
import CadastrarScreen from './screens/CadastrarScreen';
import ListaScreen from './screens/ListaScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import SobreScreen from './screens/SobreScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
        <Stack.Screen name="Lista" component={ListaScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
