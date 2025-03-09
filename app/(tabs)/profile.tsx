import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  TouchableHighlight,
} from "react-native";
import { Controller } from "react-hook-form";
import { TextField } from "@/components/ui/TextFiels";
import { useProfileScreen } from "@/components/profile/hooks/useProfileScreen";
import { Colors } from "@/constants/Colors";
import { styles } from "@/components/profile/styles";

export default function ProfileScreen() {
  const { state, functions } = useProfileScreen();

  const colorScheme = useColorScheme();
  const themeStyles = styles(Colors[colorScheme ?? "light"]);

  return (
    <ScrollView contentContainerStyle={themeStyles.container}>
      <View style={themeStyles.containerHeader}>
        <Text style={themeStyles.title}>Профиль</Text>
      </View>
      <Text style={themeStyles.text}>Данные вашего профиля</Text>
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Номер телефона"
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
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Имя"
            id="firstName"
            placeholder="Имя"
            error={state.form.formState.errors.firstName?.message}
            isDisabled={false}
            isRequired={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="firstName"
        rules={{ required: "Это поле обязательное" }}
      />
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Фамилия"
            id="middleName"
            placeholder="Фамилия"
            error={state.form.formState.errors.middleName?.message}
            isDisabled={false}
            isRequired={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="middleName"
        rules={{ required: "Это поле обязательное" }}
      />
      <Controller
        control={state.form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Отчество"
            id="lastName"
            placeholder="Отчество"
            error={state.form.formState.errors.lastName?.message}
            isDisabled={false}
            isRequired={false}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="lastName"
      />
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={state.form.handleSubmit(functions.onSubmit)}
        style={themeStyles.buttonUpdate}
      >
        <Text style={themeStyles.buttonText}>Обновить</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={functions.onLeave}
        style={themeStyles.button}
      >
        <Text style={themeStyles.buttonText}>Выйти</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}
