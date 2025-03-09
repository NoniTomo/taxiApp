import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export const CrossIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_26_1840)">
      <Path
        d="M18 6L6 18"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_26_1840">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
