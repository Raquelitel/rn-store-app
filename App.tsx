/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { RootNavigation } from "./src/navigation/Index";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigation/>
      </GestureHandlerRootView>
    </Provider>
  );
}



export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})