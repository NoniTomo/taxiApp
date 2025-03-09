import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    map: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    marker: {
      zIndex: 100,
      height: 50,
      resizeMode: "contain",
    },
    link: {
      position: "absolute",
      top: 50,
      left: 10,
      right: 10,
      backgroundColor: colors.background,
      padding: 10,
      borderRadius: 10,
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
      backgroundColor: colors.background,
      gap: 10,
      borderRadius: 10,
      padding: 10,
    },
    topContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "4%",
    },
    addressButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
      flexGrow: 1,
      backgroundColor: colors.secondary,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 15,
    },
    activeButton: {
      backgroundColor: colors.primary,
    },
    disabledButton: {
      backgroundColor: colors.secondary,
    },
    buttonText: {
      color: colors.foreground,
      fontFamily: "InterRegular18",
      fontSize: 16,
    },
    buttonTextSmall: {
      fontFamily: "InterRegular18",
      fontSize: 10,
      flex: 1,
      width: 50,
      color: colors.secondaryForeground,
    },
  });
