import { RideCard } from "@/components/ride/components/";
import { useRidePage } from "@/components/ride/hooks/useRidePage";
import { CustomMarker } from "@/components/ui/CutomMarker";
import { StarIcon } from "@/components/ui/icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import { View, Text } from "react-native";
import { Polyline, YaMap } from "react-native-yamap";

export default function Ride() {
  const { state, functions, themeColor, themeStyles } = useRidePage();

  return (
    <>
      <YaMap
        ref={state.route.mapRef}
        rotateGesturesEnabled={false}
        userLocationIconScale={0.5}
        nightMode={true}
        initialRegion={{
          lat: state.startLocation.lat,
          lon: state.startLocation.lon,
          zoom: 7,
          azimuth: 0,
        }}
        style={themeStyles.map}
      >
        {state.taxiList &&
          state.taxiList.map((taxi, index) => (
            <CustomMarker
              key={index}
              latitude={taxi.lat}
              longitude={taxi.lon}
              src={require("@/assets/images/taxi.png")}
              rotate={taxi.rotate}
            />
          ))}

        {state.startAddress.lat && state.startAddress.lon && (
          <CustomMarker
            latitude={state.startAddress.lat}
            longitude={state.startAddress.lon}
            src={require("@/assets/images/finallyMarker.png")}
            rotate={1}
          />
        )}

        {state.finishAddress.lat && state.finishAddress.lon && (
          <CustomMarker
            latitude={state.finishAddress.lat}
            longitude={state.finishAddress.lon}
            src={require("@/assets/images/flag.png")}
            rotate={1}
          />
        )}

        {!!state.route.state.points.length && (
          <Polyline
            points={state.route.state.points}
            strokeColor="#C7C7C7"
            strokeWidth={4}
          />
        )}
      </YaMap>
      <View style={themeStyles.top}>
        <View style={themeStyles.card}>
          <Text style={themeStyles.buttonText}>Оцените поездку</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {Array.from([1, 2, 3, 4, 5], (index) => (
              <TouchableHighlight
                underlayColor={"transparent"}
                key={index}
                onPress={() => functions.setCurrectRating(index)}
              >
                <View style={{ transform: "scale(1.25)" }}>
                  <StarIcon
                    color={
                      index <= state.currectRating
                        ? themeColor.primary
                        : themeColor.background
                    }
                    strokeColor={
                      index <= state.currectRating
                        ? themeColor.primary
                        : themeColor.foreground
                    }
                  />
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </View>
      <View style={themeStyles.bottom}>
        <RideCard />
      </View>
    </>
  );
}
