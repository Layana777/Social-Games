import {
  Text,
  View,
  StyleSheet,
  I18nManager,
} from "react-native";
import { useBaraAlSalfa } from "../context";
import PlayButton from "../components/PlayButton";

const Landing = () => {
  const { setCurrntPage, currntPage, startGame } = useBaraAlSalfa();

    const handleStartGame = () => {
       setCurrntPage("Players");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>برا السالفة</Text>
          <Text style={styles.subtitle}>لعبة سعودية ممتعة للأصدقاء</Text>
          <Text style={styles.description}>! اكتشف من هو برا السالفة</Text>
        </View>

        {/* Game Card */}
        <View style={styles.gameCard}>
          {/* Target Icon - Made Smaller */}
          <View style={styles.iconContainer}>
            <View style={styles.targetIcon}>
              <View style={styles.outerRing} />
              <View style={styles.middleRing} />
              <View style={styles.innerRing} />
              <View style={styles.center} />
              {/* Arrow */}
              <View style={styles.arrow} />
            </View>
          </View>

          {/* How to Play */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.howToPlayTitle}>كيف تلعب؟</Text>

            <View style={styles.instruction}>
              <Text style={styles.instructionText}>
                • أدخل أسماء اللاعبين (4 لاعبين كحد أدنى)
              </Text>
            </View>

            <View style={styles.instruction}>
              <Text style={styles.instructionText}>
                • اختر فئة من الفئات المتاحة
              </Text>
            </View>

            <View style={styles.instruction}>
              <Text style={styles.instructionText}>
                • !سيحصل كل لاعب على موضوع... عدا واحد
              </Text>
            </View>

            <View style={styles.instruction}>
              <Text style={styles.instructionText}>
                • اسألوا بعض الأسئلة واكتشفوا من هو خارج الموضوع
              </Text>
            </View>
          </View>

          {/* Play Button */}
          <PlayButton onPress={handleStartGame} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    direction: "rtl",
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
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 8,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 4,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  description: {
    fontSize: 18,
    color: "#000000ff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  gameCard: {
    backgroundColor: "rgba(126, 68, 68, 0.1)",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    width: "100%",
    backdropFilter: "blur(10px)",
  },
  iconContainer: {
    marginBottom: 20,
  },
  targetIcon: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  outerRing: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FF6B9D",
    opacity: 0.8,
  },
  middleRing: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF8FA3",
  },
  innerRing: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFB3C1",
  },
  center: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#4A90E2",
    transform: [{ rotate: "45deg" }],
    top: -10,
    right: -15,
  },
  instructionsContainer: {
    width: "100%",
    marginBottom: 24,
  },
  howToPlayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  instruction: {
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    color: "#000000ff",
    textAlign: I18nManager.isRTL ? "right" : "left",
    lineHeight: 20,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
});

export default Landing;
