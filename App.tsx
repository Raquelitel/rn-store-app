/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Login from "./src/pages/Login";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"
import { Text, View } from "react-native";

import {store} from "./src/store"
import {Provider} from "react-redux"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Routing } from "./src/navigation/Routing";
import { RootNavigation } from "./src/navigation/Index";





function App(): JSX.Element {

  return (
  /*   <Provider store={store}> */
      <GluestackUIProvider config={config}>
        <RootNavigation/>
      </GluestackUIProvider>
   /*  </Provider> */

  );
}



export default App;
