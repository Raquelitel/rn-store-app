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
import { AuthProvider } from "./src/store/auth/context";

function App(): JSX.Element {

  return (
    <AuthProvider>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigation/>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}



export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})