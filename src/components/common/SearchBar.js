import { useState } from "react";
import {
  View,
  StyleSheet,
  I18nManager,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme, IconButton } from "react-native-paper";

const SearchBar = ({ placeholder = "ابحث عن المواضيع", onSearch, style }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleChangeText = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.searchInputContainer,
          {
            backgroundColor: theme.colors.surface,
          },
        ]}
      >
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.colors.onSurface,
              writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
              textAlign: I18nManager.isRTL ? "right" : "left",
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.onSurfaceVariant}
          value={searchQuery}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSearch}
        />

        <TouchableOpacity
          style={[
            styles.searchButton,
            { backgroundColor: theme.colors.primary },
          ]}
          onPress={handleSearch}
          activeOpacity={0.8}
        >
          <IconButton
            icon="magnify"
            size={20}
            iconColor={theme.colors.onPrimary}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  searchInputContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    paddingLeft: I18nManager.isRTL ? 8 : 20,
    paddingRight: I18nManager.isRTL ? 20 : 8,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: "100%",
    padding: 0,
    paddingRight: I18nManager.isRTL ? 0 : 12,
    paddingLeft: I18nManager.isRTL ? 12 : 0,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 0,
  },
  searchIcon: {
    margin: 0,
    padding: 0,
  },
});

export default SearchBar;
