import { useOrder } from "@/contexts";
import { useLocation } from "@/hooks/useLocation";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { styles } from "../styles";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Search, Suggest, SuggestOptions } from "react-native-yamap";
import { useDebounceCallback } from "@/hooks/useDebounceCallback";
import { ActualYamapSuggestWithCoords } from "../types";

export const useFindAddressPage = () => {
  const [suggests, setSuggests] = useState<ActualYamapSuggestWithCoords[]>([]);
  const [startAddress, setStartAddress] = useState<string>("");
  const [finishAddress, setFinishAddress] = useState<string>("");
  const orderContext = useOrder();

  const router = useRouter();

  const colorScheme = useColorScheme();
  const themeStyles = styles(Colors[colorScheme ?? "light"]);

  const [activeField, setActiveField] = useState<"start" | "finish">("start");

  const find = useDebounceCallback(
    async (query: string, options?: SuggestOptions) => {
      if (!query.trim()) {
        setSuggests([]);
        return;
      }

      const suggestionsWithCoards = (await Suggest.suggestWithCoords(
        query,
        options
      )) as ActualYamapSuggestWithCoords[];

      console.log(suggestionsWithCoards);

      setSuggests(suggestionsWithCoards);

      Suggest.reset();
    },
    500
  );

  const onPress = async (index: number) => {
    const resolveURI =
      suggests[index].uri &&
      ((await Search.resolveURI(suggests[index].uri, {
        disableSpellingCorrection: true,
        geometry: true,
      })) as unknown as ActualYamapSuggestWithCoords);

    resolveURI;

    console.log(resolveURI);
    if (resolveURI) {
      if (activeField === "start") {
        setStartAddress(resolveURI.Components[0].name);
        orderContext.set({
          ...orderContext.value,
          payType: orderContext.value?.payType ?? "nonСash",
          startAddress: resolveURI,
        });
        setSuggests([]);
      } else {
        setFinishAddress(resolveURI.Components[0].name);
        orderContext.set({
          ...orderContext.value,
          payType: orderContext.value?.payType ?? "nonСash",
          finishAddress: resolveURI,
        });
        setSuggests([]);
      }
    }
  };

  console.log(orderContext.value);

  const back = () => router.back();
  const toTabs = () => router.navigate("/(tabs)");

  return {
    state: {
      suggests,
      startAddress,
      finishAddress,
      activeField,
    },
    functions: {
      onPress,
      setActiveField,
      find,
      back,
      toTabs,
      setStartAddress,
      setFinishAddress,
    },
    themeStyles,
    colorScheme,
  };
};
