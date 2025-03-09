import type { InputHTMLAttributes } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export type TextFieldProps = {
  label?: string;
  id: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder: string;
  error?: string;
  value?: string;
  onBlur?: () => void;
  onChangeText?: () => void;
};

export function TextField({
  label,
  id,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
  value,
  ...props
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <TextInput
        {...props}
        {...(value ? { value } : {})}
        placeholder={placeholder}
        editable={!isDisabled}
        style={[
          styles.input,
          isDisabled && styles.disabledInput,
          error && styles.errorInput,
        ]}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    color: "#C7C7C7",
  },
  required: {
    color: "red",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    borderColor: "#aaa",
  },
  errorInput: {
    borderColor: "#f64c4c",
    backgroundColor: "#f8d7da",
  },
  errorText: {
    color: "#f64c4c",
    fontSize: 12,
    marginTop: 4,
  },
});
