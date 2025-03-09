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
    },
    text: {
      fontSize: 20,
      color: colors.foreground,
    },
    container: {
      padding: 16,
      marginTop: 24,
      gap: 5,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 15,
      backgroundColor: colors.primary,
    },
    buttonText: {
      fontFamily: "InterRegular18",
      fontSize: 16,
      color: colors.foreground,
    },
    buttonUpdate: {
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      padding: 15,
      borderRadius: 15,
      borderColor: colors.secondary,
      backgroundColor: "transparent",
      color: colors.foreground,
    },
  });
