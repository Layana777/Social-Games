import React from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import { Text, Avatar, IconButton, useTheme } from 'react-native-paper';

const Header = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.leftSection}>
        <Avatar.Image
          size={45}
          source={{
            uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          }}
          style={styles.avatar}
        />
        <View style={styles.greetingContainer}>
          <Text
            style={[
              styles.greeting,
              { 
                color: theme.colors.onSurfaceVariant,
                writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
              }
            ]}
          >
            أهلاً وسهلاً
          </Text>
          <Text
            style={[
              styles.name,
              { 
                color: theme.colors.onBackground,
                writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
              }
            ]}
          >
            فيصل القحطاني
          </Text>
        </View>
      </View>
      
      <IconButton
        icon="bell-outline"
        size={24}
        iconColor={theme.colors.onBackground}
        style={[styles.notificationButton, { backgroundColor: theme.colors.surface }]}
        onPress={() => console.log('Notification pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 25,
  },
  leftSection: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: I18nManager.isRTL ? 0 : 12,
    marginLeft: I18nManager.isRTL ? 12 : 0,
  },
  greetingContainer: {
    alignItems: I18nManager.isRTL ? 'flex-end' : 'flex-start',
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  notificationButton: {
    margin: 0,
    width: 45,
    height: 45,
  },
});

export default Header;