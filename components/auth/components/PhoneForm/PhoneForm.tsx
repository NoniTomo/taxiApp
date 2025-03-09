"use client";

import { usePhoneForm } from "./hooks/usePhoneForm";
import {
  Button,
  StyleSheet,
  Text,
  TextComponent,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import { Controller } from "react-hook-form";
import { TextField } from "@/components/ui/TextFiels";
import { Colors } from "@/constants/Colors";

export function PhoneForm() {
  const { state, functions } = usePhoneForm();
  const colorScheme = useColorScheme();
  const themeStyles = styles(Colors[colorScheme ?? "light"]);

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Авторизация</Text>
      <Text style={themeStyles.text}>
        Введите номер телефона для входа в личный кабинет
      </Text>
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            id="phone"
            placeholder="89991775232"
            error={state.form.formState.errors.phone?.message}
            isDisabled={false}
            isRequired={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="phone"
        rules={{ required: "Это поле обязательное" }}
      />
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={state.form.handleSubmit(functions.onSubmit)}
        style={themeStyles.button}
      >
        <Text style={themeStyles.buttonText}>Далее</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = (colors: typeof Colors.dark | typeof Colors.light) =>
  StyleSheet.create({
    title: {
      fontSize: 32,
      color: colors.foreground,
      fontWeight: "bold",
    },
    text: {
      fontSize: 20,
      color: colors.foreground,
    },
    container: {
      gap: 20,
      padding: 16,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 15,
      backgroundColor: colors.primary,
    },
    buttonText: {
      fontFamily: "InterRegular18",
      fontSize: 16,
    },
  });
