import { YamapSuggestWithCoords } from "react-native-yamap";

export type ActualYamapSuggestWithCoords = {
  Components: { name: string }[];
} & YamapSuggestWithCoords;
