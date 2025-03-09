"use client";

import type { StageProviderProps } from "./context/StageContext";
import { AuthScreenProvider } from "./context/AuthScreenContext";
import { StageProvider } from "./context/StageContext";
import { Stepper } from "./Stepper";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    padding: 2,
  },
});

export interface ProviderProps {
  children: React.ReactNode;
  stage: Omit<StageProviderProps, "children">;
}

export function AuthPageProvider({ stage }: ProviderProps) {
  return (
    <StageProvider {...stage}>
      <AuthScreenProvider>
        <View style={styles.container}>
          <Stepper />
        </View>
      </AuthScreenProvider>
    </StageProvider>
  );
}
