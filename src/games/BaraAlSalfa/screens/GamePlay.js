import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
  Image,
} from "react-native";
import { useBaraAlSalfa } from "../context";

const GamePlay = () => {
  const { setCurrntPage, players } = useBaraAlSalfa();

  const [questionPhase, setQuestionPhase] = useState("questions");
  const [showAskingPhase, setShowAskingPhase] = useState(false);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  // TODO(human): Add game logic here
  const handleRandomPlayer = () => {
    if (currentPairIndex === players.length - 1) {
      setQuestionPhase("");
      return;
    }

    setShowAskingPhase(false);
    setCurrentPairIndex(currentPairIndex + 1);

    // Logic will be added later
    console.log("Random player selected");
  };

  const handleStartAsking = () => {
    setShowAskingPhase(true);

    // Logic will be added later
    console.log("Start asking phase");
  };

  const handleVoting = () => {
    // Logic will be added later
    console.log("Start voting");
  };

  // Random Selection Phase
  if (questionPhase === "questions" && !showAskingPhase) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>🎲 اختيار عشوائي</Text>
              <Text style={styles.subtitle}>
                سيتم اختيار السائل والمجيب بشكل عشوائي للسؤال الأول
              </Text>
            </View>

            <View style={styles.iconCard}>
              <Text style={styles.mainIcon}>🎯</Text>
              <Text style={styles.readyTitle}>جاهز للاختيار العشوائي؟</Text>
              <Text style={styles.readySubtitle}>
                اضغط على الزر لاختيار من سيسأل ومن سيجيب
              </Text>
            </View>

            <TouchableOpacity
              style={styles.randomButton}
              onPress={handleStartAsking}
            >
              <Text style={styles.buttonText}>🎲 اختيار عشوائي</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Asking Phase
  if (questionPhase === "questions" && showAskingPhase) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>🔄 مرحلة الأسئلة الدائرية</Text>

              <View style={styles.playerCard}>
                <Text style={styles.playerName}>
                  {players[currentPairIndex]}
                </Text>
                <Text style={styles.playerRole}>يسأل</Text>
                <Text style={styles.playerName}>
                  {players[(currentPairIndex + 1) % players.length]}
                </Text>
                <Text style={styles.questionCounter}>
                  السؤال 1 من 4 (مرحلة دائرية)
                </Text>
              </View>

              <Text style={styles.mainIcon}>🗣️</Text>
              <Text style={styles.subtitle}>
                اسأل المجيب سؤالاً (سيسأل المجيب اللاعب التالي)
              </Text>
              <Text style={styles.tipText}>
                💡 تذكر: الهدف هو اكتشاف من لا يعرف الموضوع
              </Text>
            </View>

            <TouchableOpacity
              style={styles.askButton}
              onPress={handleRandomPlayer}
            >
              <Text style={styles.buttonText}>✅ اطرح السؤال</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Free Choice Session Phase
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>🎆 مرحلة الاختيار الحر</Text>
            <Text style={styles.subtitle}>
              يمكنك الآن اختيار أي لاعب تريد سؤاله
            </Text>
          </View>

          <View style={styles.iconCard}>
            <Text style={styles.mainIcon}>❓</Text>

            {/* TODO(human): Add image component here when needed */}
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>📸 صورة الموضوع</Text>
            </View>

            <Text style={styles.tipText}>
              💡 اسأل أسئلة ذكية لتكتشف من هو خارج الموضوع
            </Text>
          </View>

          <TouchableOpacity style={styles.votingButton} onPress={handleVoting}>
            <Text style={styles.buttonText}>😉😜 جاهزين للتصويت</Text>
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
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
  },
  card: {
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
    marginBottom: 24,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  iconCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(126, 68, 68, 0.2)",
  },
  mainIcon: {
    fontSize: 48,
    marginBottom: 16,
    textAlign: "center",
  },
  readyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 8,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  readySubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  playerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(126, 68, 68, 0.2)",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 4,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  playerRole: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  questionCounter: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  tipText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  imagePlaceholder: {
    width: "100%",
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "rgba(126, 68, 68, 0.2)",
    borderStyle: "dashed",
  },
  imagePlaceholderText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  randomButton: {
    backgroundColor: "rgba(126, 68, 68, 0.8)",
    borderRadius: 16,
    paddingVertical: 16,
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
  askButton: {
    backgroundColor: "rgba(126, 68, 68, 0.8)",
    borderRadius: 16,
    paddingVertical: 16,
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
  votingButton: {
    backgroundColor: "rgba(126, 68, 68, 0.8)",
    borderRadius: 16,
    paddingVertical: 16,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
});

export default GamePlay;
