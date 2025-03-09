import { useEffect, useRef } from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";
import { Marker, Point } from "react-native-yamap";

type MyMarker = {
  rotate: number;
  point?: Point;
  source?: ImageSourcePropType;
  children: React.ReactNode;
};

export const RotateMarker = (props: MyMarker) => {
  const { rotate, ...p } = props;
  const marker = useRef<Marker>();
  useEffect(() => {
    if (marker.current) {
      marker.current.animatedRotateTo(rotate, 10);
    }
  }, [rotate]);

  return <Marker rotated={true} ref={marker} {...p} />;
};
