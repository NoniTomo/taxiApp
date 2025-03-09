import { Colors } from "@/constants/Colors";
import Svg, { Path } from "react-native-svg";

export const ProfileIcon = (
  { color }: IconProps = { color: Colors.light.lightSecondaryForeground }
) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4ZM10.5 4C10.5 5.38071 9.38071 6.5 8 6.5C6.61929 6.5 5.5 5.38071 5.5 4C5.5 2.61929 6.61929 1.5 8 1.5C9.38071 1.5 10.5 2.61929 10.5 4Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 13.772V16H16V13.772C16 12.1046 14.9657 10.6121 13.4045 10.0267L13.2669 9.97507C9.87107 8.70165 6.12893 8.70165 2.73315 9.97507L2.59551 10.0267C1.03429 10.6121 0 12.1046 0 13.772ZM3.25984 11.3796C6.31603 10.2335 9.68397 10.2335 12.7402 11.3796L12.8778 11.4312C13.8536 11.7971 14.5 12.7299 14.5 13.772V14.5H1.5V13.772C1.5 12.7299 2.14643 11.7971 3.12219 11.4312L3.25984 11.3796Z"
        fill={color}
      />
    </Svg>
  );
};
