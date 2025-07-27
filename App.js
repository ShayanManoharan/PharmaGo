import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import OnboardingScreen from './src/screens/OnboardingScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScheduleDeliveryScreen from './src/screens/ScheduleDeliveryScreen';
import DriversScreen from './src/screens/DriversScreen';
import MessagingScreen from './src/screens/MessagingScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import OrderConfirmationScreen from './src/screens/OrderConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' }
          }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ScheduleDelivery" component={ScheduleDeliveryScreen} />
          <Stack.Screen name="Drivers" component={DriversScreen} />
          <Stack.Screen name="Messaging" component={MessagingScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 