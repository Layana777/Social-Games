import React, { use } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from "react-native";
import { useBaraAlSalfa } from "../context";

const InitGame = () => {
  const { setCurrntPage } = useBaraAlSalfa();

  const handleStartGame = () => {
    setCurrntPage("GamePlay");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.celebrationCard}>
          <Text style={styles.celebrationIcon}>🎉</Text>

          <View style={styles.textContainer}>
            <Text style={styles.excitedText}>🔥 متحمسين !!!! 🔥</Text>

            <Text style={styles.subtitleText}>
              😉 استعدوا للجولة، من سيكون خارج السالفة؟
            </Text>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartGame}
          >
            <Text style={styles.buttonText}>🚀 ابدأ الجولة الآن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ebf4ff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
  },
  celebrationCard: {
    backgroundColor: "rgba(126, 68, 68, 0.1)",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  celebrationIcon: {
    fontSize: 64,
    marginBottom: 24,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  excitedText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  subtitleText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  startButton: {
    backgroundColor: "rgba(126, 68, 68, 0.8)",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
});

export default InitGame;
