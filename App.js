import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignUp from "./src/screens/SignUp";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Navigator = createStackNavigator(
  {
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {
        title: "Hello World",
        headerLeft: () => null,
      },
    },
  },
  {
    initialRouteName: "SignUpScreen",
    defaultNavigationOptions: {
      title: "Test Application",
      headerStyle: {
        //backgroundColor: "#2a6f88",
      },
      //headerTintColor: "#fff",
      headerTitleStyle: {
        //fontWeight: "normal",
      },
    },
  }
);

const App = createAppContainer(Navigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
