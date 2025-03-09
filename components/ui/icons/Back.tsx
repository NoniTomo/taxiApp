import Svg, { Path } from "react-native-svg";

export const BackIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.4871 21.2377C15.8796 21.6302 16.5168 21.6273 16.9058 21.2314C17.29 20.8404 17.2872 20.2128 16.8996 19.8252L9.02461 11.9502L16.8996 4.07522C17.2872 3.68761 17.29 3.06003 16.9058 2.669C16.5168 2.27305 15.8796 2.27023 15.4871 2.66272L6.90671 11.2431C6.51619 11.6336 6.51619 12.2668 6.90672 12.6573L15.4871 21.2377Z"
        fill={color}
      />
    </Svg>
  );
};
