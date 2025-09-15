import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
  ScrollView,
} from "react-native";
import { useBaraAlSalfa } from "../context";

const Game = () => {
  const { setCurrntPage, selectedTopic, outPlayer, players, showCategory } =
    useBaraAlSalfa();
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [showPlayerRole, setShowPlayerRole] = useState(false);

  // Static display data - no logic, change these values to test different states
  const currentPlayerName = players[currentUserIndex];
  const isOutPlayer = players[outPlayer] === players[currentUserIndex]; // true /false
  const selectedCategory = showCategory;
  const wordGame = selectedTopic;
  const totalPlayers = players.length;

  const showRoleReveal = () => {
    setShowPlayerRole(true);
  };

  const showNextPlayer = () => {
    if (currentUserIndex === players.length - 1) {
      setCurrntPage("InitGame");
      return;
    }
    setShowPlayerRole(false);
    setCurrentUserIndex(currentUserIndex + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.playerCard}>
          <View style={styles.header}>
            <Text style={styles.turnLabel}>الدور على:</Text>
            <Text style={styles.playerName}>{currentPlayerName}</Text>
            <Text style={styles.instruction}>أعط الهاتف للاعب</Text>
          </View>

          {!showPlayerRole ? (
            <View style={styles.roleCard}>
              <Text style={styles.phoneIcon}>📱</Text>
              <Text style={styles.welcomeText}>
                مرحباً {currentPlayerName}!
              </Text>
              <Text style={styles.instructionText}>
                عندما تحصل على الهاتف، اضغط على "كشف الدور" لترى دورك في اللعبة
              </Text>
              <Text style={styles.warningText}>
                ⚠️ لا تدع الآخرين يرون الشاشة!
              </Text>
            </View>
          ) : (
            <View style={styles.roleCard}>
              {!isOutPlayer ? (
                <View style={styles.topicCard}>
                  <Text style={styles.categoryLabel}>
                    الفئة: {selectedCategory}
                  </Text>

                  <View style={styles.topicContainer}>
                    <Text style={styles.topicLabel}>الموضوع:</Text>
                    <Text style={styles.topicWord}>{wordGame}</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.outPlayerCard}>
                  <Text style={styles.outIcon}>❌</Text>
                  <Text style={styles.outTitle}>أنت خارج الموضوع!</Text>
                  <Text style={styles.outDescription}>
                    لا تعرف الموضوع - حاول أن تخمن!
                  </Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.actionSection}>
            <Text style={styles.playerCounter}>
              اللاعب {currentUserIndex + 1} من {totalPlayers}
            </Text>

            {!showPlayerRole ? (
              <TouchableOpacity
                onPress={showRoleReveal}
                style={styles.actionButton}
              >
                <Text style={styles.buttonText}>🔍 كشف الدور</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={showNextPlayer}
                style={styles.actionButton}
              >
                <Text style={styles.buttonText}>
                  {players.length - 1 <= currentUserIndex
                    ? "التالي"
                    : "اللاعب التالي"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f1ebf4ff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
  },
  playerCard: {
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
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  turnLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  playerName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 16,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  instruction: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  roleCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(126, 68, 68, 0.2)",
  },
  phoneIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 16,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  instructionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  warningText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  topicCard: {
    alignItems: "center",
    width: "100%",
  },
  categoryIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  categoryLabel: {
    fontSize: 16,
    color: "#000000ff",
    marginBottom: 24,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  topicContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "rgba(126, 68, 68, 0.3)",
  },
  checkIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  topicLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  topicWord: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  outPlayerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "rgba(126, 68, 68, 0.3)",
  },
  outIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  outTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  outDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  actionSection: {
    width: "100%",
    alignItems: "center",
  },
  playerCounter: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  actionButton: {
    backgroundColor: "rgba(126, 68, 68, 0.8)",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
});

export default Game;
