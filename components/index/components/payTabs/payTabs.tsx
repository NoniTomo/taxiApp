import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import { useOrder } from "@/contexts";
import { PAY_TYPE_RUS } from "../../constants";
import { Colors } from "@/constants/Colors";

export const PayTabs = () => {
  const orderContext = useOrder();

  const colorScheme = useColorScheme();
  const themeStyles = styles(
    colorScheme ?? "light",
    Colors[colorScheme ?? "light"]
  );

  return (
    <View style={themeStyles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          orderContext.set({
            ...orderContext.value,
            payType: "cash",
          })
        }
      >
        <Text
          style={[
            themeStyles.button,
            orderContext.value?.payType === "cash"
              ? themeStyles.buttonActive
              : themeStyles.buttonNotActive,
          ]}
        >
          {PAY_TYPE_RUS["cash"]}
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          orderContext.set({
            ...orderContext.value,
            payType: "nonСash",
          })
        }
      >
        <Text
          style={[
            themeStyles.button,
            orderContext.value?.payType === "nonСash"
              ? themeStyles.buttonActive
              : themeStyles.buttonNotActive,
          ]}
        >
          {PAY_TYPE_RUS["nonСash"]}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = (
  colorScheme: "light" | "dark",
  colors: typeof Colors.dark | typeof Colors.light
) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colorScheme === "light" ? "#F0F0F0" : "#292929",
      padding: 3,
      gap: 2,
      borderRadius: 10,
      width: "60%",
    },
    button: {
      textAlign: "center",
      padding: 5,
      borderRadius: 10,
      flexGrow: 1,
    },
    buttonActive: {
      backgroundColor: Colors.light.secondary,
    },
    buttonNotActive: {
      backgroundColor: "transparent",
      color: Colors.light.lightSecondaryForeground,
    },
  });
