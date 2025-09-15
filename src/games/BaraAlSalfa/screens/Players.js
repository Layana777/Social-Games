import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  ScrollView,
} from "react-native";
import PlayButton from "../components/PlayButton";
import { useState } from "react";
import { useBaraAlSalfa } from "../context";
import { deletePlayer } from "../logic";

const Players = () => {
  const { players, setPlayers, setCurrntPage } = useBaraAlSalfa();
  const [name, setName] = useState("");

  const handleStartGame = () => {
    setCurrntPage("FindTopic");
  };

  const handleBackPage = () => {
    setCurrntPage("landing");
  };

  const handleAddPlayer = () => {
    if (name?.trim() === "") return;
    if (players.includes(name)) return;
    console.log(players);
    setPlayers([...players, name]);
    setName("");
  };

  //موجود في اللوجيك
  const handleDeletePlayer = (idx) => {
    const newPlayers = deletePlayer(players, idx);
    setPlayers(newPlayers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>أضف اللاعبين</Text>
        </View>

        {/* Player Input Card */}
        <View style={styles.inputCard}>
          {/* Player Name Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.playerInput}
              placeholder="اسم اللاعب"
              placeholderTextColor="#666"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <PlayButton onPress={handleAddPlayer} text="إضافة" size="small" />
          </View>

          {/* Players Count */}
          <View style={styles.playersCount}>
            <Text style={styles.playersCountText}>
              اللاعبين: ({players.length})
            </Text>
          </View>

          {/* Players List */}
          <ScrollView style={styles.playersListContainer}>
            {players.map((item, idx) => (
              <View key={idx} style={styles.playerCard}>
                {/* Player Name */}
                <View style={styles.playerInfo}>
                  <Text style={styles.playerName}>{item}</Text>
                  <Text style={styles.playerLabel}>لاعب {idx + 1}</Text>
                </View>

                {/* Delete Button */}
                <TouchableOpacity
                  onPress={() => handleDeletePlayer(idx)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>×</Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* Empty State */}
            {players.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>
                  لا يوجد لاعبين حتى الآن
                </Text>
                <Text style={styles.emptyStateSubtext}>أضف لاعبين للبدء</Text>
              </View>
            )}
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <PlayButton
              text="رجوع"
              size="small"
              style={styles.actionButtonStyle}
              onPress={handleBackPage}
            />

            <PlayButton
              text={`(متبقي ${
                players.length - 3 >= 0 ? 0 : Math.abs(players.length - 3)
              })`}
              size="small"
              style={styles.nextButtonStyle}
              onPress={handleStartGame}
              disabled={true}
            />
          </View>

          <View>
            <PlayButton
              text="التالي"
              size="small"
              style={styles}
              onPress={handleStartGame}
            />
          </View>
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
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  inputCard: {
    backgroundColor: "rgba(126, 68, 68, 0.1)",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    width: "100%",
    backdropFilter: "blur(10px)",
  },
  inputContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  playerInput: {
    flex: 1,
    direction: "ltr",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#000",
    textAlign: "right",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  playersCount: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  playersCountText: {
    fontSize: 18,
    color: "#000000ff",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  actionButtons: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 16,
  },
  actionButtonStyle: {
    flex: 1,
  },
  nextButtonStyle: {
    flex: 2,
  },
  // Players List Styles
  playersListContainer: {
    width: "100%",
    marginBottom: 30,
    height: 220,
  },
  playerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "rgba(126, 68, 68, 0.2)",
  },
  playerInfo: {
    flex: 1,
    justifyContent: "center",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  playerLabel: {
    fontSize: 12,
    color: "#666666",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FF4757",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: 20,
  },
  // Empty State Styles
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 8,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    textAlign: "center",
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#999999",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    textAlign: "center",
  },
});

export default Players;
