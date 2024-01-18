import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Details from "../pages/Details";
import AdventureProvider from "../contexts/adventureProvider";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AdventureProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </AdventureProvider>
    </NavigationContainer>
  );
}
