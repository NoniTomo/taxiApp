import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    title: {
      fontSize: 32,
      color: colors.foreground,
      fontWeight: "bold",
    },
    containerHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      paddingBottom: 30,
    },
    backButton: {
      flexDirection: "row",
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: 5,
      padding: 10,
      textAlign: "center",
    },
    font: {
      fontFamily: "InterRegular18",
      fontSize: 16,
      color: colors.foreground,
    },
    buttonMyPosition: {
      backgroundColor: colors.primary,
      textAlign: "center",
      padding: 5,
    },
  });
