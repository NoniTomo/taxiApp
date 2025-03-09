import { Colors } from "@/constants/Colors";
import Svg, { Path } from "react-native-svg";

export const StarIcon = (
  { strokeColor, color }: IconProps = {
    strokeColor: Colors.light.lightSecondaryForeground,
    color: "none",
  }
) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
      <Path
        d="M9.99996 1.66675L12.575 6.88341L18.3333 7.72508L14.1666 11.7834L15.15 17.5167L9.99996 14.8084L4.84996 17.5167L5.83329 11.7834L1.66663 7.72508L7.42496 6.88341L9.99996 1.66675Z"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
