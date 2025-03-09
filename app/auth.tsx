import { StyleSheet, Text, View } from "react-native";
import { AuthPageProvider } from "@/components/auth/AuthPageProvider";
import { Stepper } from "@/components/auth/Stepper";

const styles = StyleSheet.create({
  container: {
    marginBlock: 20,
  },
});

export default function Auth() {
  return (
    <View>
      <View style={styles.container}>
        <AuthPageProvider
          stage={{ defaultStage: { currentStage: "phoneForm" } }}
        >
          <Stepper />
        </AuthPageProvider>
      </View>
    </View>
  );
}
