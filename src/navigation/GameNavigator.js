import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

// Import game components
import BaraAlSalfa from "../games/BaraAlSalfa/screens";
import Game1 from "../games/Game1";
import Game2 from "../games/Game2";
import GuessingGame from "../games/GuessingGame";

const Stack = createNativeStackNavigator();

// Game configuration for scalability
const gameConfigs = {
  BaraAlSalfa: {
    component: BaraAlSalfa,
  },
  Game1: {
    component: Game1,
  },
  Game2: {
    component: Game2,
  },
  GuessingGame: {
    component: GuessingGame,
  },
};

function GameNavigator() {
  const route = useRoute();
  const { gameName } = route.params || { gameName: "BaraAlSalfa" };

  const gameConfig = gameConfigs[gameName];

  if (!gameConfig) {
    // Fallback to default game
    const GameComponent = gameConfigs.BaraAlSalfa.component;
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={gameName} component={GameComponent} />
      </Stack.Navigator>
    );
  }

  const GameComponent = gameConfig.component;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={gameName} component={GameComponent} />
    </Stack.Navigator>
  );
}

export default GameNavigator;
