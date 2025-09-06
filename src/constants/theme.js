import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

// Light theme configuration with RTL support
export const lightTheme = {
  ...MD3LightTheme,
  isRTL: true,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#FFEDA8",
    primaryContainer: "#e8e6ff",
    secondary: "#03dac6",
    secondaryContainer: "#03dac6",
    surface: "#ffffff",
    background: "#F8F9FD",
    error: "#b00020",
    onPrimary: "#ffffff",
    onSecondary: "#000000",
    onSurface: "#000000",
    onBackground: "#000000",
    onError: "#ffffff",
    surfaceVariant: "#f0f0f0",
    onSurfaceVariant: "#6b6b6b",
  },
};

// Dark theme configuration with RTL support
export const darkTheme = {
  ...MD3DarkTheme,
  isRTL: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FFEDA8",
    primaryContainer: "#5a4dd4",
    secondary: "#03dac6",
    secondaryContainer: "#03dac6",
    surface: "#1e1e1e",
    background: "#121212",
    error: "#cf6679",
    onPrimary: "#ffffff",
    onSecondary: "#000000",
    onSurface: "#ffffff",
    onBackground: "#ffffff",
    onError: "#000000",
    surfaceVariant: "#2d2d2d",
    onSurfaceVariant: "#b3b3b3",
  },
};

export default lightTheme;
