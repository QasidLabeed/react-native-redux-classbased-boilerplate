import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import ForgotPassword from "./src/screens/ForgotPassword";
import Dashboard from "./src/screens/Dashboard";
import SendToken from "./src/screens/SendToken";
import DrawerNavigator from "./src/screens/DrawerNavigator";
import DespositToken from "./src/screens/DepositToken";
import { createStore } from "redux";
import { Provider } from "react-redux";
import storeUP from "./src/Store/Store";
import DepositToken from "./src/screens/DepositToken";
import Icon from "react-native-vector-icons/Entypo";
import HelperHeader from "./src/screens/Header";
import SignUpNew from "./src/screens/SignUpNew";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Navigator = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        title: "DIGI Wallet",
        headerLeft: () => null,
      },
    },
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {
        title: "",
      },
    },
    SignUpNewScreen: {
      screen: SignUpNew,
      navigationOptions: {
        title: "",
      },
    },
    ForgotPasswordScreen: {
      screen: ForgotPassword,
      navigationOptions: {
        title: "",
      },
    },

    DrawerNavigatorScreen: {
      screen: DrawerNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: () => <HelperHeader navigation={navigation} />,
        };
      },
    },
  },
  {
    initialRouteName: "SignUpNewScreen",
    defaultNavigationOptions: {
      title: "DIGI Wallet",
      headerStyle: {
        backgroundColor: "#2a6f88",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal",
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
