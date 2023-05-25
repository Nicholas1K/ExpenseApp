import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Sizes, Weights} from './theme/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import EntryDetail from './screens/EntryDetail';
import WorkDetail from './screens/WorkDetail';
import FoodDetail from './screens/FoodDetail';
import CarDetail from './screens/CarDetail';
import Settings from './screens/Settings';
import ShoppingDetail from './screens/ShoppingDetail';
import ServiceDetail from './screens/ServiceDetail';
import HouseDetail from './screens/HouseDetail';
import AddNew from './screens/AddNew';
import {MoneyContext} from './context/MoneyContext';
import {createStackNavigator} from '@react-navigation/stack';
import AddWork from './screens/AddWork';
import AddFood from './screens/Addfood';
import AddCar from './screens/AddCar';
import AddShopping from './screens/AddShopping';
import AddService from './screens/AddService';
import AddHouse from './screens/AddHouse';

const TabMenu = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    /*la proprietà headerMode modifica l'header la parte superiore dello schermo */
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
      <HomeStack.Screen
        name="Detail"
        component={EntryDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Work Detail"
        component={WorkDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Food Detail"
        component={FoodDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Car Detail"
        component={CarDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Shopping Detail"
        component={ShoppingDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Service Detail"
        component={ServiceDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="House Detail"
        component={HouseDetail}></HomeStack.Screen>
      <HomeStack.Screen name="AddWork" component={AddWork}></HomeStack.Screen>
      <HomeStack.Screen name="AddFood" component={AddFood}></HomeStack.Screen>
      <HomeStack.Screen name="AddCar" component={AddCar}></HomeStack.Screen>
      <HomeStack.Screen
        name="AddShopping"
        component={AddShopping}></HomeStack.Screen>
      <HomeStack.Screen
        name="AddService"
        component={AddService}></HomeStack.Screen>
      <HomeStack.Screen name="AddHouse" component={AddHouse}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('Inserisci il tuo nome');
  const store = {
    items: {get: items, set: setItems},
    username: {get: username, set: setUsername},
  };
  return (
    <NavigationContainer>
      <MoneyContext.Provider value={store}>
        <TabMenu.Navigator
          tabBarOptions={{
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.disabled,
            labelStyle: {
              fontSize: Sizes.tiny,
              fontWeight: Weights.bold,
              textTransform: 'uppercase',
            },
          }}>
          <TabMenu.Screen
            name="Home"
            component={HomeStackScreen} //qui gli passiamo la funzione in cui abbiamo strutturato lo stack della home e della pagina dei dettagli
            options={{title: 'Home'}} //nome visualizzato nella tab menù
          />
          <TabMenu.Screen
            name="AddNew"
            component={AddNew}
            options={{title: 'Add New'}}
          />
          <TabMenu.Screen
            name="Settings"
            component={Settings}
            options={{title: 'Settings'}}
          />
        </TabMenu.Navigator>
      </MoneyContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ddd',
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
});

export default App;
