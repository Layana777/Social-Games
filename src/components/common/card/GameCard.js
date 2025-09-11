import { View, StyleSheet, TouchableOpacity, I18nManager, Image, Dimensions } from 'react-native';
import { Card, Text, useTheme, ProgressBar } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = (screenWidth - 60) / 2; // 60 = 20 + 20 + 20 (margins and gap)

const GameCard = ({
  title,
  subtitle,
  image,
  progress,
  duration,
  onPress,
  style,
  isLarge = false
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isLarge ? styles.largeContainer : styles.smallContainer,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Card 
        style={[
          styles.card, 
          { backgroundColor: theme.colors.surface },
          isLarge && styles.largeCard
        ]} 
        elevation={2}
      >
        <View style={[styles.imageContainer, isLarge && styles.largeImageContainer]}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
          {progress !== undefined && (
            <View style={[styles.progressOverlay, { backgroundColor: theme.colors.primary }]}>
              <Text style={[styles.progressText, { color: theme.colors.onPrimary }]}>
                متابعة...
              </Text>
            </View>
          )}
        </View>
        
        <Card.Content style={styles.content}>
          <Text
            variant="titleSmall"
            style={[
              styles.title,
              {
                color: theme.colors.onSurface,
                writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                textAlign: I18nManager.isRTL ? 'right' : 'left',
              }
            ]}
            numberOfLines={2}
          >
            {title}
          </Text>
          
          {subtitle && (
            <Text
              variant="bodySmall"
              style={[
                styles.subtitle,
                {
                  color: theme.colors.onSurfaceVariant,
                  writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                  textAlign: I18nManager.isRTL ? 'right' : 'left',
                }
              ]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          )}

          {duration && (
            <Text
              variant="bodySmall"
              style={[
                styles.duration,
                {
                  color: theme.colors.onSurfaceVariant,
                  writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                  textAlign: I18nManager.isRTL ? 'right' : 'left',
                }
              ]}
            >
              {duration}
            </Text>
          )}

          {progress !== undefined && (
            <View style={styles.progressContainer}>
              <ProgressBar
                progress={progress}
                color={theme.colors.primary}
                style={[styles.progressBar, { backgroundColor: theme.colors.surfaceVariant }]}
              />
            </View>
          )}
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  smallContainer: {
    width: cardWidth,
    marginHorizontal: 5,
  },
  largeContainer: {
    width: cardWidth * 2 + 10, // Full width minus margins
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  largeCard: {
    // Additional styles for large cards if needed
  },
  imageContainer: {
    height: 120,
    width: '100%',
    position: 'relative',
  },
  largeImageContainer: {
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  progressOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  content: {
    padding: 12,
    paddingTop: 10,
  },
  title: {
    fontWeight: '600',
    marginBottom: 4,
    lineHeight: 18,
  },
  subtitle: {
    marginBottom: 4,
  },
  duration: {
    marginBottom: 8,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressBar: {
    height: 3,
    borderRadius: 2,
  },
});

export default GameCard;