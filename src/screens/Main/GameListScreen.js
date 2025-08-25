import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function GameListScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleNavigateToGame = (gameName) => {
    navigation.navigate('Game', { gameName });
  };

  const allGames = [
    { 
      id: 'BaraAlSalfa', 
      title: 'بارا السلفا', 
      description: 'لعبة ممتعة للأصدقاء والعائلة',
      players: '٣-٨ لاعبين'
    },
    { 
      id: 'Game1', 
      title: 'اللعبة الأولى', 
      description: 'لعبة رائعة للجميع',
      players: '٢-٦ لاعبين'
    },
    { 
      id: 'Game2', 
      title: 'اللعبة الثانية', 
      description: 'تحدى أصدقائك في هذه اللعبة',
      players: '٤-١٠ لاعبين'
    },
    { 
      id: 'GuessingGame', 
      title: 'لعبة التخمين', 
      description: 'اختبر معرفتك وذكائك',
      players: '٢-٨ لاعبين'
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="titleLarge" style={styles.title}>
        جميع الألعاب المتاحة
      </Text>
      
      {allGames.map((game) => (
        <Card key={game.id} style={styles.gameCard} mode="contained">
          <Card.Content>
            <View style={styles.gameHeader}>
              <Text variant="titleMedium">{game.title}</Text>
              <Text variant="labelMedium" style={styles.playersText}>
                {game.players}
              </Text>
            </View>
            <Text variant="bodyMedium" style={styles.gameDescription}>
              {game.description}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button 
              mode="contained" 
              onPress={() => handleNavigateToGame(game.id)}
              style={styles.playButton}
            >
              العب الآن
            </Button>
            <Button 
              mode="text"
              onPress={() => {/* TODO: Navigate to game details */}}
            >
              التفاصيل
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  gameCard: {
    marginBottom: 16,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  playersText: {
    opacity: 0.7,
  },
  gameDescription: {
    opacity: 0.8,
  },
  playButton: {
    marginRight: 8,
  },
});

export default GameListScreen;