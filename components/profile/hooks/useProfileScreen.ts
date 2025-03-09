import { useAuth, useUser } from "@/contexts";
import { useForm } from "react-hook-form";
import { useColorScheme } from "react-native";

export function useProfileScreen() {
  const userContext = useUser();
  const authContext = useAuth();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      phone: userContext.value?.phone ?? "",
      firstName: userContext.value?.firstName ?? "",
      middleName: userContext.value?.middleName ?? "",
      lastName: userContext.value?.lastName ?? "",
    },
  });

  const onSubmit = (data: User) => {
    const phone = data.phone
      .split("")
      .filter((char) => char !== " ")
      .join("");
    userContext.set({ ...data, phone });
  };

  const onLeave = () => authContext.signOut();

  return {
    state: { form },
    functions: { onSubmit, onLeave },
  };
}
