// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigator from "./navigation/StackNavigator";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
          <StatusBar
            hidden={false}
            barStyle={"light-content"}
            backgroundColor={"#FFF"}
          />
          <FlashMessage position="top" />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
