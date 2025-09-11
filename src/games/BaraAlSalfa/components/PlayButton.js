import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const PlayButton = ({ onPress, disabled = false, text = "PLAY", style, size = "medium" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={[styles.pixelBorder, size === "small" && styles.pixelBorderSmall]}>
        <View style={[styles.innerButton, size === "small" && styles.innerButtonSmall]}>
          <Text style={[styles.buttonText, size === "small" && styles.buttonTextSmall]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginVertical: 16,
    shadowColor: "#6B2C8A",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  pixelBorder: {
    backgroundColor: "#8B3FA8",
    borderRadius: 25,
    padding: 3,
    // Creating modern gradient effect with subtle borders
    borderWidth: 1,
    borderColor: "#A855C7",
  },
  innerButton: {
    backgroundColor: "#6B2C8A",
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    // Inner gradient-like effect
    borderWidth: 1,
    borderColor: "#7C3A95",
    position: "relative",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.2,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  pixelBorderSmall: {
    borderRadius: 20,
    padding: 2,
  },
  innerButtonSmall: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
  },
  buttonTextSmall: {
    fontSize: 16,
    letterSpacing: 0.8,
  },
});

export default PlayButton;