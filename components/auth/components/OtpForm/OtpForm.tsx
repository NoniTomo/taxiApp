"use client";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { BackIcon } from "@/components/ui/icons";
import { useStage } from "../../context/StageContext";
import { useOtpForm } from "./hooks/useOtpForm";
import { View } from "react-native";
import { TextField } from "@/components/ui/TextFiels";
import { Controller } from "react-hook-form";
import { Colors } from "@/constants/Colors";

export function OtpForm() {
  const stageContext = useStage();
  const { state, functions } = useOtpForm();
  const colorScheme = useColorScheme();
  const themeStyles = styles(Colors[colorScheme ?? "light"]);

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.containerHeader}>
        <TouchableOpacity
          onPress={stageContext.back}
          className="border-none shadow-none bg-transparent gap-4 sm:flex font-inter text-xl text-secondary-secondary-2 w-min items-center hover:bg-transparent hover:grey-dark-filter"
          style={themeStyles.backButton}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={themeStyles.title}>Авторизация</Text>
      </View>
      <Text style={themeStyles.text}>
        Введите проверочный код для входа в личный кабинет
      </Text>
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            id="phone"
            placeholder="89991775232"
            error={state.form.formState.errors.phone?.message}
            isDisabled={true}
            isRequired={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="phone"
        rules={{ required: "Это поле обязательное" }}
      />
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            id="otp"
            placeholder="Проверочный код"
            error={state.form.formState.errors.otp?.message}
            isDisabled={false}
            isRequired={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="otp"
        rules={{ required: "Это поле обязательное" }}
      />

      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={state.form.handleSubmit(functions.onSubmit)}
        style={themeStyles.button}
      >
        <Text style={themeStyles.buttonText}>Войти</Text>
      </TouchableHighlight>
      {!!state.isEnding && (
        <TouchableOpacity
          style={themeStyles.buttonOtp}
          onPress={() => functions.handleGetOtp()}
          //className="font-inter text-base text-text bg-transparent font-bold hover:underline shadow-none border-none hover:bg-transparent"
        >
          <Text style={themeStyles.textButtonOtp}>Запросить код ещё раз</Text>
        </TouchableOpacity>
      )}
      {!state.isEnding && (
        <Text
          style={themeStyles.textSecondary}
          className="font-inter text-sm text-secondary-secondary-2"
        >
          запросить код повторно можно через {state.seconds} секунд
        </Text>
      )}
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
    containerHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    text: {
      fontSize: 20,
      color: colors.foreground,
    },
    textSecondary: {
      fontSize: 18,
      color: colors.secondaryForeground,
    },
    container: {
      gap: 20,
      padding: 16,
    },
    backButton: {
      flexDirection: "row",
    },
    buttonOtp: {
      justifyContent: "center",
    },
    textButtonOtp: {
      fontSize: 18,
      color: colors.foreground,
      textDecorationLine: "underline",
      textAlign: "center",
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
