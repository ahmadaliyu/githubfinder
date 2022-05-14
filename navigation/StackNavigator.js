import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchUserScreen from "../screens/SearchUser";
import DisplayReposScreen from "../screens/DisplayRepositories";
import DisplayOrgsScreen from "../screens/DisplayOrganizations";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "screen", headerShown: false }}
      presentation="none"
    >
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="search"
        component={SearchUserScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="repos"
        component={DisplayReposScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="orgs"
        component={DisplayOrgsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
