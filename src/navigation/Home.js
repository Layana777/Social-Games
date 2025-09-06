import { View, StyleSheet, I18nManager, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Text } from "react-native-paper";
import Header from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import FilterDropdown from "../components/common/FilterDropdown";
import GameCard from "../components/common/GameCard";

const Home = () => {
  const theme = useTheme();

  const dummyGames = [
    {
      id: 1,
      title: "الطيور والحشرات",
      subtitle: "قصص لـ 20 دقيقة",
      duration: "20 قصة | 20 دقيقة",
      image: {
        uri: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop",
      },
      type: "birds",
    },
    {
      id: 2,
      title: "النظام الشمسي",
      subtitle: "استكشاف الفضاء",
      duration: "15 موضوع | 30 دقيقة",
      image: {
        uri: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      },
      type: "space",
    },
    {
      id: 3,
      title: "الحيوانات",
      subtitle: "مغامرات مثيرة",
      duration: "25 قصة | 40 دقيقة",
      image: {
        uri: "https://images.unsplash.com/photo-1549366021-9f761d040a93?w=400&h=300&fit=crop",
      },
      progress: 0.6,
      type: "animals",
      isLarge: false,
    },
    {
      id: 4,
      title: "قصص ما قبل النوم",
      subtitle: "حكايات للأطفال",
      duration: "30 قصة | 3 ساعات للنوم",
      image: {
        uri: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      },
      type: "bedtime",
    },
    {
      id: 5,
      title: "عالم البحار",
      subtitle: "اكتشاف المحيطات",
      duration: "18 موضوع | 25 دقيقة",
      image: {
        uri: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      },
      type: "ocean",
    },
  ];

  const handleGamePress = (game) => {
    console.log("Game pressed:", game.title);
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleFilterChange = (filter) => {
    console.log("Filter changed:", filter);
  };

  const renderGame = ({ item }) => {
    // Special handling for the large card
    if (item.isLarge) {
      return (
        <View style={styles.largeCardWrapper}>
          <GameCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            duration={item.duration}
            progress={item.progress}
            onPress={() => handleGamePress(item)}
            isLarge={true}
          />
        </View>
      );
    }

    return (
      <GameCard
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        duration={item.duration}
        progress={item.progress}
        onPress={() => handleGamePress(item)}
      />
    );
  };

  const renderHeader = () => (
    <View>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.sectionHeader}>
        <Text
          variant="titleMedium"
          style={[
            styles.sectionTitle,
            {
              color: theme.colors.onBackground,
              writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
              textAlign: "right",
            },
          ]}
        >
          مواضيع للأطفال
        </Text>
        <FilterDropdown onFilterChange={handleFilterChange} />
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header />

      <FlatList
        data={dummyGames}
        renderItem={renderGame}
        numColumns={2}
        key={"grid-2"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.headerComponent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: I18nManager.isRTL ? "rtl" : "ltr",
  },
  headerComponent: {
    marginBottom: 10,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  separator: {
    height: 10,
  },
  largeCardWrapper: {
    width: "100%",
    marginBottom: 10,
  },
});

export default Home;
