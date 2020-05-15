import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Block, Text } from "../components";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const Signup = () => {
  // ({ navigation }) => {
  const { state } = useContext(AuthContext);
  console.log("state", state.hello);
  return (
    <Block>
      <NavigationEvents />
      <Block center middle>
        <Text h1 primary>
          Hello World
        </Text>
      </Block>
    </Block>
  );
};

Signup.navigationOptions = () => {
  return {
    //header: null,
  };
};

export default Signup;
