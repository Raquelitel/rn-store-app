/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"
import { RootNavigation } from "./src/navigation/Index";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

function App(): JSX.Element {

  return (
  /*   <Provider store={store}> */
    /*   <GluestackUIProvider config={config}> */
    <GestureHandlerRootView style={styles.container}>
       <RootNavigation/>
    </GestureHandlerRootView>
    
    /*   </GluestackUIProvider> */
   /*  </Provider> */

  );
}



export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})