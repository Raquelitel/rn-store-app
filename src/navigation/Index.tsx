import { NavigationContainer } from "@react-navigation/native"
import TabsNavigator from "./NavTabs"
import { AuthNavigator } from "./Auth";
import { useAuth } from "../store/auth/context";


export const RootNavigation = () => {
    const {isAuthorized} = useAuth();
    return (
        <NavigationContainer>
            {isAuthorized ? <TabsNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}