import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Home() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = size;

          switch (route.name) {
            case "HomeTab":
              iconName = focused ? "home" : "home";
              break;
            case "ListOfGames":
              iconName = focused ? "credit-card" : "payment";
              break;
            default:
              iconName = "help";
              break;
          }

          return <MaterialIcons name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      {/* TODO(human): Add Tab.Screen components here */}
    </Tab.Navigator>
  );
}

export default Home;
