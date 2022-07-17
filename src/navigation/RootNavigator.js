import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Cart from '../screens/Cart';
import Header from '../component/Header';
import RNview from '../component/RNview';
import StoreContainer from '../component/StoreContainer';
import TodaysDeals from '../component/TodaysDeals';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useHeaderHeight} from '@react-navigation/elements';

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeStack" component={MyTabs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  //new array that add an image link to the routes array
  const newRoutes = state.routes.map(route => {
    // console.log(typeof route);
    if (route.name === 'Home') {
      route.icon = require('../assets/icons/home.png');
      return route;
    } else if (route.name === 'Cart') {
      route.icon = require('../assets/icons/cart.png');
      return route;
    }
  });

  return (
    <View style={{flexDirection: 'row'}}>
      {newRoutes.map((route, index) => {
        const icon = route.icon;
        // console.log(route.name);
        // console.log(descriptors[route.key]);
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // console.log(route);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: 50,
              // backgroundColor: 'red',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={icon} style={{height: 20, width: 20}} />
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={MyTopTab} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <StoreContainer />
    </>
  );
}

function TodaysDealsScreen() {
  return (
    <>
      <TodaysDeals />
    </>
  );
}

const TopTab = createMaterialTopTabNavigator();

function MyTopTab() {
  return (
    <>
      {/* <View style={{height: 100, backgroundColor: 'red'}} /> */}
      <TopTab.Navigator
      // tabBarPosition="bottom"
      >
        <TopTab.Screen name="CLEARENCE" component={Home} />
        <TopTab.Screen name="TODAY'S DEAL" component={TodaysDealsScreen} />
        <TopTab.Screen name="ESSENTIALS" component={HomeScreen} />
      </TopTab.Navigator>
    </>
  );
}

///
const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
