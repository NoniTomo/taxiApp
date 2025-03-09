import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AuthCheck from "@/components/AuthCheck";
import { MainIcon, ProfileIcon } from "@/components/ui/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthCheck>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
          tabBarInactiveTintColor:
            Colors[colorScheme ?? "light"].lightSecondaryForeground,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Главная",
            tabBarIcon: ({ color }) => <MainIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Профиль",
            tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="ride"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </AuthCheck>
  );
}
