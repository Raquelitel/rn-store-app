import { NavigationContainer } from "@react-navigation/native"
import { useAppSelector } from "../store-toolkit";
//import { useAppSelector } from "../store-redux";
import TabsNavigator from "./NavTabs";
import { AuthNavigator } from "./Auth";

export const RootNavigation = () => {

    const auth = useAppSelector(state => state.auth);
    const {isAuthorized} = auth; 
    

    return (
        <NavigationContainer>
            {isAuthorized ? <TabsNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

