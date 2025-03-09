import React from "react";

import { FareTabs } from "@/components/index/components/faresTabs/fareTabs";
import { RightBackIcon } from "@/components/ui/icons";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Polyline, YaMap } from "react-native-yamap";
import { CustomMarker } from "@/components/ui/CutomMarker";
import { useMapPage } from "@/components/index/hooks/useMapPage";
import { PayTabs } from "@/components/index/components/payTabs/payTabs";

YaMap.init("9138a816-45d2-4e7d-9ba2-3edb80543afa");

export default function Map() {
  const { themeStyles, state, functions } = useMapPage();

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
          <View style={themeStyles.topContainer}>
            <TouchableWithoutFeedback onPress={functions.toFindAddress}>
              <View style={themeStyles.addressButton}>
                <View
                  style={{
                    width: "auto",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("@/assets/images/finallyMarker.png")}
                  />
                  <View>
                    <Text style={themeStyles.buttonText}>Откуда?</Text>
                    {state.startAddress.name && (
                      <View>
                        <Text
                          numberOfLines={3}
                          style={themeStyles.buttonTextSmall}
                        >
                          {state.startAddress.name}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <RightBackIcon />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={functions.toFindAddress}>
              <View style={themeStyles.addressButton}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("@/assets/images/flag.png")}
                  />
                  <View>
                    <Text style={themeStyles.buttonText}>Куда?</Text>
                    {state.finishAddress.name && (
                      <View>
                        <Text
                          numberOfLines={3}
                          style={themeStyles.buttonTextSmall}
                        >
                          {state.finishAddress.name}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <RightBackIcon />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={themeStyles.topContainer}>
            <Text style={themeStyles.buttonText}>Способ оплаты</Text>
            <PayTabs />
          </View>
        </View>
        <View style={themeStyles.card}>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => functions.toRide()}
            style={[themeStyles.topContainer, { padding: 4 }]}
          >
            <Text style={themeStyles.buttonText}>К текущей поездке</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={themeStyles.bottom}>
        <FareTabs />
        <TouchableHighlight
          underlayColor={"transparent"}
          disabled={!state.active}
          onPress={() => functions.toRide()}
          style={[
            themeStyles.button,
            state.active && themeStyles.activeButton,
            !state.active && themeStyles.disabledButton,
          ]}
        >
          <Text style={themeStyles.buttonText}>Заказать</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}
