import { ScrollView, StyleSheet, View } from "react-native";
import { FareCard } from "../fareCard/fareCard";
import { FARES_TABS } from "../../constants";
import { FARES_RUS } from "../../constants/index";
import { useOrder } from "@/contexts";

export const FareTabs = () => {
  const orderContext = useOrder();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.scrollContainer}>
        {FARES_TABS.map((tab) => (
          <FareCard
            img={tab.img}
            type={tab.type}
            typeLocale={FARES_RUS[tab.type]}
            price={tab.price}
            key={tab.type}
            active={orderContext.value?.fares === tab.type}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  scrollContainer: {
    flexDirection: "row",
    paddingHorizontal: 5, // Adjust spacing between items
    gap: 10,
  },
});
