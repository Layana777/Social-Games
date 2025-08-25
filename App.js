import { useEffect } from 'react';
import { I18nManager, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { lightTheme } from './src/constants/theme';

export default function App() {
  useEffect(() => {
    // Force RTL layout for Arabic
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
    
    // Set default text direction for all Text and TextInput components
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.style = { writingDirection: 'rtl' };
    
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.style = { writingDirection: 'rtl', textAlign: 'right' };
  }, []);

  console.log('RTL Status:', I18nManager.isRTL);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={lightTheme}>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
