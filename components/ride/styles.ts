import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    map: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    bottom: {
      position: "absolute",
      bottom: 10,
      left: 10,
      right: 10,
      gap: 10,
    },
    top: {
      position: "absolute",
      top: 30,
      left: 10,
      right: 10,
      gap: 10,
    },
    card: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colors.background,
      gap: 10,
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      fontFamily: "InterRegular18",
      fontSize: 16,
      color: colors.foreground,
    },
  });
