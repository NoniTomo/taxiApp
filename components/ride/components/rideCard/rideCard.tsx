import { CrossIcon, SeatIcon, StarIcon } from "@/components/ui/icons";
import { Colors } from "@/constants/Colors";
import { useOrder } from "@/contexts";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";

export const RideCard = () => {
  const orderContext = useOrder();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];
  const themeStyles = styles(themeColors);

  const state = {
    ride: {
      driver: {
        name: "Лопатин Иван Васильевич",
        auto: { number: "х456ув", name: "Honda CRV (белая)", countPlace: 4 },
        rating: 4.5,
      },
      status: "в пути",
      fare: "Комфорт",
      price: 250,
    },
  };

  return (
    <View style={themeStyles.container}>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableWithoutFeedback>
          <View></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={themeStyles.card}>
        <View style={themeStyles.avatar}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("@/assets/images/react-logo.png")}
          />
        </View>
        <View>
          <Text style={themeStyles.buttonText}>{state.ride.driver.name}</Text>
          <View>
            <Text numberOfLines={3} style={themeStyles.buttonTextSmall}>
              {state.ride.driver.auto.name}
            </Text>
          </View>
        </View>
        <View style={themeStyles.rating}>
          <StarIcon color={themeColors.foreground} />
          <Text style={{ color: themeColors.foreground }}>
            {state.ride.driver.rating}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={themeStyles.number}>
          <Text
            numberOfLines={3}
            style={[
              themeStyles.buttonText,
              { fontFamily: "InterRegularBold18" },
            ]}
          >
            {state.ride.driver.auto.number}
          </Text>
        </View>
        <View style={[themeStyles.status, themeStyles.statusFirst]}>
          <Text
            numberOfLines={3}
            style={[
              themeStyles.buttonText,
              { textAlign: "center", fontFamily: "InterRegularBold18" },
            ]}
          >
            {state.ride.status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingTop: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text numberOfLines={3} style={themeStyles.buttonText}>
            Тариф
          </Text>
          <Text
            numberOfLines={3}
            style={[
              themeStyles.buttonText,
              { fontFamily: "InterRegularBold18" },
            ]}
          >
            {state.ride.fare}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <SeatIcon color={colorScheme === "dark" ? "#ffffff" : "#00000"} />
            <Text numberOfLines={3} style={themeStyles.buttonText}>
              {state.ride.driver.auto.countPlace}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              themeStyles.buttonText,
              {
                fontFamily: "InterRegularBold24",
                fontSize: 24,
                textAlign: "center",
              },
            ]}
          >
            {state.ride.price}₽
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: colors.background,
      borderRadius: 10,
      gap: 5,
    },
    card: {
      width: "100%",
      fontFamily: "InterRegular18",
      alignItems: "center",
      fontSize: 10,
      flexDirection: "row",
      borderWidth: 1,
      borderRadius: 10,
      padding: 16,
      gap: 5,
      borderColor: colors.secondaryForeground,
    },
    avatar: {
      width: 40,
    },
    rating: { width: 40, flexDirection: "row" },
    type: {
      color: colors.foreground,
    },
    price: {
      color: colors.secondaryForeground,
    },
    buttonText: {
      fontFamily: "InterRegular18",
      fontSize: 16,
      color: colors.foreground,
    },
    buttonTextSmall: {
      fontFamily: "InterRegular18",
      fontSize: 10,
      flex: 1,
      color: colors.secondaryForeground,
    },
    number: {
      backgroundColor: colors.primary,
      borderRadius: 50,
      paddingInline: 16,
      paddingBlock: 8,
      color: colors.foreground,
    },
    status: {
      justifyContent: "center",
      minWidth: 150,
      borderRadius: 8,
      paddingInline: 16,
      paddingBlock: 8,
      color: colors.foreground,
    },
    statusFirst: { backgroundColor: Colors.status.first },
    statusSecond: { backgroundColor: Colors.status.second },
    statusThird: { backgroundColor: Colors.status.third },
    statusFourth: { backgroundColor: Colors.status.fourth },
    statusFifth: { backgroundColor: Colors.status.fifth },
  });
