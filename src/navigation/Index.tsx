import { NavigationContainer } from "@react-navigation/native"
import TabsNavigator from "./NavTabs"
import { AuthNavigator } from "./Auth";


export const RootNavigation = () => {
    const user = null;
    return (
        <NavigationContainer>
            {user ? <TabsNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}