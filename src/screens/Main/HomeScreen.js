import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Surface, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleNavigateToGame = (gameName) => {
    navigation.navigate('Game', { gameName });
  };

  const featuredGames = [
    { id: 'BaraAlSalfa', title: 'بارا السلفا', description: 'لعبة ممتعة للأصدقاء والعائلة' },
    { id: 'GuessingGame', title: 'لعبة التخمين', description: 'اختبر معرفتك وذكائك' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Surface style={[styles.welcomeCard, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <Text variant="headlineMedium" style={styles.welcomeText}>
          أهلاً وسهلاً في جمعتنا
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          استمتع بألعاب اجتماعية ممتعة مع الأصدقاء والعائلة
        </Text>
      </Surface>

      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          الألعاب المميزة
        </Text>
        
        {featuredGames.map((game) => (
          <Card key={game.id} style={styles.gameCard} mode="contained">
            <Card.Content>
              <Text variant="titleMedium">{game.title}</Text>
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
            </Card.Actions>
          </Card>
        ))}
      </View>

      <View style={styles.section}>
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('GameList')}
          style={styles.allGamesButton}
          icon="games"
        >
          عرض جميع الألعاب
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeCard: {
    padding: 20,
    marginBottom: 24,
    borderRadius: 12,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    textAlign: 'right',
  },
  gameCard: {
    marginBottom: 12,
  },
  gameDescription: {
    marginTop: 8,
    opacity: 0.7,
  },
  playButton: {
    marginLeft: 8,
  },
  allGamesButton: {
    marginTop: 8,
  },
});

export default HomeScreen;