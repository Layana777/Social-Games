import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from "react-native";
import PlayButton from "../components/PlayButton";
import { useBaraAlSalfa } from "../context";
import { Data } from "../assets/Data/Data";
import { randomPlayer, randomTopic } from "../logic";
import Game from "./game";

const FindTopic = () => {
  const {
    setCurrntPage,
    setSelectedTopic,
    setOutPlayer,
    players,
    setShowCategory,
  } = useBaraAlSalfa();

  //  const handleStartGame = () => {
  //    setCurrntPage("Players");
  //  };

    const handleCategorySelect = (category) => {
    const word = randomTopic(category.words);
    const newRandomPlayers = randomPlayer(players);

    setSelectedTopic(word);
    setOutPlayer(newRandomPlayers);
    setShowCategory(category.name);

    // Logic will be added later
    console.log("Selected category:", newRandomPlayers);

    setCurrntPage("Game");
  };

  const handleBackPress = () => {
    // Logic will be added later
    console.log("Back pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>اختر الفئة</Text>
        </View>

        {/* Categories Card */}
        <View style={styles.categoriesCard}>
          {/* Categories Grid */}
          <View style={styles.categoriesGrid}>
            {Object.values(Data).map((category, idx) => (
              <>
                <TouchableOpacity
                  key={idx}
                  style={styles.categoryCard}
                  onPress={() => handleCategorySelect(category)}
                >
                  <Text style={styles.categoryIcon}>{category.emoji}</Text>
                  <Text style={styles.categoryName}>{category.name}</Text>
                </TouchableOpacity>
              </>
            ))}
          </View>

          {/* Back Button */}
          <View style={styles.backButtonContainer}>
            <PlayButton
              text="رجوع"
              onPress={handleBackPress}
              style={styles.backButton}
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
  categoriesCard: {
    backgroundColor: "rgba(126, 68, 68, 0.1)",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    width: "100%",
    backdropFilter: "blur(10px)",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32,
  },
  categoryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "47%",
    marginBottom: 16,
    minHeight: 100,
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
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000ff",
    textAlign: "center",
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  backButtonContainer: {
    width: "100%",
    marginTop: 16,
  },
  backButton: {
    width: "100%",
  },
});

export default FindTopic;
