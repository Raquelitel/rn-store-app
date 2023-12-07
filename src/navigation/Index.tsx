import { NavigationContainer } from "@react-navigation/native"
import TabsNavigator from "./NavTabs"


export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <TabsNavigator/>
        </NavigationContainer>
    )
}