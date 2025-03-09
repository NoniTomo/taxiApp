import { useOrder } from "@/contexts";
import { useLocation } from "@/hooks/useLocation";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { styles } from "../styles";
import { Colors } from "@/constants/Colors";
import { useRoute } from "@/hooks/useRoute";
import { useEffect, useState } from "react";

export const useRidePage = () => {
  const location = useLocation();
  const router = useRouter();

  const orderContext = useOrder();
  const route = useRoute();
  const [currectRating, setCurrectRating] = useState(0);

  const colorScheme = useColorScheme();
  const themeColor = Colors[colorScheme ?? "light"];
  const themeStyles = styles(Colors[colorScheme ?? "light"]);

  const active = Boolean(
    orderContext.value?.fares &&
      orderContext.value?.finishAddress &&
      orderContext.value?.startAddress &&
      orderContext.value.payType
  );

  const startLocation = {
    lat: location?.coords.latitude ?? 56.466615,
    lon: location?.coords.longitude ?? 84.961052,
  };

  const startAddress = {
    lon: orderContext.value?.startAddress?.point.lon,
    lat: orderContext.value?.startAddress?.point.lat,
    name: orderContext.value?.startAddress?.Components[0].name,
  };

  const finishAddress = {
    lon: orderContext.value?.finishAddress?.point.lon,
    lat: orderContext.value?.finishAddress?.point.lat,
    name: orderContext.value?.finishAddress?.Components[0].name,
  };

  // In the future, it will come from the backend.
  const taxiList = [
    {
      lat: 56.466615,
      lon: 84.961052,
      rotate: 100,
    },
    {
      lat: 56.47335,
      lon: 84.950358,
      rotate: 180,
    },
  ];

  const toRide = () => router.navigate("/(tabs)/ride");
  const toFindAddress = () => router.push("./findAddress");

  useEffect(() => {
    if (
      typeof startAddress.lat == "number" &&
      typeof finishAddress.lat == "number"
    ) {
      route.functions.getRoutes(startAddress, finishAddress);
    }
  }, []);

  return {
    state: {
      startLocation,
      route,
      active,
      taxiList,
      startAddress,
      finishAddress,
      currectRating,
    },
    functions: { toRide, toFindAddress, setCurrectRating },
    themeStyles,
    themeColor,
  };
};
