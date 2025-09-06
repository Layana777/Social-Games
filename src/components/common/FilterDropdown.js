import { useState } from "react";
import { View, StyleSheet, I18nManager, TouchableOpacity } from "react-native";
import { Text, Menu, useTheme, IconButton } from "react-native-paper";

const FilterDropdown = ({ onFilterChange, style }) => {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("6 - 9 Years");
  const theme = useTheme();

  const filters = [
    "3 - 5 Years",
    "6 - 9 Years",
    "10 - 12 Years",
    "13+ Years",
    "All Ages",
  ];

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    closeMenu();
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.filterRow}>
        <Text
          style={[
            styles.filterLabel,
            {
              color: theme.colors.onSurfaceVariant,
              writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
            },
          ]}
        >
          ابحث بستخدام
        </Text>

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          contentStyle={[
            styles.menuContent,
            { backgroundColor: theme.colors.surface },
          ]}
          anchor={
            <TouchableOpacity
              style={styles.filterButton}
              onPress={openMenu}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: theme.colors.primary,
                    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
                  },
                ]}
              >
                {selectedFilter}
              </Text>
              <IconButton
                icon="chevron-down"
                size={16}
                iconColor={theme.colors.primary}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          }
        >
          {filters.map((filter) => (
            <Menu.Item
              key={filter}
              onPress={() => handleFilterSelect(filter)}
              title={filter}
              titleStyle={[
                styles.menuItemText,
                {
                  color:
                    filter === selectedFilter
                      ? theme.colors.primary
                      : theme.colors.onSurface,
                  writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
                },
              ]}
              style={[
                styles.menuItem,
                filter === selectedFilter && {
                  backgroundColor: theme.colors.primaryContainer,
                },
              ]}
            />
          ))}
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  filterButton: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  filterText: {
    fontSize: 16,
    fontWeight: "600",
  },
  dropdownIcon: {
    margin: 0,
    padding: 0,
    marginLeft: I18nManager.isRTL ? 0 : -4,
    marginRight: I18nManager.isRTL ? -4 : 0,
  },
  menuContent: {
    borderRadius: 12,
    elevation: 8,
    marginTop: 8,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 14,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
});

export default FilterDropdown;
