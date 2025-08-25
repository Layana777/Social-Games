import { Text, View, StyleSheet, I18nManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";

const Home = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            {
              writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
              color: theme.colors.onBackground,
            },
          ]}
        >
          من هو الأفضل؟
        </Text>
        <Text
          style={[styles.englishText, { color: theme.colors.onSurfaceVariant }]}
        >
          who is the best?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: I18nManager.isRTL ? "rtl" : "ltr",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  englishText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Home;
