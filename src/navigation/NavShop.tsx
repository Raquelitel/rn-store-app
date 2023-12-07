import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories } from '../pages/Categories';
import { ProductList } from '../pages/ProductList';
import Product from '../pages/Product';

type ShopStackParamList = {
    Categories: undefined,
    ProductList: undefined,
    Product: undefined,
}

const Stack = createNativeStackNavigator<ShopStackParamList>();

export const ShopNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="ProductList" component={ProductList}/>
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )
}

