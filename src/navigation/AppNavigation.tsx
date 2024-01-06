import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../components/CustomBottomTab';
import { colors } from '../theme/colors';
import Home from '@screens/home/Home';
import ProductDetails from '@screens/productDetails/ProductDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  // const inserts = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Orders'} component={Home} />
      <Tab.Screen name={'Wallet'} component={Home} />
      <Tab.Screen name={'Profile'} component={Home} />
    </Tab.Navigator>
  );
};

const BaseApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors.white},
        }}>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseApp;
