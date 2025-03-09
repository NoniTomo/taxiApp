import { Colors } from "@/constants/Colors";
import { useOrder } from "@/contexts";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";

export interface FareCardType {
  img: React.ReactNode;
  type: Fares;
  typeLocale: string;
  price: number;
  active: boolean;
}

export const FareCard = ({
  img,
  type,
  price,
  active,
  typeLocale,
}: FareCardType) => {
  const orderContext = useOrder();
  const colorScheme = useColorScheme();
  const themeStyles = styles(
    colorScheme ?? "light",
    Colors[colorScheme ?? "light"]
  );

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        orderContext.set({
          ...orderContext.value,
          fares: type,
          payType: "nonСash",
        })
      }
      style={[themeStyles.card, active && themeStyles.active]}
    >
      <View style={[themeStyles.card, active && themeStyles.active]}>
        {img}
        <Text style={themeStyles.type}>{typeLocale}</Text>
        <Text style={themeStyles.price}>от {price} ₽</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = (
  colorScheme: "light" | "dark",
  colors: typeof Colors.dark | typeof Colors.light
) =>
  StyleSheet.create({
    card: {
      fontFamily: "InterRegular18",
      fontSize: 10,
      alignItems: "center",
      justifyContent: "center",
      height: 96,
      width: 96,
      backgroundColor: colors.secondary,
      borderRadius: 15,
    },
    active: {
      backgroundColor: colors.primary,
    },
    type: {
      color: colors.foreground,
    },
    price: {
      color: colors.secondaryForeground,
    },
  });
