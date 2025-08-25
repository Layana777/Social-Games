import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

// Import game components
import BaraAlSalfa from '../games/BaraAlSalfa';
import Game1 from '../games/Game1';
import Game2 from '../games/Game2';
import GuessingGame from '../games/GuessingGame';

const Stack = createNativeStackNavigator();

// Game configuration for scalability
const gameConfigs = {
  BaraAlSalfa: {
    component: BaraAlSalfa,
    title: 'بارا السلفا',
  },
  Game1: {
    component: Game1,
    title: 'اللعبة الأولى',
  },
  Game2: {
    component: Game2,
    title: 'اللعبة الثانية',
  },
  GuessingGame: {
    component: GuessingGame,
    title: 'لعبة التخمين',
  },
};

function GameNavigator() {
  const route = useRoute();
  const { gameName } = route.params || { gameName: 'BaraAlSalfa' };
  
  const gameConfig = gameConfigs[gameName];
  
  if (!gameConfig) {
    // Fallback to default game
    const GameComponent = gameConfigs.BaraAlSalfa.component;
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name={gameName} 
          component={GameComponent}
          options={{ title: gameConfigs.BaraAlSalfa.title }}
        />
      </Stack.Navigator>
    );
  }

  const GameComponent = gameConfig.component;
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name={gameName} 
        component={GameComponent}
        options={{ title: gameConfig.title }}
      />
    </Stack.Navigator>
  );
}

export default GameNavigator;