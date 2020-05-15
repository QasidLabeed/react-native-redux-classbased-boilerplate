# react-native-boilerplate

This repository provides a Biolerplate code to start a new project with React Native. It uses context hook to create a global state.

## Predefined Components

The components folder contains predefined components which uses react native elements to provide styling with predefined values

```javascript
<Block>
  <NavigationEvents />
  <Block center middle>
    <Text h1 primary>
      Hello World
    </Text>
  </Block>
</Block>
```

> Block is a custom component that uses `View` Element

- Other Custom components include `Text`, `Badge`, `Button`, `Card`,`Divider`, `Input`, `Progress`,`Switch`

## Context Hook

This uses `createContext` to create a global provider state in the file `/src/context/index.js`.
This provides a **Global State** and wrapping each `context` in `App.js` file.
