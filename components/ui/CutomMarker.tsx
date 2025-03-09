import { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { RotateMarker } from "./RotateMarker";

interface CustomMarker {
  latitude: number;
  longitude: number;
  rotate: number;
  src: ImageSourcePropType;
}

export const CustomMarker = ({
  latitude,
  longitude,
  src,
  rotate,
}: CustomMarker) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <>
      <Image
        style={styles.marker}
        source={src}
        onLoadEnd={() => {
          setImageLoaded(true);
          setKey((prev) => prev + 1);
        }}
      />

      {imageLoaded && (
        <RotateMarker
          key={key}
          children={<Image style={styles.marker} source={src} />}
          point={{ lat: latitude, lon: longitude }}
          source={src}
          rotate={rotate}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  marker: {
    zIndex: 100,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
