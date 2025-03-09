import AuthCheck from "@/components/AuthCheck";
import { useFindAddressPage } from "@/components/findAddress/hooks/useFindAddressPage";
import { BackIcon } from "@/components/ui/icons";
import { Colors } from "@/constants/Colors";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

export default function FindAddress() {
  const { state, functions, themeStyles } = useFindAddressPage();
  const colorScheme = useColorScheme();

  const themeColors = Colors[colorScheme ?? "light"];

  return (
    <AuthCheck>
      <View style={{ padding: 10, paddingTop: 40, gap: 10 }}>
        <View style={themeStyles.containerHeader}>
          <TouchableOpacity
            onPress={() => functions.back()}
            className="border-none shadow-none bg-transparent gap-4 sm:flex font-inter text-xl text-secondary-secondary-2 w-min items-center hover:bg-transparent hover:grey-dark-filter"
            style={themeStyles.backButton}
          >
            <BackIcon color={colorScheme === "dark" ? "#ffffff" : "#00000"} />
          </TouchableOpacity>
          <Text style={themeStyles.title}>Адрес</Text>
        </View>
        <TextInput
          value={state.startAddress}
          onChangeText={(text) => {
            functions.setStartAddress(text);
            functions.find(text);
          }}
          onFocus={() => functions.setActiveField("start")}
          placeholder="Откуда?"
          style={[
            {
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
              height: 40,
              color: themeColors.foreground,
            },
            themeStyles.font,
          ]}
        />
        <View style={{ flexDirection: "row", gap: "3%" }}>
          <TextInput
            value={state.finishAddress}
            onChangeText={(text) => {
              functions.setFinishAddress(text);
              functions.find(text);
            }}
            onFocus={() => functions.setActiveField("finish")}
            placeholder="Куда?"
            style={[
              {
                width: "77%",
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                paddingInline: 10,
                borderRadius: 5,
                marginBottom: 10,
                height: 40,
                color: themeColors.foreground,
              },
              themeStyles.font,
            ]}
          />
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => functions.toTabs()}
            style={{ width: "20%" }}
          >
            <Text style={[themeStyles.button, themeStyles.font]}>Карта</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            backgroundColor: Colors.light.secondary,
            width: "100%",
            height: 1,
            borderRadius: 100,
          }}
        ></View>
        {!!state.suggests.length && (
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => {}}
            style={{ width: "100%" }}
          >
            <Text
              style={[
                themeStyles.buttonMyPosition,
                themeStyles.font,
                { borderRadius: 30 },
              ]}
            >
              Мое местоположение
            </Text>
          </TouchableHighlight>
        )}
        <ScrollView>
          <View style={{ gap: 6 }}>
            {state.suggests.map((suggest, index) => (
              <TouchableHighlight
                underlayColor={"transparent"}
                key={index}
                onPress={() => functions.onPress(index)}
              >
                <Text style={[themeStyles.font]}>
                  {suggest.title}
                  {suggest.subtitle && `, ${suggest.subtitle}`}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>
    </AuthCheck>
  );
}
