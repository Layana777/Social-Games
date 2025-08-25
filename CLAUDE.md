# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` or `expo start`
- **Run on Android**: `npm run android` or `expo start --android`
- **Run on iOS**: `npm run ios` or `expo start --ios`
- **Run on Web**: `npm run web` or `expo start --web`

## Project Architecture

This is a React Native social games app built with Expo, targeting multiple platforms (iOS, Android, Web). The app name is "جمعتنا" (Arabic for "our gathering").

### Core Structure

- **Entry Point**: `index.js` registers the main `App.js` component with Expo
- **Navigation**: Multi-level navigation system with separate navigators for app flow, authentication, and games
- **State Management**: Redux-style store architecture with actions and reducers for auth and game state
- **Game Architecture**: Each game is self-contained in `/src/games/[GameName]/` with its own components, logic, screens, and context

### Game Module Pattern

Each game follows a consistent structure:
```
/src/games/[GameName]/
├── components/     # Game-specific UI components
├── screens/       # Game screens/views
├── logic/         # Game business logic
├── context/       # Game-specific context/state
└── index.js       # Game entry point
```

Current games include:
- BaraAlSalfa
- Game1
- Game2 
- GuessingGame

### Key Directories

- `/src/components/common/` - Reusable UI components (Button, Modal, Header, etc.)
- `/src/components/gameSpecific/` - Components used across multiple games
- `/src/constants/` - App-wide constants (colors, dimensions, strings)
- `/src/navigation/` - Navigation configuration and routing
- `/src/screens/` - Main app screens (Auth, Main game screens)
- `/src/services/` - External service integrations (API, auth, storage)
- `/src/utils/` - Helper functions, validators, and game logic utilities

### Technology Stack

- **Framework**: React Native with Expo SDK ~53.0
- **Navigation**: React Navigation v7 (native-stack, drawer, bottom-tabs)
- **UI Library**: React Native Paper
- **Animations**: React Native Reanimated v4
- **Icons**: React Native Vector Icons
- **Internationalization**: i18n-js for multi-language support

### Development Notes

The application is now set up with:
- **RTL Support**: Configured I18nManager for Arabic language support
- **React Native Paper**: Integrated with Material Design 3 theme and RTL-friendly configuration
- **Navigation Structure**: 
  - Main AppNavigator with Home and Game stacks
  - Home tab navigator with HomeScreen and GameListScreen
  - Scalable GameNavigator that routes to individual game components
- **Arabic UI**: All interface text is in Arabic with proper RTL layout
- **Theme System**: Centralized theme configuration in `/src/constants/theme.js`

### Current Implementation Status

- ✅ App structure with navigation
- ✅ React Native Paper integration
- ✅ RTL support for Arabic
- ✅ Home screen with featured games
- ✅ Game list screen
- ✅ Scalable game navigation architecture
- ⚠️  Individual games still contain placeholder implementations