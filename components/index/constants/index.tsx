import { Image } from "react-native";

export const FARES_TABS = [
  {
    id: 1,
    img: (
      <Image
        style={{ height: 30 }}
        source={require("@/assets/images/fares/eco.png")}
      />
    ),
    type: "economy",
    price: 95,
  },
  {
    id: 2,
    img: (
      <Image
        style={{ height: 30 }}
        source={require("@/assets/images/fares/comfort.png")}
      />
    ),
    type: "comfort",
    price: 114,
  },
  {
    id: 3,
    img: (
      <Image
        style={{ height: 30 }}
        source={require("@/assets/images/fares/comfortPlus.png")}
      />
    ),
    type: "comfortPlus",
    price: 131.1,
  },
  {
    id: 4,
    img: (
      <Image
        style={{ height: 30 }}
        source={require("@/assets/images/fares/child.png")}
      />
    ),
    type: "child",
    price: 95,
  },
  {
    id: 5,
    img: (
      <Image
        style={{ height: 30 }}
        source={require("@/assets/images/fares/cargo.png")}
      />
    ),
    type: "cargo",
    price: 529,
  },
] as {
  id: number;
  img: React.ReactNode;
  type: Fares;
  price: number;
}[];

export const FARES_RUS = {
  cargo: "Грузовой",
  child: "Детский",
  comfortPlus: "Комфорт+",
  comfort: "Комфорт",
  economy: "Эконом",
};

export const PAY_TYPE_RUS = {
  cash: "Наличные",
  nonСash: "Безналичная",
};
