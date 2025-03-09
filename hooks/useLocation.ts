import React from "react";
import * as Location from "expo-location";

export function useLocation() {
  const [location, setLocation] =
    React.useState<Location.LocationObject | null>(null);

  React.useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  return location;
}
