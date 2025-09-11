import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import GameNavigator from "./GameNavigator";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={GameNavigator} />
      
    </Stack.Navigator>
  );
}

export default AppNavigator;
