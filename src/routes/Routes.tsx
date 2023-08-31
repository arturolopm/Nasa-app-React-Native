import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type RootStackParams } from '../types'
import Home from '../views/Home'
import Details from '../views/Details'

const Stack = createNativeStackNavigator<RootStackParams>()
const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: "rgba(7,26,96,255)"
    },
    headerTitleStyle: {
        color: "#fff"
    }
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions} />
                <Stack.Screen name='Details' component={Details} options={routeScreenDefaultOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes