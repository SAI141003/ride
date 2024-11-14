import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { ActivityScreen } from "../screens/ActivityScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { ComparisonScreen } from "../screens/ComparisonScreen";

const StackNavigator = stackNavigatorFactory();

export function MainStack() {
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000000"
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <StackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "RideShare"
          }}
        />
        <StackNavigator.Screen
          name="Services"
          component={ServicesScreen}
          options={{
            title: "Our Services"
          }}
        />
        <StackNavigator.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            title: "Your Rides"
          }}
        />
        <StackNavigator.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: "Profile"
          }}
        />
        <StackNavigator.Screen
          name="Comparison"
          component={ComparisonScreen}
          options={{
            title: "Book a Ride"
          }}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
}